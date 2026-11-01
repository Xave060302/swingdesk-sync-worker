// SwingDesk AI – Cloudflare Cron-Worker mit gezielter Fehlerdiagnose.
// Keine Zugangsschluessel oder TradingView-Cookies in diesem Repository speichern.
const VERSION = 'cron-diagnose-2.2';
const TARGET_PATH = '/api/background/run';
function log(level, stage, detail = {}) {
  const entry = { app: 'SwingDesk', version: VERSION, stage, ...detail };
  if (level === 'error') console.error(entry);
  else if (level === 'warn') console.warn(entry);
  else console.log(entry);
}
export default {
  async fetch() {
    return Response.json({ service: 'SwingDesk Cron Worker', version: VERSION, hint: 'Die eigentliche Synchronisierung startet nur durch den Cron-Trigger.' });
  },
  async scheduled(event, env) {
    const cron = event?.cron || 'unbekannt';
    log('info', 'START', { cron });
    try {
      if (!env?.APP_URL) throw new Error('APP_URL_MISSING');
      if (typeof env.SYNC_KEY !== 'string' || env.SYNC_KEY.length < 32) {
        throw new Error('SYNC_KEY_MISSING_OR_TOO_SHORT');
      }
      let url;
      try { url = new URL(TARGET_PATH, env.APP_URL); }
      catch { throw new Error('APP_URL_INVALID'); }
      if (url.protocol !== 'https:') throw new Error('APP_URL_NOT_HTTPS');
      log('info', 'REQUEST', { targetOrigin: url.origin, path: url.pathname });
      let response;
      try {
        response = await fetch(url, {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + env.SYNC_KEY, 'Accept': 'application/json' },
          redirect: 'manual',
          signal: AbortSignal.timeout(20000)
        });
      } catch (error) {
        throw new Error('NETWORK_ERROR: ' + String(error?.message || error).slice(0, 180));
      }
      // Die Antwort nur einmal lesen. Cloudflare-Fehlerseiten sind oft HTML,
      // nicht JSON. Sensible Antwortinhalte werden niemals protokolliert.
      const body = await response.text();
      let result = null;
      try { result = JSON.parse(body); } catch { /* HTML / Text */ }
      if (!response.ok) {
        const apiError = (typeof result?.error === 'string' ? result.error : result?.error?.message) || null;
        const codeMatch = body.match(/(?:error|code|cloudflare)[^0-9]{0,55}(1\d{3,4})\b/i)
          || body.match(/\b(1016|1042|1021|1022|1019|1024|1101|1102)\b/);
        const cfCode = codeMatch ? codeMatch[1] : null;
        const rayId = response.headers.get('cf-ray') || null;
        const contentType = (response.headers.get('content-type') || '').slice(0, 80);
        log('error', 'UPSTREAM_HTTP_ERROR', {
          httpStatus: response.status,
          cfCode, cfRay: rayId, contentType,
          apiError: apiError ? String(apiError).slice(0, 140) : null,
          looksLikeCloudflareError: /cloudflare|cf-error|cf-ray/i.test(body.slice(0, 16000))
        });
        throw new Error('HTTP_' + response.status + (cfCode ? '_CF_' + cfCode : '') + ': ' +
          (apiError || 'Cloudflare-/Serverantwort konnte nicht als API-JSON gelesen werden.').slice(0, 140));
      }
      if (result?.skipped) {
        log('warn', 'SKIPPED', { reason: 'Die Hintergrundsynchronisierung ist in SwingDesk deaktiviert.' });
        return;
      }
      log('info', 'SUCCESS', {
        lastSuccess: result?.lastSuccess || null,
        matched: Number.isInteger(result?.matched) ? result.matched : null,
        count: Number.isInteger(result?.count) ? result.count : null
      });
    } catch (error) {
      // In Cloudflare Observability erscheint hier der echte Fehler statt nur "*/5 * * * *".
      log('error', 'FAILED', { reason: String(error?.message || error).slice(0, 240) });
      throw error;
    }
  }
};

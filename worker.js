// SwingDesk AI – Cloudflare Cron-Worker mit gezielter Fehlerdiagnose.
// Keine Zugangsschluessel oder TradingView-Cookies in diesem Repository speichern.
const VERSION = 'cron-diagnose-2.1';
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
      let result = null;
      try { result = await response.json(); } catch { /* No JSON result. */ }
      if (!response.ok) {
        const apiError = (typeof result?.error === 'string' ? result.error : result?.error?.message) || null;
        log('error', 'SERVER_REJECTED', { httpStatus: response.status, apiError: apiError?.slice(0, 180) || null });
        throw new Error('HTTP_' + response.status + ': ' + (apiError || 'Die Ziel-API hat den Aufruf abgelehnt.').slice(0, 180));
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

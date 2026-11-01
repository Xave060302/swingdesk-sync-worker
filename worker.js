// SwingDesk AI: separat in Cloudflare Workers bereitstellen.
export default {
  async fetch() { return new Response('SwingDesk-Cron-Worker aktiv. Ausführung erfolgt nach Zeitplan.'); },
  async scheduled(event, env) {
    if (!env.APP_URL || !env.SYNC_KEY) throw Error('APP_URL oder SYNC_KEY fehlen');
    const url = new URL('/api/background/run', env.APP_URL);
    if (url.protocol !== 'https:') throw Error('APP_URL muss HTTPS verwenden');
    const r = await fetch(url.toString(), {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + env.SYNC_KEY },
      redirect: 'error'
    });
    if (!r.ok) throw Error('Hintergrundabgleich fehlgeschlagen: HTTP ' + r.status + ' – ' + (await r.text()).slice(0,180));
  }
};

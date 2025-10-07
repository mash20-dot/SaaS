// Minimal API helper: apiFetch(url, opts)
// Attaches Authorization header if session token exists in sessionStorage
// Usage: apiFetch('/api/endpoint', { method: 'GET' })

window.apiFetch = async function (url, opts = {}) {
    const base = '';
    const fullUrl = url.startsWith('http') ? url : (base + url);

    const headers = new Headers(opts.headers || {});
    headers.set('Content-Type', headers.get('Content-Type') || 'application/json');

    try {
        const token = sessionStorage.getItem('nkwabiz_token');
        if (token) headers.set('Authorization', 'Bearer ' + token);
    } catch (e) {
        console.warn('sessionStorage unavailable', e);
    }

    const cfg = Object.assign({}, opts, { headers });

    // add a default timeout (15s) to avoid hanging requests
    const timeoutMs = (opts && opts.timeoutMs) ? opts.timeoutMs : 15000;
    const controller = new AbortController();
    cfg.signal = controller.signal;

    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const resp = await fetch(fullUrl, cfg);
        return resp;
    } catch (err) {
        // if aborted, make a synthetic Response-like error object for callers
        if (err && err.name === 'AbortError') {
            const e = new Error('Request timed out');
            e.timedout = true;
            throw e;
        }
        throw err;
    } finally {
        clearTimeout(timer);
    }
};

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
    const resp = await fetch(fullUrl, cfg);
    return resp;
};

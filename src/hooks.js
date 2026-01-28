/** @type {import('@sveltejs/kit').Reroute} */
export function reroute({ url }) {
    if (url.hostname.startsWith('oficial.')) {
        if (url.pathname === '/') {
            return '/oficial';
        }
    }
}
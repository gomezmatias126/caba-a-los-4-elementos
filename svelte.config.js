import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consultar https://kit.svelte.dev/docs/integrations#preprocessors
	// para más información sobre preprocesadores
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto solo soporta algunos entornos, ver https://kit.svelte.dev/docs/adapter-auto para una lista.
		// Si tu entorno no está soportado, o si prefieres un entorno específico, cambia el adapter.
		// Para Cloudflare Pages usamos adapter-static:
		adapter: adapter({
			// páginas por defecto se renderizan en build/
			pages: 'build',
			assets: 'build',
			fallback: '404.html', // Necesario para SPA/Static routing en Cloudflare
			precompress: false,
			strict: true
		})
	}
};

export default config;
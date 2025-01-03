import adapter from '@sveltejs/adapter-auto';
import shortclass from './src/lib/index.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		shortclass(),
	],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

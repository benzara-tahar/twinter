import path from 'path';
import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import mediaMinMax from 'postcss-media-minmax';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer, cssnano, mediaMinMax]
			}
		})
	],

	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					$static: path.resolve('./static'),
					$data: path.resolve('./src/data'),
					$types: path.resolve('./src/types'),
					$store: path.resolve('./src/+store'),
					$layout: path.resolve('./src/layout')
				}
			}
		}
	}
};

export default config;

<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				status: status,
				error: error
			}
		};
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { Metadata } from '$lib';

	export let status: number;
	export let error: Error;
</script>

<svelte:head>
	<Metadata />
</svelte:head>

<div
	class="
    flex flex-col
    items-center
    justify-center
    h-screen
    bg-gradient-to-r
    from-secondary
    to-primary
  "
>
	<div class="px-40 py-20 bg-white rounded-md shadow-xl">
		<div class="flex flex-col items-center">
			<h1 class="font-bold text-primary-600 text-9xl">{status}</h1>

			<h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
				<span class="text-orange-500">Oops!</span> Page not found
			</h6>

			<p class="mb-8 text-center text-gray-500 md:text-lg">
				The page you’re looking for doesn’t exist.
			</p>

			<a href="/" class="btn btn-outline btn-primary ">Go home</a>
		</div>
	</div>

	{#if $page.url.hostname === 'localhost'}
		<div class="rounded-md    bg-gray-800 text-red-500 p-10 my-4">
			<p>
				{error.message}
			</p>
			{#if error.stack}
				<pre class="text-red-300"><code>{error.stack}</code></pre>
			{/if}
		</div>
	{/if}
</div>

<!-- <style lang="scss">
	@use 'src/styles/pages/error';
</style> -->

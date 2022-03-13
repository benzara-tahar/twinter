<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import TwitterPhoto from './TwitterPhoto.svelte';
	import TwitterBanner from './TwitterBanner.svelte';
	import checkSvg from '$static/check.svg';
	import { user as userStore } from '$store/user.store';

	let twitterFor = ['Creators', 'Founders', 'Entrepreneurs', 'Influencers', 'Everyone'];

	let twitterForText = twitterFor[0];
	let twitterForInterval;

	onMount(() => {
		twitterForInterval = setInterval((args) => {
			twitterForText = twitterFor[(twitterFor.indexOf(twitterForText) + 1) % twitterFor.length];
		}, 2000);
	});

	onDestroy(() => {
		clearInterval(twitterForInterval);
	});
</script>

<div class="hero min-h-screen px-6 py-12">
	<section class=" lg:grid lg:grid-cols-2 lg:gap-8 ">
		<div class="">
			<h1
				class=" mt-14 lg:text-6xl md:text-5xl text-4xl  tracking-tight font-extrabold  text-gray-800 dark:text-white"
			>
				<span class=""> Enhanced <span class="text-primary inline-block">Twitter.</span></span>

				<span class="block"
					>For

					{#key twitterForText}
						<span class="text-primary inline-block" in:fly={{ y: -20, duration: 200 }}>
							{twitterForText}.</span
						>
					{/key}
				</span>
			</h1>

			<p class="pt-4 text-xl font-normal tracking-wider dark:text-gray-200">
				Unlock insights you never knew about. Communicate better with your audience. Build strong
				1:1 relationships.
			</p>
			<!-- features -->
			<div class="grid grid-cols-2 gap-4 my-6">
				<div class="flex items-center space-x-3">
					<img src={checkSvg} alt="check" width="32" />
					<span class="text-lg text-gray-800 dark:text-gray-200"
						>Powerful Real-Time Analytics
					</span>
				</div>

				<div class="flex items-center space-x-3">
					<img src={checkSvg} alt="check" width="32" />
					<span class="text-lg text-gray-800 dark:text-gray-200">Real-time Banner </span>
				</div>

				<div class="flex items-center space-x-3">
					<img src={checkSvg} alt="check" width="32" />
					<span class="text-lg text-gray-800 dark:text-gray-200">Real-time photo </span>
				</div>

				<div class="flex items-center space-x-3">
					<img src={checkSvg} alt="check" width="32" />
					<span class="text-lg text-gray-800 dark:text-gray-200">Scheduling & Publishing </span>
				</div>
			</div>

			<!-- sign in button -->
			<button
				type="button"
				class=" mt-4 text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:ring-[#1da1f2]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 "
			>
				{#if !$userStore}
					<svg
						class="mr-2 -ml-1 w-4 h-4"
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="twitter"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							fill="currentColor"
							d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
						/></svg
					>
					Sign in with Twitter
				{:else}
					Start building stuffs
				{/if}
			</button>

			<p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
				By signing up, you agree to our
				<a href="/terms" class="underline">Terms</a> and
				<a href="/privacy" class="underline">Privacy Policy.</a>
			</p>
		</div>
		<div class=" mx-auto w-full max-w-md px-4 sm:max-w-2xl sm:px-6  lg:px-0 relative ">
			<TwitterPhoto />
		</div>
	</section>
</div>

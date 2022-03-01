<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	let twitterFor = ['Creators', 'Founders', 'Entrepreneurs', 'Influencers', 'Everyone'];
	let twitterForText = twitterFor[0];
	let twitterForInterval;
	export let message: string; // will be filled from layout props (load)
	onMount(() => {
		twitterForInterval = setInterval((args) => {
			twitterForText = twitterFor[(twitterFor.indexOf(twitterForText) + 1) % twitterFor.length];
			console.log(twitterForText);
		}, 2000);
	});
	onDestroy(() => {
		clearInterval(twitterForInterval);
	});
</script>

<div class="hero min-h-screen ">
	<section class=" lg:grid lg:grid-cols-2 lg:gap-8 ">
		<div class="">
			<h1
				class=" mt-4 lg:text-6xl md:text-5xl text-4xl  tracking-tight font-extrabold  text-gray-800 dark:text-white"
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

			<p class="pt-4 text-lg font-medium dark:text-gray-200">
				Unlock insights you never knew about. Communicate better with your audience. Build strong
				1:1 relationships.
			</p>
			<p>{message}</p>
		</div>
		<div class=" mx-auto w-full max-w-md px-4 sm:max-w-2xl sm:px-6  lg:px-0 relative ">
			<video
				poster="https://blackmagic.so/assets/demo-poster.png"
				style="aspect-ratio:2064 / 1472"
				autoplay={true}
				muted={true}
				loop={true}
				playsinline={true}
				controls={true}
				class="jsx-1924156680 w-full rounded-xl ring-2 ring-gray-400 shadow-md z-10"
				><source
					src="https://blackmagic.so/assets/demo.mp4"
					type="video/mp4"
					class="jsx-1924156680"
				/></video
			>
		</div>
	</section>
</div>

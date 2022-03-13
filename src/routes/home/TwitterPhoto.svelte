<script lang="ts">
	import profilePng from '$static/profile.png';
	let foregroundColors = ['red', 'green', 'blue'];
	let backgroundColors = ['gray', 'lime', 'cyan'];

	let selectedForegroundColor = foregroundColors[0];
	let selectedBackgroundColor = backgroundColors[0];
</script>

<div class="flex flex-col space-x-4 items-center justify-between">
	<div
		class="w-[200px] h-[200px]  border-[16px]  rounded-full relative"
		style="border-color: {selectedBackgroundColor}"
	>
		<svg class="absolute left-0 right-0 ">
			<circle cx="84" cy="84" r="84" fill="red" />
		</svg>
		<img src={profilePng} alt="profile" class="w-50 h-50 bg-cover rounded-full " />
	</div>
	<div class="flex space-x-3 mt-4">
		{#each backgroundColors as color}
			<div
				style="background-color: {color}"
				class:border-orange-500={color === selectedBackgroundColor}
				class="w-10 h-10  border-[4px]  rounded-full cursor-pointer border-gray-200 "
				on:click={() => {
					selectedBackgroundColor = color;
				}}
			/>
		{/each}
	</div>
</div>

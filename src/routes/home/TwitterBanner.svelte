<script lang="ts">
	import profilePng from '$static/profile.png';
	let foregroundColors = ['red', 'green', 'blue'];
	let backgroundColors = ['white', 'black'];

	let selectedForegroundColor = foregroundColors[0];
	let selectedBackgroundColor = backgroundColors[0];
</script>

<div class="flex">
	<img src={profilePng} alt="profile" class="w-20 h-20 bg-cover" />
</div>

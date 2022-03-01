<script context="module" lang="ts">
	export async function load({ params, fetch, session, stuff }) {
		return {
			props: {
				message: 'this is actually working!'
			}
		};
	}
</script>

<script lang="ts">
	import { Navbar, Footer } from '$layout';

	import { Modals, closeModal } from 'svelte-modals';
	import '../app.scss';

	export let message: string;
</script>

<!--------------------markup ------------------->

<h1>{message}sss</h1>
<Navbar />
<div class="container mx-auto min-h-screen">
	<main>
		<slot />
	</main>
</div>
<Footer />

<!-- used for displaying modals -->
<Modals>
	<div slot="backdrop" class="twitty-backdrop" on:click={closeModal} />
</Modals>

<!--------------------styles ------------------->
<style>
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import twitterSvg from '../../../static/twitter.svg';
	import logoPng from '$static/logo.png';
	import { getAuth, signInWithPopup, TwitterAuthProvider } from '@firebase/auth';
	// Import the functions you need from the SDKs you need
	import { initializeApp } from 'firebase/app';
	import { getAnalytics } from 'firebase/analytics';
	// import LoginModal from '../../components/LoginModal.svelte';
	import ThemeSwitcher from '../../components/DarkThemeSwitcher.svelte';
	import { openModal } from 'svelte-modals';
	import { user as userStore } from '$store/user.store';

	import type { User } from '$types/user';

	let menu = [
		{
			text: 'Sleep indicator',
			url: '/sleep-indicator'
		},
		{
			text: 'Real-time Banner',
			url: '/real-time-banner'
		},
		{
			text: 'Real-time Photo',
			url: '/real-time-photo'
		}
	];

	const firebaseConfig = {
		apiKey: 'AIzaSyDpjE5Bs9K4_xwE4herzTqIeOPZsf7cXnI',
		authDomain: 'twinter-ab0d7.firebaseapp.com',
		projectId: 'twinter-ab0d7',
		storageBucket: 'twinter-ab0d7.appspot.com',
		messagingSenderId: '433825622949',
		appId: '1:433825622949:web:2fa6e3cfa27fc00481164c',
		measurementId: 'G-14FLZ1C66Q'
	};

	const signIn = async () => {
		// Initialize Firebase
		const app = initializeApp(firebaseConfig);
		const analytics = getAnalytics(app);
		const provider = new TwitterAuthProvider();
		provider.addScope('tweet.write');
		provider.addScope('tweet.read');
		provider.addScope('offline.acces');
		provider.addScope('users.read');
		provider.setDefaultLanguage('fr');

		console.table(provider.getScopes());
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a the Twitter OAuth 1.0 Access Token and Secret.
				// You can use these server side with your app's credentials to access the Twitter API.
				const credential = TwitterAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const secret = credential.secret;
				

				// The signed-in user info.
				const user = result.user;

				console.log(result);
				userStore.set(user as unknown as User);

				// ...
			})
			.catch((error) => {
				console.log(error);

				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = TwitterAuthProvider.credentialFromError(error);
				// ...
			});
		// const client = new TwitterApi({
		// 	clientId: 'B7UL3nZoClmLgFtCekkVVUVC7',
		// 	clientSecret: 'WEUekvMoKz2EcFbLgox5bsb0LC8VsgbctGSbnLyzWhj92q5xYv'
		// });
		// // Don't forget to specify 'offline.access' in scope list if you want to refresh your token later
		// const { url, codeVerifier, state } = client.generateOAuth2AuthLink(
		// 	'http://localhost:3000/callback',
		// 	{ scope: ['tweet.read', 'users.read', 'offline.access'] }
		// );
		// Redirect your user to {url}, store {state} and {codeVerifier} into a DB/Redis/memory after user redirection
	};
	// const showLoginModal = () => {
	// 	// openModal(Login, {});
	// 	openModal(LoginModal, { title: 'Alert', message: 'This is an alert' });
	// };
</script>

<nav class="bg-gray-100 border-gray-200 px-2 sm:px-4 py-3 rounded dark:bg-gray-800">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<a class=" flex normal-case text-xl font-bold text-blue-500 px-2 py-1" href="/">
			<span
				class="relative after:absolute after:h-2 after:bottom-0
				after:left-0  after:w-[79px] after:bg-red-300 
				after:bg-gradient-to-r after:from-green-400 after:to-blue-500
				after:rounded-r-3xl
				"
			>
				twinter
			</span>
			<img src={logoPng} alt="logo" width="32" class="ml-2" />
		</a>

		<div class="flex flex-row space-x-4 items-center justify-center ">
			<ul class="list-none flex space-x-4 items-center">
				{#each menu as item}
					<li>
						<a
							class="font-medium text-lg hover:text-accent dark:hover:text-green-500 cursor-pointer {$page
								.url.pathname === item.url
								? 'text-primary'
								: 'text-gray-900 dark:text-gray-100'}"
							href={item.url}
						>
							{item.text}
						</a>
					</li>
				{/each}
			</ul>
			<ThemeSwitcher />
			{#if $userStore}
				<span
					class="px-2.5 py-2.5 border rounded-full text-gray-800 bg-gray-200 border-gray-300 dark:text-white dark:border-gray-900 dark:bg-slate-700 font-semibold cursor-default"
				>
					{$userStore.email}
				</span>
			{:else}
				<!-- sign in button -->

				<button
					on:click={signIn}
					type="button"
					class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:ring-[#1da1f2]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 "
				>
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
					Sign in
				</button>
			{/if}
		</div>
	</div>
</nav>

<style lang="scss">
	@use './Navbar.scss';
</style>

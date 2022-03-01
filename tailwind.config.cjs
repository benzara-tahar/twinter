module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	daisyui: {
		styled: true,

		base: true,
		utils: true,
		logs: true,
		rtl: true,
		darkTheme: 'dark',
		themes: [
			'light',
			'dark',
			{
				twitty: {
					primary: '#3b82f6',
					secondary: '#65a30d',
					accent: '#facc15',
					'base-100': '#FFFFFF',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	},
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};

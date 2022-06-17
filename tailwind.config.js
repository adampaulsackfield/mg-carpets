module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			background: '#0a192f',
			dark: '#252627',
			primary: '#4FA92F',
			white: '#F2EFE9',
			accent: '#904E55',
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
		},
		container: {
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1440px',
			},
		},
		extend: {
			backgroundImage: {
				'hero-carpet': "url('assets/images/hero-carpet.jpg')",
			},
			animation: {
				'spin-slow': 'spin 1.5s linear 1',
			},
		},
	},
	plugins: [],
};

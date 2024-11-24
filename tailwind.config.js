/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}', // Include all files in the `app` directory
		'./components/**/*.{js,ts,jsx,tsx}', // Include all files in the `components` directory
	],
	theme: {
		extend: {
			colors: {
				neutral: {
					light: '#F5F5F5',
					gray: '#BFBFBF',
					dark: '#333333',
				},
				accent: {
					blue: '#007BFF',
					yellow: '#FFC107',
					coral: '#61ffbe',
				},
			},
		},
	},
	plugins: [],
};

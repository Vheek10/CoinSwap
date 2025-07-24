/** @format */

// tailwind.config.mjs
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
};

export default config;

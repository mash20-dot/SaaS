/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#22c55e', // Tailwind green-500 for light green accent
                    light: '#bef264',
                    dark: '#15803d'
                }
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui']
            }
        },
    },
    plugins: [],
}
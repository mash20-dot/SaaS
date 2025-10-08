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
                    50: '#f0ffe6',
                    100: '#dfffcc',
                    200: '#bfff99',
                    300: '#9fff66',
                    400: '#7fff33',
                    500: '#39FF14', // Exact neon green from image
                    600: '#2ecc10',
                    700: '#23990c',
                    800: '#186608',
                    900: '#0d3304',
                    DEFAULT: '#39FF14',
                },
                dark: {
                    50: '#18181b',
                    100: '#27272a',
                    200: '#3f3f46',
                    300: '#52525b',
                    400: '#71717a',
                    500: '#a1a1aa',
                    600: '#d4d4d8',
                    700: '#e4e4e7',
                    800: '#f4f4f5',
                    900: '#fafafa',
                    DEFAULT: '#000000',
                },
                accent: {
                    light: '#bfff99', // Lighter lime for highlights
                    DEFAULT: '#39FF14', // Exact neon green from image
                    dark: '#2ecc10', // Darker lime for hover states
                    neon: '#7fff33', // Extra bright for special effects
                },
                neutral: {
                    light: '#fafafa',
                    DEFAULT: '#666666',
                    dark: '#333333',
                }
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui']
            },
            backgroundImage: {
                'gradient-green': 'linear-gradient(135deg, #39FF14 0%, #2ecc10 100%)',
                'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                'gradient-mesh': 'radial-gradient(at 40% 20%, #39FF14 0px, transparent 50%), radial-gradient(at 80% 0%, #000000 0px, transparent 50%), radial-gradient(at 0% 50%, #7fff33 0px, transparent 50%)',
                'gradient-lime': 'linear-gradient(135deg, #7fff33 0%, #39FF14 100%)',
            },
            boxShadow: {
                'green': '0 4px 14px 0 rgba(57, 255, 20, 0.4)',
                'green-lg': '0 10px 30px rgba(57, 255, 20, 0.35)',
                'green-glow': '0 0 20px rgba(57, 255, 20, 0.6)',
                'dark': '0 4px 14px 0 rgba(0, 0, 0, 0.25)',
                'dark-lg': '0 10px 30px rgba(0, 0, 0, 0.4)',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            }
        },
    },
    plugins: [],
}
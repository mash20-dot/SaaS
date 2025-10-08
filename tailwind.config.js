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
                    50: '#f7fee7',
                    100: '#ecfccb',
                    200: '#d9f99d',
                    300: '#bef264',
                    400: '#a3e635',
                    500: '#84cc16', // Bright lime green - main color
                    600: '#65a30d',
                    700: '#4d7c0f',
                    800: '#3f6212',
                    900: '#365314',
                    DEFAULT: '#84cc16',
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
                    light: '#d9f99d', // Lighter lime for highlights
                    DEFAULT: '#84cc16', // Main bright lime green
                    dark: '#65a30d', // Darker lime for hover states
                    neon: '#bef264', // Extra bright for special effects
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
                'gradient-green': 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)',
                'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                'gradient-mesh': 'radial-gradient(at 40% 20%, #84cc16 0px, transparent 50%), radial-gradient(at 80% 0%, #000000 0px, transparent 50%), radial-gradient(at 0% 50%, #bef264 0px, transparent 50%)',
                'gradient-lime': 'linear-gradient(135deg, #bef264 0%, #84cc16 100%)',
            },
            boxShadow: {
                'green': '0 4px 14px 0 rgba(132, 204, 22, 0.4)',
                'green-lg': '0 10px 30px rgba(132, 204, 22, 0.35)',
                'green-glow': '0 0 20px rgba(132, 204, 22, 0.5)',
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
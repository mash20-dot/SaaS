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
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#9ACD32', // Your signature light green
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    DEFAULT: '#9ACD32',
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
                    light: '#d4fc79', // Lighter green for highlights
                    DEFAULT: '#9ACD32', // Main light green
                    dark: '#7ab82d', // Darker green for hover states
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
                'gradient-green': 'linear-gradient(135deg, #9ACD32 0%, #7ab82d 100%)',
                'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                'gradient-mesh': 'radial-gradient(at 40% 20%, #9ACD32 0px, transparent 50%), radial-gradient(at 80% 0%, #000000 0px, transparent 50%), radial-gradient(at 0% 50%, #9ACD32 0px, transparent 50%)',
            },
            boxShadow: {
                'green': '0 4px 14px 0 rgba(154, 205, 50, 0.39)',
                'green-lg': '0 10px 30px rgba(154, 205, 50, 0.3)',
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
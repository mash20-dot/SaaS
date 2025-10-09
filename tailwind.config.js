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
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    DEFAULT: '#0ea5e9',
                },
                dark: {
                    50: '#0a0a0a',
                    100: '#141414',
                    200: '#1e1e1e',
                    300: '#282828',
                    400: '#3c3c3c',
                    500: '#505050',
                    600: '#646464',
                    700: '#8c8c8c',
                    800: '#b4b4b4',
                    900: '#e1e1e1',
                    DEFAULT: '#0a0a0a',
                },
                accent: {
                    light: '#a78bfa',
                    DEFAULT: '#8b5cf6',
                    dark: '#7c3aed',
                    neon: '#c084fc',
                },
                success: {
                    light: '#86efac',
                    DEFAULT: '#22c55e',
                    dark: '#16a34a',
                },
                warning: {
                    light: '#fde047',
                    DEFAULT: '#eab308',
                    dark: '#ca8a04',
                },
                danger: {
                    light: '#fca5a5',
                    DEFAULT: '#ef4444',
                    dark: '#dc2626',
                },
                neutral: {
                    light: '#f5f5f5',
                    DEFAULT: '#737373',
                    dark: '#262626',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                'gradient-accent': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #1e1e1e 100%)',
                'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(14, 165, 233, 0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(14, 165, 233, 0.1) 0px, transparent 50%)',
                'gradient-glow': 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15), transparent 60%)',
                'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
                'glow-lg': '0 0 40px rgba(14, 165, 233, 0.4)',
                'glow-accent': '0 0 20px rgba(139, 92, 246, 0.3)',
                'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
                'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
                'large': '0 8px 32px rgba(0, 0, 0, 0.16)',
                'inner-glow': 'inset 0 0 20px rgba(14, 165, 233, 0.1)',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.25rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            animation: {
                'shimmer': 'shimmer 2s infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                glow: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.6' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
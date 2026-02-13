/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rose: {
                    50: '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                    700: '#be123c',     // Rich Rose
                    800: '#9f1239',     // Deep Rose
                    900: '#881337',     // Darkest Rose
                    950: '#4c0519',
                },
                gold: {
                    100: '#fef9c3',
                    200: '#fef08a',
                    300: '#fde047',
                    400: '#facc15',
                    500: '#eab308',     // Classic Gold
                    600: '#ca8a04',     // Rich Gold (Jariga)
                    700: '#a16207',
                    800: '#854d0e',
                    900: '#713f12',
                },
            },
            fontFamily: {
                'playfair': ['"Playfair Display"', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'rich-gradient': 'linear-gradient(135deg, #4c0519 0%, #be123c 50%, #fbbf24 100%)',
                'glass': 'rgba(255, 255, 255, 0.1)',
            },
        },
    },
    plugins: [],
}

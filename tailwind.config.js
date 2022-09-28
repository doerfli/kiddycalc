/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(20deg)' },
                    '20%': { transform: 'rotate(-10deg)' },
                    '30%': { transform: 'rotate(20deg)' },
                    '40%': { transform: 'rotate(-10deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
            },
            animation: {
                'spin-slow': 'spin 2s linear infinite',
                'waving': 'wave 2s linear infinite',
            },
        },
    },
    plugins: [],
}


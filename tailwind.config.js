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
                "jump-spin": {
                    '0%': { transform: 'translateY(0em)' },
                    '10%': { transform: 'rotateY(0deg)' },
                    '40%': { transform: 'translateY(-0.5em) rotateY(150deg)' },
                    '50%': { transform: 'translateY(-0.6em) rotateY(180deg)' },
                    '60%': { transform: 'translateY(-0.5em) rotateY(210deg)' },
                    '90%': { transform: 'rotateY(360deg)' },
                    '100%': { transform: 'translateY(0em) rotateY(360deg)' },
                },
                "jump-roll": {
                    '0%': { transform: 'translateY(0em)' },
                    '10%': { transform: 'rotateZ(0deg)' },
                    '40%': { transform: 'translateY(-0.5em) rotateZ(150deg)' },
                    '50%': { transform: 'translateY(-0.6em) rotateZ(180deg)' },
                    '60%': { transform: 'translateY(-0.5em) rotateZ(210deg)' },
                    '90%': { transform: 'rotateZ(360deg)' },
                    '100%': { transform: 'translateY(0em) rotateZ(360deg)' },
                },
                "spin-out-in": {
                    '0%': { transform: 'rotateY(0deg)', opacity: 1 },
                    '40%': { transform: 'rotateY(90deg)', opacity: 0 },
                    '60%': { transform: 'rotateY(90deg)', opacity: 0 },
                    '100%': { transform: 'rotateY(0deg)', opacity: 1 },
                },
                "spin-in": {
                    '0%': { transform: 'rotateY(90deg)', opacity: 0 },
                    '100%': { transform: 'rotateY(0deg)', opacity: 1 },
                },

            },
            animation: {
                'spin-slow': 'spin 2s linear infinite',
                'waving': 'wave 2s linear infinite',
                'jump-spin': 'jump-spin 1s linear infinite',
                'jump-roll': 'jump-roll 1s linear infinite',
                'spin-out-in': 'spin-out-in 1.5s linear',
                'spin-in': 'spin-out-in 600ms linear',
            },
            colors: {
                pastel: {
                    "cream": "#fcf5c7",
                    "pink1": "#fdc5f5",
                    "pink2": "#f7aef8",
                    "purple": "#b388eb",
                    "blue": "#8093f1",
                    "lightblue": "#72ddf7",
                    "green": "#7bf1a8",
                    "red": "#f08080",
                    "grey": "#cddcdf",
                },
            }
        },
    },
    plugins: [],
}


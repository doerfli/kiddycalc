/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        // colors: {
        //     transparent: 'transparent',
        //     current: 'currentColor',
        //     black: colors.black,
        //     white: colors.white,
        //     gray: colors.neutral,
        //     red: colors.red,
        //     yellow: colors.amber,
        //     green: colors.emerald,
        //     blue: colors.blue,
        //     indigo: colors.indigo,
        //     purple: colors.violet,
        //     pink: colors.pink,
        // },
        extend: {},
    },
    plugins: [],
}

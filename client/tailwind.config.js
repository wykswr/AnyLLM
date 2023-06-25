/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                flicker: "flicker 500ms linear infinite",
            },
            keyframes: {
                flicker: {
                    "0%, 100%": {opacity: 1},
                    "50%": {opacity: 0},
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@headlessui/tailwindcss'),
    ],
}


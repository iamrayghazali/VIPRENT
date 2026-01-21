/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0E0E0E",
                gold: "#C9A24D",
            },
            fontFamily: {
                italy: ["var(--font-italy)"],
                lato: ["var(--font-lato)"],
                fira: ["var(--font-fira)"],
                geist: ["var(--font-geist-sans)"],
            },
        },
    },
    plugins: [],
}
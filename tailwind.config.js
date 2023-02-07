/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        // For the best performance and to avoid false positives,
        // be as specific as possible with your content configuration.
    ],
    // purge 字段与 content 字段有冲突
    // purge: [],
    // darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    // variants: {
    //     extend: {},
    // },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                mlg: '992px',
                xl: '1150px'
            }
        }
    },
    plugins: []
};


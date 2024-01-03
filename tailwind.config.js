/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "outfit": ["Outfit", "sans-serif"]
            },
            colors: {
                "background": "#171717",
                "main": "#06B6D4"
            }
        }
    },
    plugins: []
}
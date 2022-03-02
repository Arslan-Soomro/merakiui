const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    mode: "jit",
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                'dm-mono': ["DM Mono", "sans-serif"],
            },
        },
    },
    plugins: [],
};

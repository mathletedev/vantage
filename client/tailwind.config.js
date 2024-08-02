/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{svelte,ts,html}"],
    theme: {
        fontFamily: {
            sans: ["Lato"]
        }
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            defaultFlavour: "mocha"
        })
    ]
};

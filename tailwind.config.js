/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'inter': ['inter']
    },
    extend: {
      backgroundImage: {
        open: "url('./assets/images/icon-menu.svg')",
        close: "url('./assets/images/icon-menu-close.svg')",
      },
    },
  },
  plugins: [],
};

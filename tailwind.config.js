/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        // xl: '1170px',
        // '2xl': '1170px',
        xl: "1240px",
        "2xl": "1240px",
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
      backgroundImage: {
        postbg: "url(../assets/images/post-bg.jpg)",
      },
    },
  },
  plugins: [],
}

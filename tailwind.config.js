/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ 'Poppins' ]
      },
      colors: {
        primary: {
          500: "hsl(74,94%,62%)"
        },
        laliga: {
          500: "hsl(2,100%,55%)"
        },
        pl: {
          500: "hsl(298,100%,12%)",
          alt: "hsl(189,92%,53%)"
        },
        bliga: {
          500: "hsl(355,98%,41%)"
        },
        seriea: {
          500: "hsl(243,67%,26%)"
        },
        ligone: {
          500: "hsl(218,75%,12%)"
        },
        generic: {
          100: "hsl(0,4%,9%)"
        },
        dark: {
          100: "hsl(15,8%,10%)"
        },
        ghost: {
          200: "hsl(0,10%,16%)"
        }
      }
    },
  },
  plugins: [],
}
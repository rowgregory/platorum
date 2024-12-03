import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        divider: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 100%)`,
        "bottom-fade":
          "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
        whatWeOffer: `url('/images/what-we-offer.png')`,
        about: `url('/images/about.png')`,
        banner: `url('/images/banner.png')`,
        "our-story": `url('/images/our-story.png')`,
        footer: `url('/images/footer.png')`,
        logo: `url('/images/logo.png')`,
      },
      keyframes: {
        squareIn: {
          "0%": { transform: "translate(-100%, 100%) scale(0)" },
          "50%": { transform: "translate(0, 0) scale(1)" },
          "100%": { backgroundColor: "rgb(236 72 153)" },
        },
        jiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
          "75%": { transform: "rotate(-10deg)" },
        },
      },
      animation: {
        squareIn: "squareIn 0.5s ease-in-out forwards",
        jiggle: "jiggle 0.5s ease-in-out",
      },
      screens: {
        "350": "350px",
      },
    },
  },
  plugins: [],
} satisfies Config;

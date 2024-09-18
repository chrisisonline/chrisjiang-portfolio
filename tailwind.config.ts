import { type Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
        serif: ["var(--font-glook)", ...fontFamily.serif],
      },
      colors: {
        cream: "rgb(var(--color-cream))",
        primary: "rgb(var(--color-primary))",
        "primary-10": "rgba(var(--color-primary), 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config

import { type Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
        serif: ["var(--font-aleo)", ...fontFamily.serif],
      },
      colors: {
        cream: "#FFFBF3",
        primary: "#00473A",
        "p-transparent": "rgba(0, 128, 105, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config

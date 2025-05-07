import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: "https://NekoBamBam.github.io/tattoo-web/",
  theme: {
    extend: {
      fontFamily: {
        imbue: ['"Imbue"', 'serif'],
      },
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-lucide-icons', '@nuxt/fonts', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700],
      Cardo: true,
    },
    display: 'swap',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
})
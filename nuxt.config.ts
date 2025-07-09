// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: true,

  css: ['~/assets/css/main.css'], // make sure this file has @tailwind directives

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lucide-icons',
    '@nuxt/fonts',
    '@nuxtjs/google-fonts'
    ,
  ],

  tailwindcss: {
    viewer: false, // optional: disables the devtools viewer
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700],
      Cardo: true,
    },
    display: 'swap',
  },
})

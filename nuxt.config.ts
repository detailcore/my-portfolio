// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  telemetry: false,

  devtools: {
    enabled: false,
  },

  css: ['~/assets/styles/base.scss'], // global styles

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts'],

  // https://image.nuxt.com/get-started/configuration
  image: {
    // quality: 70,
    format: ['webp'],
  },

  // https://google-fonts.nuxtjs.org/getting-started
  googleFonts: {
    families: {
      Heebo: [400, 500, 700, 900],
    },
    display: 'swap',
  },
})

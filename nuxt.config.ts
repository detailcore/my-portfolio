// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  telemetry: false,

  devtools: {
    enabled: false,
  },

  css: ['~/assets/styles/base.scss'], // global styles

  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-vitest',
    '@nuxt/image',
    'nuxt-purgecss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],

  // https://image.nuxt.com/get-started/configuration
  image: {
    quality: 75,
    format: ['webp'],
    dir: 'assets/images',
  },

  purgecss: {
    enabled: false, // Always enable purgecss
    // safelist: [''], // Add my-class token to the safelist (e.g. .my-class)
  },

  // https://google-fonts.nuxtjs.org/getting-started
  googleFonts: {
    families: {
      Heebo: [400, 500, 700, 900],
    },
    display: 'swap',
  },
})

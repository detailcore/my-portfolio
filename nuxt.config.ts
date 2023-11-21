// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  telemetry: false,

  devtools: {
    enabled: false,
  },

  // css: ['~/assets/styles/base.css'], // global styles

  modules: ['@nuxtjs/eslint-module', 'nuxt-purgecss', '@nuxtjs/tailwindcss', 'nuxt-vitest', '@nuxtjs/google-fonts'],

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

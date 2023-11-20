// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // css: ['~/assets/styles/main.css'], // global styles

  modules: ['@nuxtjs/eslint-module', 'nuxt-purgecss', '@nuxtjs/tailwindcss'],

  purgecss: {
    enabled: false, // Always enable purgecss
    // safelist: [''], // Add my-class token to the safelist (e.g. .my-class)
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  telemetry: false,

  devtools: {
    enabled: false,
  },

  css: ['~/assets/styles/base.scss'], // global styles

  ignore: ['.projects/**/*'],

  generate: {
    exclude: [/^\/.projects/], // exclude every URL starting with "/.projects"
  },

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
    // quality: 70,
    format: ['webp'],
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

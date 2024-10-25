// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  telemetry: false,

  devtools: {
    enabled: false,
  },

  css: ['~/assets/styles/base.scss'], // global styles

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    // build: {
    //   minify: 'esbuild',
    //   cssCodeSplit: false,
    // },
    // esbuild: {
    //   drop: ['console', 'debugger'], //* может удалять console и debugger даже в "dev" среде
    // },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts', '@nuxt/eslint'],

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

  eslint: {
    config: {
      standalone: false,
    },
  },
})

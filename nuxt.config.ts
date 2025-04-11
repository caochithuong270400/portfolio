// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  css: ['vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/global.css',
    '~/assets/css/variants.css'],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  modules: ['@pinia/nuxt', 'nuxt-particles', '@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'vi', iso: 'vi-VN', file: 'vi.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    bundle: {
      optimizeTranslationDirective: false
    }
  },

  particles: {
    mode: 'full', // 'full' | 'slim' | 'basic' | 'custom'
    lazy: true
  },

  runtimeConfig: {
    public: {
      HASURA_GRAPHQL_URL: 'https://your-hasura-instance/v1/graphql',
      HASURA_ADMIN_SECRET: 'your-admin-secret',
    },
  },

  compatibilityDate: '2025-03-23',
})
// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv';
dotenv.config();
export default defineNuxtConfig({
  devtools: { enabled: false },
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

  // runtimeConfig: {
  //   public: {
  //     HASURA_GRAPHQL_URL: process.env.HASURA_ENDPOINT,
  //     HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
  //   },
  // },

  compatibilityDate: '2025-03-23',
})
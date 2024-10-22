// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/fontawesome'],
  modules: [
    'nuxt-icons',
    [
      '@sidebase/nuxt-session',
      {
        session: {
          expiryInSeconds: 6 * 60 * 60,
        },
      },
    ],
  ],
  runtimeConfig: {
    MONGODB: process.env.MONGODB,
    SALT: process.env.SALT,
  },
})

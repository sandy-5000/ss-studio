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
    '@vueuse/nuxt',
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
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  },
})

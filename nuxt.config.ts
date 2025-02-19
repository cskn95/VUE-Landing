// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/icon',
    ['@nuxtjs/google-fonts', { families: { Montserrat: true, Inter: true} }],
  ],
  vite: {
    server: {
      allowedHosts: ['mainly-present-fish.ngrok-free.app'],
    },
  },
})
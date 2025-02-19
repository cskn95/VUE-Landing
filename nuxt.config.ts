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
    '@formkit/auto-animate/nuxt',
    //['nuxt-lucide-icons', {namePrefix: 'Icon'}],
    ['@nuxtjs/google-fonts', { families: { Montserrat: true, Inter: true} }],
  ],
  vite: {
    server: {
      allowedHosts: ['mainly-present-fish.ngrok-free.app'],
    },
  },
})

/*<ParticlesBg
class="absolute inset-0 z-[1] h-full"
:ease="100"
:quantity="200"
:staticity="10"
:color="'#000'"
refresh
/>*/
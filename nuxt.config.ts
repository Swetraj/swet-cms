// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-auth-utils', 'vuetify-nuxt-module', '@vueuse/nuxt'],
  routeRules: { '/admin/**': { ssr: false }, '/auth/**': { ssr: false } },
  vuetify: {
    vuetifyOptions: './plugins/vuetify.config.mts',
    moduleOptions: {
      disableVuetifyStyles: true,
      styles: {
        configFile: './scss/style.scss'
      }
    }
  }
})

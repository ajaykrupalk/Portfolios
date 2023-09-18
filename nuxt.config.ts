// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      BACKEND_URI: process.env.BACKEND_PORT
    }
  },
  app:{
    head: {
      title: 'Learning Never Stops!',
      meta: [
        {name: 'description', content: 'Portfolio of Ajay Krupal K.'}
      ]
    }
  }
})

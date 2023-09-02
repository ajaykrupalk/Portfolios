// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head: {
      title: 'Learning Never Stops!',
      meta: [
        {name: 'description', content: 'Portfolio of Ajay Krupal K.'}
      ]
    }
  }
})

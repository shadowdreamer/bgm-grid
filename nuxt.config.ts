export default defineNuxtConfig({
  
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@unocss/nuxt',
    "pinia-plugin-persistedstate/nuxt",
    'nuxt-svgo'
  ],
  devtools: {
    enabled: false,
  },

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      charset:'UTF-8',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
      script:[],
      htmlAttrs: {
        lang: 'zh-CN',
      },
      title:'hello bangumi',
      meta: [
        { name: 'description', content: '' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'robots', content: 'index, follow' },
        { name: 'build-date', content: new Date().toISOString() }
      ],
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  compatibilityDate: "2024-09-19",
 
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    routeRules:{
      '/subject/**':{isr:1200}
    }
  },
  svgo: {
    defaultImport:"component"
  },
  runtimeConfig:{ },
})
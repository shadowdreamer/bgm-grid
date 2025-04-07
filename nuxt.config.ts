import {AppDesc, AppName} from './app/utils/config'
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
  css:[
    '~/styles/global.css',
  ],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      charset:'UTF-8',
      link: [
        { rel: 'shortcut icon', href: '/favicon.ico', sizes: 'any' },
      ],
      script:[
        {src:"https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback", defer:true}
      ],
      htmlAttrs: {
        lang: 'zh-CN',
      },
      title:AppName,
      meta: [
        { name: 'description', content: AppDesc },
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
      '/':{prerender:true},
      '/subject/**':{isr:{
        expiration:600,
      }}
    }
  },
  svgo: {
    defaultImport:"component"
  },
  runtimeConfig:{ 
    CLIENT_ID: import.meta.env.BGM_App_ID,
    CLIENT_SECRET: import.meta.env.BGM_App_Secret,
  }
})
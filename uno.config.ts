import { defineConfig, presetAttributify, presetWind3 } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import extractorPug from '@unocss/extractor-pug'
// const { blackA,whiteA } = require('@radix-ui/colors')

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetWind3({
      
    }),
    
    // ...custom presets
  ],
  transformers: [
    transformerDirectives(),
  ],
  extractors: [
    extractorPug(),
  ],
  theme: {
    fontSize: {
      base: 'clamp(14px, 4.266, 16px)', // 适配 375px 屏幕
      'px15':'15px',
      'px13':'13px'
    },
    colors: {
      primary:"#26B1BC",
      'primary-100':"#E9F7F8",
      gray999:'#999999',
      gray666:'#666666',
      gray333:'#333333',
      graybg:'#EFF1F1',
      sub:"#FF8000",
      'sub-100':'#FFF2E5',
      // ...whiteA,
      // ...blackA,
    }, 
    keyframes: {
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      contentShow: {
        from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      },
      hide: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
      slideIn: {
        from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        to: { transform: 'translateX(0)' },
      },
      swipeOut: {
        from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
        to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
      },
    },
    animation: {
      overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      hide: 'hide 100ms ease-in',
      slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      swipeOut: 'swipeOut 100ms ease-out',
    },
  }
})
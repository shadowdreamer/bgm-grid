import { defineConfig, presetAttributify, presetWind3 } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import extractorPug from '@unocss/extractor-pug'
import { blackA, whiteA } from '@radix-ui/colors'

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
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px', 
      '2xl': '1920px',
    },
    colors: {
      primary:"#F09199",
      ...whiteA,
      ...blackA,
    }, 
    fontSize:{
      'xxs':'10px'
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
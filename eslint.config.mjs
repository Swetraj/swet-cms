// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

const isProduction = process.env.NODE_ENV === 'production' || false
export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': isProduction ? 'warn' : 'off',
    'no-debugger': isProduction ? 'error' : 'off'
  }
})

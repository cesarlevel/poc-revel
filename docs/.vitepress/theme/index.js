import DefaultTheme from 'vitepress/theme'
import BoxedItems from './BoxedItems.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app.component('BoxedItems', BoxedItems)
  }
}
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HotwebUI from 'hotweb-ui'
import 'hotweb-ui/packages/theme-chalk/src/index.scss'
import ResizeMixin from './layouts/mixin/ResizeHandler'

process.env.NODE_ENV === 'development' && require('./mock/mock')
Vue.use(HotwebUI)
Vue.mixin(ResizeMixin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

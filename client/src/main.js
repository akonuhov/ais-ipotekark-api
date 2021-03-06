import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'

import globals from './globals'
import Popper from 'popper.js'
import './plugins/axios'

// Required to enable animations on dropdowns/tooltips/popovers
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.config.productionTip = false

Vue.use(BootstrapVue)

// Global RTL flag
Vue.mixin({
  data: globals
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

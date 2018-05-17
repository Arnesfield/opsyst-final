// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'

import colors from 'vuetify/es5/util/colors'
import routerCond from './router/cond'
import toPrefix from './assets/js/toPrefix'
import toPostfix from './assets/js/toPostfix'

import 'vuetify/dist/vuetify.min.css'
import './assets/css/main.css'

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    secondary: colors.indigo.darken1,
    accent: colors.pink.accent3,
    warning: colors.deepOrange.lighten1
  }
})

Vue.config.productionTip = false
Vue.prototype.$toPrefix = toPrefix
Vue.prototype.$toPostfix = toPostfix

routerCond(router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

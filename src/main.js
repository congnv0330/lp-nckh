import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import './css/main.css'
import Toasted from 'vue-toasted'
// import VueMathjax from 'vue-mathjax'

Vue.use(Toasted, {
  position: 'bottom-right',
  duration: 2000,
  keepOnHover: true
})

// Vue.use(VueMathjax)

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

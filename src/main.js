import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import './css/main.css'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  position: 'bottom-right',
  duration: 2000,
  keepOnHover: true
})

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

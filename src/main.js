import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(Buefy)
Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

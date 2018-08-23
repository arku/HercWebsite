import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import vueSmoothScroll from 'vue-smooth-scroll'
import BackToTop from 'vue-backtotop'
import Meta from 'vue-meta';

Vue.use(Buefy)
Vue.use(vueSmoothScroll)
Vue.use(BackToTop)
Vue.use(Meta)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

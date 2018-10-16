import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import vueSmoothScroll from 'vue-smooth-scroll'
import BackToTop from 'vue-backtotop'
import vAb from 'vue-ab'


Vue.component('v-ab', vAb)
Vue.use(Buefy, {
  defaultIconPack: "fa"
});
Vue.use(vueSmoothScroll)
Vue.use(BackToTop)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
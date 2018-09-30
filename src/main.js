import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import vueSmoothScroll from 'vue-smooth-scroll'
import BackToTop from 'vue-backtotop'

Vue.use(Buefy, {
  defaultIconPack: "fa"
});
Vue.use(vueSmoothScroll)
Vue.use(BackToTop)
Vue.config.productionTip = false

new Vue({
  mounted: function () {
    this.$nextTick(function () {
      const script = document.createElement('script');
      script.src = 'https://emailoctopus.com/bundles/emailoctopuslist/js/1.3/formEmbed.js?1538041631';
      document.querySelector('body').appendChild(script);
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')

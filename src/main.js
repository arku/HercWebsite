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
      const recaptchaScript = document.createElement('script');
      recaptchaScript.src = 'https://emailoctopus.com/bundles/emailoctopuslist/js/1.3/recaptcha.js?1538041631';
      document.querySelector('body').appendChild(recaptchaScript);

      const mainScript = document.createElement('script');
      mainScript.src = 'https://emailoctopus.com/bundles/emailoctopuslist/js/1.3/formEmbed.js?1538041631';
      document.querySelector('body').appendChild(mainScript);
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')

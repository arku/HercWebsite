import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import vueSmoothScroll from 'vue-smooth-scroll'
import BackToTop from 'vue-backtotop'
import VueAB from 'vue-a2b';
import VueAnalytics from 'vue-ua';

// If you're using vue-router and want route integration, create your routes before enabling vue-ua.
const router = new VueRouter({
  routes
})

Vue.use(VueAnalytics, {
  // [Required] The name of your app as specified in Google Analytics.
  appName: 'Herc.one',
  // [Required] The version of your app.
  appVersion: '0.1',
  // [Required] Your Google Analytics tracking ID.
  trackingId: 'UA-111753174-1',
  // If you're using vue-router, pass the router instance here.
  vueRouter: router,

  // Global Dimensions and Metrics can optionally be specified.
  globalDimensions: [
    { dimension: 1, value: 'FirstDimension' },
    { dimension: 2, value: 'SecondDimension' }
    // Because websites are only 2D, obviously. WebGL? What's that?
  ],

  globalMetrics: [
    { metric: 1, value: 'MyMetricValue' },
    { metric: 2, value: 'AnotherMetricValue' }
  ]
})

Vue.use(VueAB);
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
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import vueSmoothScroll from "vue-smooth-scroll";
import BackToTop from "vue-backtotop";
import VueAB from "vue-a2b";
import VueAnalytics from "vue-analytics";
import VueClipboards from "vue-clipboards";
import VeeValidate from "vee-validate";
import AnimateCSS from "animate.css";
import VueSpinners from "@saeris/vue-spinners";

Vue.use(AnimateCSS);
Vue.use(VeeValidate);
Vue.use(VueClipboards);
Vue.use(VueAnalytics, {
  id: "UA-126354860-1"
});
Vue.use(VueAB);
Vue.use(Buefy, {
  defaultIconPack: "fa"
});
Vue.use(vueSmoothScroll);
Vue.use(BackToTop);
Vue.config.productionTip = false;
Vue.use(VueSpinners);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

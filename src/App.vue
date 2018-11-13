<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Whitepaper from "./views/Whitepaper.vue";

export default {
  name: "app",
  components: {
    Home,
    Whitepaper
  }
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// // Set your colors
$primary: #091141;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$info: #f3c736;
$info-invert: findColorInvert($info);
$light-primary: #272d50;
$light-primary-invert: findColorInvert($light-primary);
$herc-blue: #091141;
$herc-blue-invert: findColorInvert($herc-blue);
$herc-gold: #f3c736;
$herc-gold-invert: findCOlorInvert($herc-gold);

// // Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "herc-blue": (
    $herc-blue,
    $herc-blue-invert
  ),
  "herc-gold": (
    $herc-gold,
    $herc-gold-invert
  ),
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  ),
  "light-primary": (
    $light-primary,
    $light-primary-invert
  )
);
// // Links
// $link: $info;
// $link-invert: $primary-invert;
// $link-focus-border: $primary;
// Components
$box-background-color: $primary;
$title-color: $info;
$label-color: $info;
$input-background-color: #ececec;
$input-focus-border-color: $info;
$input-hover-color: $info;
$tabs-link-color: $primary;
$tabs-border-bottom-color: $primary;
$tabs-toggle-link-hover-background-color: $info;
$tabs-toggle-link-hover-border-color: $info;
$tabs-toggle-link-border-color: $info;
$tabs-toggle-link-active-color: $primary;
$tabs-toggle-link-active-border-color: $info;
$tabs-toggle-link-active-background-color: $info;
$tabs-boxed-link-radius: $primary;
$tabs-boxed-link-hover-background-color: $primary;
$tabs-boxed-link-hover-border-bottom-color: $info;
$tabs-boxed-link-active-background-color: $primary;
$tabs-boxed-link-active-border-color: $info;
$tabs-boxed-link-active-border-bottom-color: $primary;
$dropdown-content-background-color: $primary;
$dropdown-item-hover-background-color: $info;
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import url("https://fonts.googleapis.com/css?family=Montserrat");
h1,
h2,
h3,
h4,
p,
span,
a,
button {
  font-family: "Montserrat", sans-serif !important;
}
html {
  background-color: white !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
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
    Whitepaper,
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

h1,h2,h3,h4,p,span,a {
  font-family: "Montserrat", sans-serif !important;
}

html {
  background-color: #091141 !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

* {
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

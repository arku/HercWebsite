<template>
  <div id="app">

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

body {
  background-color: #091141;
  color: #f3c736;
  font-family: "Montserrat", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

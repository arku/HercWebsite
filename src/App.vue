<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TopSection></TopSection>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TopSection from "./views/Home.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    TopSection
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

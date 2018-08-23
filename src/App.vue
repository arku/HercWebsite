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
  },
  metaInfo: {
    // Children can override the title.
    title: "My Page Title",
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: "%s ← My Site",
    // Define meta tags here.
    meta: [
      { name: "description", content: "I have things here on my site." },

      // OpenGraph data (Most widely used)
      { property: "og:title", content: "My Page Title ← My Site" },
      { property: "og:site_name", content: "My Site" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.my-site.com/my-special-page"
      },
      {
        property: "og:image",
        content: "https://www.my-site.com/my-special-image.jpg"
      },
      // Often the same as your meta description, but not always.
      { property: "og:description", content: "I have things here on my site." },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.my-site.com/my-special-page"
      },
      { name: "twitter:title", content: "My Page Title ← My Site" },
      {
        name: "twitter:description",
        content: "I have things here on my site."
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "@alligatorio" },
      {
        name: "twitter:image:src",
        content: "https://www.my-site.com/my-special-image.jpg"
      }
    ]
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

h1,
h2,
h3,
h4,
p,
span,
a {
  font-family: "Montserrat", sans-serif !important;
}

html {
  background-color: #091141 !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
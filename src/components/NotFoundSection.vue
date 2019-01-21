<template>
    <div id="section">
        <div id="content">
          <h1>You seem to be lost or followed the wrong link.</h1>
          <h2>Is this what you've been looking for?</h2>
          <router-link to="/">
            <button @click="returnHome">Homepage</button>
          </router-link>
          <router-link to="/whitepaper">
            <button @click="returnWhitepaper">Whitepaper</button>
          </router-link>
          <button @click="returnTokenSale">
            <a href="https://purchase.herc.one/">Token Sale</a>
          </button>
        </div>
    </div>
</template>
<script>
export default {
  name: "NotFoundSection",
  methods: {
    returnHome() {
      this.$ga.event({
        eventCategory: "PageNotFound",
        eventAction: "Return home button clicked",
        eventLabel: "404-1"
      });
    },
    returnWhitepaper() {
      this.$ga.event({
        eventCategory: "PageNotFound",
        eventAction: "Return to whitepaper button clicked",
        eventLabel: "404-2"
      });
    },
    returnTokenSale() {
      this.$ga.event({
        eventCategory: "PageNotFound",
        eventAction: "Return to token sale button clicked",
        eventLabel: "404-3"
      });
    }
  }
};
</script>

<style scoped lang="scss">
#section {
  padding: 50px;
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: $herc-blue;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  @include herc-gold-h1;
  text-align: center;
}

h2 {
  color: white;
  margin-bottom: 5%;
}

button {
  @include herc-gold-button;
  margin: 5%;
}

button:hover {
  @include herc-gold-button-hover;
  background-color: $herc-blue;
}

a {
  color: #091141;
}

a:hover {
  color: $herc-gold;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #section {
    padding-top: 50px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
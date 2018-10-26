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
            <a href="https://purchase.herc.one">Token Sale</a>
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

<style scoped>
#section {
  padding: 50px;
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: #091141;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  font-size: 30px;
  text-align: center;
  color: #f3c736;
  margin-bottom: 5%;
}

h2 {
  color: white;
  margin-bottom: 5%;
}

button {
  background-color: #f3c736;
  border: 2px solid #f3c736;
  font-size: 16px;
  text-transform: uppercase;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  color: #091141;
  margin: 5%;
}

button:hover {
  background-color: #091141;
  color: #f3c736;
  border: 2px solid #f3c736;
  cursor: pointer;
  box-shadow: 0px 12px 18px -6px #000;
}

a {
  color: #091141;
}

a:hover {
  color: #f3c736;
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
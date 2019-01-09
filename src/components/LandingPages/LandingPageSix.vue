<template>
  <div id="landing-six">
    <div id="content">
      <h1
        id="title"
      >Identify the Origin and Characteristics of a Product and Locate Wherever It Is in the Supply Chain</h1>
      <div class="columns">
        <div class="column">
          <img src="../../assets/herc-logo.png">
          <h3>Transforming
            <br>Supply Chain
            <br>Ecosystems
          </h3>
          <div id="buttons-lol">
            <router-link to="/whitepaper">
              <button @click="trackWhitepaper" class="spacer-right">Read Whitepaper</button>
            </router-link>
            <a href="https://www.crowdfunder.com/hercules">
              <button @click="trackTokenSale" class="tokensale-button">Buy HERC</button>
            </a>
          </div>
        </div>
        <div class="column">
          <h2>About HERC</h2>
          <p>
            Hercules, a Special Economic Zone Company (SEZC) develops supply chain
            management software that utilizes public blockchains.
          </p>
          <p class="spacer">
            The Hercules platform is decentralized and powered by HERC tokens which
            are required to record and validate the supply chain data.
          </p>
          <div>
            <h3 class="deployed">HERC Token was successfully deployed!</h3>
            <div class="spacer">
              <router-link to="/tokeninfo">
                <button>Token Info</button>
              </router-link>
            </div>
            <div class="spacer">
              <router-link to="/developer-resources">
                <button>Developer Resources</button>
              </router-link>
            </div>
            <div>
              <router-link to="/get-started">
                <button>Get Started</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPageSix",
  methods: {
    trackTokenSale() {
      this.$ga.event({
        eventCategory: "LandingPageSix",
        eventAction: "TokenSale button clicked",
        eventLabel: "6-2"
      });
    },
    trackWhitepaper() {
      this.$ga.event({
        eventCategory: "LandingPageSix",
        eventAction: "Whitepaper button clicked",
        eventLabel: "6-3"
      });
    }
  }
};
</script>

<style scoped lang="scss">
#landing-six {
  padding: 50px;
  background-image: url("../../assets/landing-pages/blue-bg.png");
  background-size: cover;
}

#content {
  max-width: 1080px;
  margin: auto;
}

#title {
  font-size: 40px;
  color: $herc-gold;
  width: 100%;
  margin: auto;
  margin-bottom: 5%;
  text-align: left;
  text-shadow: 2px 2px black;
}

h2 {
  font-size: 20px;
  color: white;
  text-align: center;
  margin: auto;
  margin-bottom: 2%;
}

h3 {
  font-size: 24px;
  color: $herc-gold;
  text-transform: uppercase;
  margin-bottom: 10%;
}

p {
  text-align: center;
  margin-bottom: 2%;
  width: 100%;
  color: white;
}

.columns {
  width: 90% !important;
  margin: auto;
}

img {
  width: 50%;
  margin: auto;
  margin-bottom: 2%;
}

button {
  @include herc-gold-button;
  border-radius: 5px !important;
}

button:hover {
  @include herc-gold-button-hover;
  background-color: $herc-blue;
}

span {
  color: $herc-blue;
  font-size: 12px;
  font-weight: bold;
}

.spacer-right {
  margin-right: 5%;
}

.spacer {
  margin-bottom: 5%;
}

.deployed {
  margin-bottom: 5%;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  .columns {
    width: 100% !important;
  }
}

@media all and (max-width: 1099px) {
  .columns {
    width: 100% !important;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  img {
    width: 100%;
  }

  #landing-six {
    padding: 50px;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #landing-six {
    padding-left: 20px;
    padding-right: 20px;
  }

  h2 {
    margin-top: 0;
  }

  #title {
    text-align: center;
    line-height: 1.2em;
    margin-bottom: 10%;
  }

  img {
    margin-bottom: 10%;
    width: 80%;
  }

  h2 {
    text-align: center;
  }

  p {
    margin: auto;
    text-align: center;
    width: 100%;
    color: white;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #title {
    font-size: 30px;
    line-height: 1.2em;
  }
}
</style>

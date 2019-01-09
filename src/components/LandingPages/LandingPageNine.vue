<template>
  <div id="landing-nine">
    <div id="content">
      <div class="columns" id="first-section">
        <div class="column is-8">
          <h1 id="title">Track Product Movements and Trace the Origins</h1>
        </div>
        <div class="column">
          <div>
            <h3 class="deployed">HERC Token is on Mainnet!</h3>
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
      <div class="columns" id="second-section">
        <div class="column">
          <img src="../../assets/herc-logo.png">
          <h3>The Revolutionary
            <br>Supply Chain
            <br>Optimization
            <br>Solution
          </h3>
        </div>
        <div class="column">
          <h2>About HERC</h2>
          <p>
            Hercules, a Special Economic Zone Company (SEZC) develops supply chain
            management software that utilizes public blockchains.
          </p>
          <p>
            The Hercules platform is decentralized and powered by HERC tokens which
            are required to record and validate the supply chain data.
          </p>
        </div>
      </div>
    </div>
    <div class="columns" id="complex2">
      <div class="column">
        <div id="buttons-lol">
          <a href="https://www.crowdfunder.com/hercules">
            <button @click="trackTokenSale" class="tokensale-button left-button">Buy HERC</button>
          </a>
          <router-link to="/whitepaper">
            <button class="right-button" @click="trackWhitepaper">Read Whitepaper</button>
          </router-link>
        </div>
      </div>
      <div class="column">
        <p id="info">
          *With the Hercules Supply Chain Protocol, users can record production details
          and key information, or digital versions of certification as products journey through the supply chain.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPageNine",
  methods: {
    trackTokenSale() {
      this.$ga.event({
        eventCategory: "LandingPageNine",
        eventAction: "TokenSale button clicked",
        eventLabel: "9-2"
      });
    },
    trackWhitepaper() {
      this.$ga.event({
        eventCategory: "LandingPageNine",
        eventAction: "Whitepaper button clicked",
        eventLabel: "9-3"
      });
    }
  }
};
</script>

<style scoped lang="scss">
#landing-nine {
  background-image: url("../../assets/landing-pages/complex-bg.png");
  background-size: cover;
  background-color: $herc-blue;
  background-repeat: no-repeat;
  background-position: top;
}

#first-section,
#second-section {
  padding: 50px;
  max-width: 1080px;
  margin: auto;
}

#title {
  font-size: 40px;
  color: $herc-gold;
  line-height: 1.2em;
  text-align: left;
  font-weight: bold;
}

h2 {
  font-size: 20px;
  color: white;
  text-align: center;
  margin: auto;
  margin-bottom: 5%;
}

h3 {
  color: $herc-gold;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2em;
}

p {
  text-align: center;
  margin-bottom: 2%;
  width: 100%;
  color: white;
}

span {
  color: $herc-blue;
  font-size: 12px;
  font-weight: bold;
}

img {
  width: 60%;
}

button {
  @include herc-gold-button;
  border: 2px solid $herc-blue;
  border-radius: 5px !important;
}

button:hover {
  @include herc-gold-button-hover;
  background-color: $herc-blue;
}

.left-button {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.right-button {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

#info {
  text-align: center;
  color: $herc-blue;
  width: 100%;
  font-weight: bold;
}

#complex2 {
  background-color: #fafafa;
  padding: 50px;
  margin: 0;
}

.deployed {
  margin-bottom: 1%;
}

.center-text {
  margin-bottom: 1%;
}

//.tokensale-button {
//  @include flash-animation;
//}

.deployed {
  margin-bottom: 5%;
}

.spacer {
  margin-bottom: 5%;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }
}

@media all and (max-width: 1099px) {
  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  img {
    width: 60%;
    margin-bottom: 5%;
  }

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
    width: 100%;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #landing-nince {
    padding-left: 20px;
    padding-right: 20px;
  }

  h2 {
    margin-top: 0;
    margin-left: 0;
  }

  h3 {
    margin: auto;
  }

  #title {
    text-align: center;
    line-height: 1.2em;
    margin-bottom: 10%;
  }

  img {
    margin: auto;
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

  #info {
    text-align: center;
    width: 100%;
  }

  #second-section {
    padding-top: 0;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #title {
    font-size: 30px;
    line-height: 1.2em;
  }

  #first-section {
    padding: 5px;
  }
}
</style>

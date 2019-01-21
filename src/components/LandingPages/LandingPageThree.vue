<template>
  <div id="landing-three">
    <div id="content">
      <div class="columns">
        <div class="column">
          <h1 id="title">Global Expert Team</h1>
          <h1 id="subtitle">Building Worldclass Solutions</h1>
          <img src="../../assets/herc-logo.png" id="logo">
          <h1 id="logo-subtitle">A Blockchain
            <br>Supply Chain Solution
          </h1>
          <div id="buttons-lol">
            <a href="https://purchase.herc.one">
              <button @click="trackTokenSale" class="tokensale-button left-button">Buy HERC</button>
            </a>
            <router-link to="/whitepaper">
              <button class="right-button" @click="trackWhitepaper">Read Whitepaper</button>
            </router-link>
          </div>
        </div>
        <div class="column">
          <img src="../../assets/landing-pages/people-computing.png" id="people">
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
      <div class="columns">
        <div class="column">
          <h2 class="center-text">HERC Token is on Mainnet!</h2>
          <div class="spacer">
            <router-link to="/tokeninfo">
              <button class="border-button">Token Info</button>
            </router-link>
          </div>
          <div class="spacer">
            <router-link to="/developer-resources">
              <button class="border-button">Developer Resources</button>
            </router-link>
          </div>
          <div>
            <router-link to="/get-started">
              <button class="border-button">Get Started</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPageThree",
  methods: {
    trackTokenSale() {
      this.$ga.event({
        eventCategory: "LandingPageThree",
        eventAction: "TokenSale button clicked",
        eventLabel: "3-2"
      });
    },
    trackWhitepaper() {
      this.$ga.event({
        eventCategory: "LandingPageThree",
        eventAction: "Whitepaper button clicked",
        eventLabel: "3-3"
      });
    }
  }
};
</script>

<style scoped lang="scss">
#landing-three {
  padding: 50px;
  background-image: url("../../assets/landing-pages/testbg.png");
  background-size: cover;
}

#content {
  max-width: 1080px;
  margin: auto;
}

#people {
  width: 80%;
  margin: auto;
  margin-bottom: 5%;
}

h1 {
  @include herc-gold-h1;
  font-size: 40px;
  margin-bottom: 15%;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: left;
  margin: auto;
  margin-bottom: 2%;
  width: 80%;
}

p {
  color: white;
  text-align: left;
  margin: auto;
  margin-bottom: 2%;
  width: 80%;
}

#title {
  font-size: 45px;
  font-weight: bold;
  text-shadow: 2px 2px black;
  margin-bottom: 0;
}

#subtitle {
  font-size: 28px;
  font-weight: 600;
  text-shadow: 2px 2px black;
}

#logo {
  width: 70%;
  margin: auto;
  margin-bottom: 15%;
}

#logo-subtitle {
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px black;
  margin-bottom: 5%;
}

button {
  @include herc-gold-button;
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

.center-text {
  text-align: center;
}

.border-button {
  border-radius: 5px;
}

.border-button:hover {
  box-shadow: $herc-shadow;
}

//.tokensale-button {
// @include flash-animation;
//}

.spacer {
  margin-bottom: 2%;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  button {
    border-radius: 5px !important;
  }

  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }
}

@media all and (max-width: 1099px) {
  button {
    border-radius: 5px !important;
  }

  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }

  br {
    display: none;
  }

  #landing-three {
    padding: 50px;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  h1 {
    font-size: 30px;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #landing-three {
    padding: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 5%;
  }

  br {
    display: none;
  }

  #logo {
    width: 80%;
    margin-bottom: 5%;
  }

  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
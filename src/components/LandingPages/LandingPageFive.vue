<template>
  <div id="landing-five">
    <div id="content">
      <div id="title-div">
        <h1 id="title">Follow an Asset through its Lifecycle</h1>
      </div>
      <img src="../../assets/herc-logo.png" id="logo">
      <div class="columns custom">
        <div class="column">
          <h3>Helping Eradicate
            <br>Racketeering & Collusion
          </h3>
          <p id="info">
            *Hercules decentralized supply chain management
            software enables users to create a permanent and shared record
            that provides immutability, and more importantly, trust for the consumer.
          </p>
          <div id="buttons-lol">
            <a href="https://www.crowdfunder.com/hercules">
              <button
                @click="trackTokenSale"
                class="remove-right-border tokensale-button left-button"
              >Buy HERC</button>
            </a>
            <router-link to="/whitepaper">
              <button class="right-button" @click="trackWhitepaper">Read Whitepaper</button>
            </router-link>
          </div>
        </div>
        <div class="column" id="druga">
          <h3>About HERC</h3>
          <p>
            Hercules, a Special Economic Zone Company (SEZC) develops supply chain
            management software that utilizes public blockchains.
          </p>
          <p class="spacer">
            The Hercules platform is decentralized and powered by HERC tokens which
            are required to record and validate the supply chain data.
          </p>
        </div>
      </div>
      <div id="treca">
        <h3 class="center-text">HERC Token is on Mainnet!</h3>
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
</template>

<script>
export default {
  name: "LandingPageFive",
  methods: {
    trackTokenSale() {
      this.$ga.event({
        eventCategory: "LandingPageFive",
        eventAction: "TokenSale button clicked",
        eventLabel: "5-2"
      });
    },
    trackWhitepaper() {
      this.$ga.event({
        eventCategory: "LandingPageFive",
        eventAction: "Whitepaper button clicked",
        eventLabel: "5-3"
      });
    }
  }
};
</script>

<style scoped lang="scss">
#title-div {
  background-color: $herc-blue;
  padding: 20px;
  border-bottom: 5px solid $herc-gold;
  box-shadow: $herc-shadow;
}

#title {
  color: $herc-gold;
  font-size: 50px;
  max-width: 1080px;
  margin: auto;
  line-height: 1.1em;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  color: $herc-blue;
  text-align: center;
  margin: auto;
  margin-bottom: 2%;
  margin-top: 5%;
}

h3 {
  color: $herc-blue;
  font-size: 30px;
  line-height: 1.2em;
  margin-bottom: 5%;
}

p {
  text-align: center;
  margin: auto;
  margin-bottom: 2%;
  width: 80%;
  color: $herc-blue;
}

#buttons-lol {
  margin-top: 5%;
}

#landing-five {
  background-image: url("../../assets/landing-pages/town-bg.png");
  background-size: cover;
}

.custom {
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 1080px;
  margin: auto;
}

#logo {
  width: 20%;
  margin: auto;
  margin-top: 5%;
}

#info {
  margin: auto;
  margin-bottom: 5%;
  color: $herc-blue;
  text-align: center;
}

.remove-right-border {
  border-right: 0;
}

button {
  @include herc-gold-button;
}

button:hover {
  background-color: $herc-blue;
  color: $herc-gold;
  border: 2px solid $herc-gold;
  cursor: pointer;
}

.left-button {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.right-button {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

span {
  color: $herc-blue;
  font-size: 12px;
  font-weight: bold;
}

#treca h3 {
  margin-bottom: 1%;
}

#treca {
  padding-bottom: 50px;
}

#treca p {
  margin-bottom: 2%;
}

#treca button {
  border-radius: 5px;
}

//.tokensale-button {
//  @include flash-animation;
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
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h2 {
    margin-top: 0;
  }

  #title {
    text-align: center;
  }

  #logo {
    width: 50%;
  }

  h2 {
    text-align: center;
  }

  p {
    margin: auto;
    text-align: center;
    width: 100%;
    color: $herc-blue;
  }

  #druga {
    padding: 30px !important;
  }

  .aligner {
    float: none;
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

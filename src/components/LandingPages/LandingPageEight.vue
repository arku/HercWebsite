<template>
  <div id="landing-eight">
    <div id="content">
      <div class="columns">
        <div class="column is-8">
          <h1 id="title">
            Producing, Manufacturing
            <br>and Delivering Products
            <br>Made
            <b>Efficient</b> and
            <b>Transparent</b>
          </h1>
        </div>

        <div class="column">
          <div>
            <h3 class="deployed">HERC Token was successfully deployed!</h3>
            <div class="spacer">
              <router-link to="/tokeninfo">
                <button class="token-button">Token Info</button>
              </router-link>
            </div>
            <div>
              <router-link to="/developer-resources">
                <button class="token-button">Developer Resources</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <img src="../../assets/herc-logo.png">
          <h3>Blockchain Powered
            <br>Supply Chain Protocol
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
      <div class="columns">
        <div class="column">
          <p>
            *Hercules decentralized supply chain management
            software enables users to create a permanent and shared record
            that provides immutability, and more importantly, trust for the consumer.
          </p>
        </div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPageEight",
  methods: {
    trackTokenSale() {
      this.$ga.event({
        eventCategory: "LandingPageEight",
        eventAction: "TokenSale button clicked",
        eventLabel: "8-2"
      });
    },
    trackWhitepaper() {
      this.$ga.event({
        eventCategory: "LandingPageEight",
        eventAction: "Whitepaper button clicked",
        eventLabel: "8-3"
      });
    }
  }
};
</script>

<style scoped lang="scss">
#landing-eight {
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
  line-height: 1.2em;
  text-align: left;
  letter-spacing: 2px;
  text-shadow: 2px 2px black;
}

h2 {
  font-size: 20px;
  color: white;
  text-align: center;
  margin: auto;
  margin-bottom: 5%;
  margin-top: 10%;
}

h3 {
  color: $herc-gold;
  font-size: 20px;
  margin-bottom: 5%;
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
}

button:hover {
  @include herc-gold-button-hover;
  background-color: $herc-blue;
  box-shadow: $herc-shadow;
}

.left-button {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.right-button {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.token-button {
  margin: 5%;
  border-radius: 5px;
}

// .tokensale-button {
//   @include flash-animation;
// }
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
  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  button {
    border-radius: 5px !important;
  }

  img {
    width: 100%;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #landing-eight {
    padding-left: 20px;
    padding-right: 20px;
  }

  h2 {
    margin-top: 0;
    margin-left: 0;
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

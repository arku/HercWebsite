<template>
    <div id="landing-four">
        <div id="content">
            <div class="columns">
                <div class="column">
                    <h1 id="title">Leveraging <span id="btc">Bitcoin</span> & <span id="eth">Ethereum</span><br> Public Blockchains</h1>
                    <img src="../../assets/herc-logo.png" id="logo">
                    <h3 id="logo-subtitle">An integrated &<br> multi-layered<br> Supply Chain<br> Software Solution</h3>
                    <div id="buttons-lol">
                      <a href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
                        <button  class="left-button" @click="trackTelegram">Talk With Us</button>
                      </a>
                      <a href="https://purchase.herc.one">
                        <button @click="trackTokenSale" class="tokensale-button">Token Sale</button>
                      </a>
                      <router-link to="/whitepaper">
                        <button  class="right-button" @click="trackWhitepaper">Read Whitepaper</button>
                      </router-link>
                    </div>
                </div>
                <div class="column">
                  <div>
                    <h2 class="center-text">HERC Token was successfully deployed!</h2>
                    <div class="spacer">
                      <router-link to="/tokeninfo">
                        <button class="spacer border-rad">Token Info</button>
                      </router-link>
                    </div>
                    <div>
                      <router-link to="/developer-resources">
                        <button class="spacer border-rad">Developer Resources</button>
                      </router-link>
                    </div>
                  </div>
                  <img src="../../assets/landing-pages/coins.png" id="coins">
                  <h4>Powered by <span id="herc-bold">HERC</span> tokens</h4>
                  <h2>About HERC</h2>
                <p>Hercules, a Special Economic Zone Company (SEZC) develops supply chain
                  management software that utilizes public blockchains.
                </p>
                <p>The Hercules platform is decentralized and powered by HERC tokens which
                  are required to record and validate the supply chain data.
                </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "LandingPageFour",
  methods: {
    trackTelegram() {
      this.$ga.event({
        eventCategory: "LandingPageFour",
        eventAction: "Telegram button clicked",
        eventLabel: "4-1"
      });
    },
    trackTokenSale() {
      this.$ga.event({
        eventCategory: "LandingPageFour",
        eventAction: "TokenSale button clicked",
        eventLabel: "4-2"
      });
    },
    trackWhitepaper() {
      this.$ga.event({
        eventCategory: "LandingPageFour",
        eventAction: "Whitepaper button clicked",
        eventLabel: "4-3"
      });
    }
  }
};
</script>

<style scoped lang="scss">
#landing-four {
  padding: 50px;
  background-image: url("../../assets/landing-pages/tribg.png");
  background-size: cover;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  @include herc-gold-h1;
  font-size: 40px;
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

h3 {
  font-size: 18px;
  color: $herc-gold;
  font-weight: bold;
  text-shadow: 2px 2px black;
  text-transform: uppercase;
  line-height: 1.2em;
  margin-bottom: 5%;
}

h4 {
  color: $herc-gold;
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 5%;
}

p {
  color: white;
  text-align: left;
  margin: auto;
  margin-bottom: 2%;
  width: 80%;
}

#title {
  font-size: 35px;
  text-shadow: 2px 2px black;
  text-align: left;
  margin-bottom: 10%;
}

#logo {
  width: 60%;
  margin: auto;
  margin-bottom: 5%;
}

#btc,
#eth {
  font-weight: bold;
  font-size: 35px;
  color: $herc-gold;
}

button {
  @include herc-gold-button;
}

button:hover {
  @include herc-gold-button-hover;
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
}

#coins {
  width: 60%;
  margin: auto;
}

#herc-bold {
  color: $herc-gold;
  font-weight: bold;
  font-size: 20px;
}

.center-text {
  text-align: center;
}

.spacer {
  margin-bottom: 5%;
}

.tokensale-button {
  @include flash-animation;
}

.border-rad {
  border-radius: 5px;
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
  #title,
  #btc,
  #eth {
    font-size: 30px;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #title {
    text-align: center;
  }

  #logo {
    margin-bottom: 10%;
    width: 80%;
  }

  #coins {
    margin-bottom: 5%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #landing-four {
    padding: 20px;
    padding-top: 50px;
  }

  #title,
  #btc,
  #eth {
    font-size: 28px;
    margin-bottom: 10%;
  }
}
</style>
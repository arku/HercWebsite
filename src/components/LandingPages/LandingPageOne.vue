<template>
    <div id="landing-one">
        <div id="content">
            <div class="columns">
              <div class="column">
                <h1>Play <b><a href="https://hipr.one" target="_blank">HIPR</a></b> & earn<br> HERC tokens<br> for verifying supply chain data</h1>
                <h1>A blockchain<br> supply chain solution</h1>
                <div>
                  <div id="buttons-lol">
                    <a href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
                      <button  class="left-button" @click="trackTelegram">Talk With Us</button>
                    </a>
                    
                    <router-link to="/whitepaper">
                      <button  class="right-button" @click="trackWhitepaper">Read Whitepaper</button>
                    </router-link>
                  </div>
                  <h2 class="center-text">HERC Token was successfully deployed!</h2>
                  <div class="spacer">
                    <router-link to="/tokeninfo">
                    <button class="token-button">Token Info</button><br>
                  </router-link>
                  </div>
                  <div>
                    <router-link to="/developer-resources">
                    <button class="token-button">Developer Resources</button><br>
                  </router-link>
                  </div>
                  <!-- PROGRESS BAR HERE -->
                  <a href="https://purchase.herc.one">
                    <button @click="trackTokenSale" class="tokensale-button">Buy HERC now!</button>
                  </a>
                </div>
              </div>
              <div class="column">
                <img src="../../assets/landing-pages/people-group.png">
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
  name: "LandingPageOne",
  methods: {
    trackTelegram() {
      this.$ga.event({
        eventCategory: "LandingPageOne",
        eventAction: "Telegram button clicked",
        eventLabel: "1-1"
      });
    },
    trackTokenSale() {
      this.$ga.event({
        eventCategory: "LandingPageOne",
        eventAction: "TokenSale button clicked",
        eventLabel: "1-2"
      });
    },
    trackWhitepaper() {
      this.$ga.event({
        eventCategory: "LandingPageOne",
        eventAction: "Whitepaper button clicked",
        eventLabel: "1-3"
      });
    }
  }
};
</script>
<style scoped lang="scss">
#landing-one {
  padding: 50px;
  background-color: $herc-blue;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  color: $herc-gold;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1.2em;
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

a {
  color: $herc-gold;
}

a:hover {
  color: white;
}

span {
  color: white;
  font-size: 12px;
}

img {
  margin: auto;
  margin-bottom: 10%;
}

button {
  @include herc-gold-button;
}

button:hover {
  @include herc-gold-button-hover;
}

#buttons-lol {
  margin-bottom: 5%;
  width: 100%;
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

.token-button {
  border-radius: 5px;
}

.tokensale-button {
  border-radius: 5px;
  margin: 5%;
  @include flash-animation;
}

.spacer {
  margin-bottom: 5%;
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

  #landing-one {
    padding: 50px;
  }

  .countdown-size {
    width: 80%;
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
  #landing-one {
    padding: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }

  h1 {
    margin-bottom: 5%;
  }

  h2,
  p {
    width: 100%;
  }

  br {
    display: none;
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

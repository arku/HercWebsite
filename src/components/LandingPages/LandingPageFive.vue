<template>
    <div id="landing-five">
        <div id="content">
            <div id="title-div">
                <h1 id="title">Follow an Asset through its Lifecycle</h1>
            </div>
            <img src="../../assets/herc-logo.png" id="logo">
            <div class="columns custom">
                <div class="column">
                    <h3>Helping Eradicate<br> Racketeering & Collusion</h3>
                    <p id="info">*Hercules decentralized supply chain management
                        software enables users to create a permanent and shared record
                        that provides immutability, and more importantly, trust for the consumer.
                    </p>
                    <div id="buttons-lol">
                      <a href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
                        <button  class="left-button remove-right-border" @click="trackTelegram">Talk With Us</button>
                      </a>
                      <a href="https://purchase.herc.one">
                        <button @click="trackTokenSale" class="remove-right-border tokensale-button">Buy HERC</button>
                      </a>
                      <router-link to="/whitepaper">
                        <button  class="right-button" @click="trackWhitepaper">Read Whitepaper</button>
                      </router-link>
                  </div>
                </div>
                <div class="column" id="druga">
                    <h3>About HERC</h3>
                    <p>Hercules, a Special Economic Zone Company (SEZC) develops supply chain
                    management software that utilizes public blockchains.
                    </p>
                    <p class="spacer">The Hercules platform is decentralized and powered by HERC tokens which
                    are required to record and validate the supply chain data.
                    </p>
                    
                    <!-- <div id="date-wrapper">
                        <p id="date-holder">TGE Starts<br><span id="date-span">29 October 2018, 08:00am CST</span></p>
                        <div id="countdown">
                      <div class="columns countdown-size is-mobile">
                        <div class="column">
                          <p id="days"></p>
                          <span>Days</span>
                        </div>
                        <div class="column">
                          <p id="hours"></p>
                          <span>Hours</span> 
                        </div>  
                        <div class="column">
                          <p id="minutes"></p>
                          <span>Minutes</span>
                        </div>  
                        <div class="column">
                          <p id="seconds"></p>
                          <span>Seconds</span>
                        </div>       
                      </div>
                  </div>
                    </div> -->
                </div>
            </div>
            <div id="treca">
              <h3 class="center-text">HERC Token was successfully deployed!</h3>
              <div class="spacer">
                <router-link to="/tokeninfo">
                  <button>Token Info</button>
                </router-link>
              </div>
              <div>
                <router-link to="/developer-resources">
                  <button>Developer Resources</button>
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
    trackTelegram() {
      this.$ga.event({
        eventCategory: "LandingPageFive",
        eventAction: "Telegram button clicked",
        eventLabel: "5-1"
      });
    },
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
  },
  mounted() {
    /*
    // Set the date we're counting down to
    var countDownDate = new Date("Oct 29, 2018 14:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"

      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").style.cssText = "display:none;";
        document.getElementById("date-holder").style.cssText = "display:none;";
      }
    }, 1000);
    */
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

#date-wrapper {
  background-color: $herc-blue;
  border: 3px solid $herc-gold;
  border-radius: 10px;
  padding: 50px;
  margin-top: 5%;
}

#date-holder {
  font-size: 24px;
  text-align: left;
  color: white;
  width: 90%;
  margin: auto;
  margin-bottom: 5%;
}

#date-span {
  font-size: 24px;
  color: white;
}

#days,
#hours,
#minutes,
#seconds {
  margin: 0;
  text-align: center !important;
  font-size: 30px;
  font-weight: bold;
  color: $herc-blue;
  line-height: 1em;
  width: 100%;
}

.countdown-size {
  margin: auto;
  width: 100%;
}

.countdown-size .column {
  padding: 10px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

#countdown {
  background-color: $herc-gold;
  margin: auto;
  width: 90%;
  box-shadow: $herc-shadow;
  margin-bottom: 5%;
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

.tokensale-button {
 @include flash-animation
}

.spacer {
  margin-bottom: 2%;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #countdown,
  #date-holder {
    width: 80%;
  }

  button {
    border-radius: 5px !important;
  }

  .remove-right-border {
    border-right: 2px solid $herc-blue !important;
  }

  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }
}

@media all and (max-width: 1099px) {
  #countdown,
  #date-holder {
    width: 100%;
  }

  button {
    border-radius: 5px !important;
  }

  .remove-right-border {
    border-right: 2px solid $herc-blue !important;
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
  #date-holder {
    text-align: center;
  }

  h2 {
    margin-top: 0;
  }

  #title {
    text-align: center;
  }

  #logo {
    width: 50%;
  }

  #date-holder,
  #countdown {
    margin-bottom: 10%;
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

  #date-wrapper {
    padding: 20px;
  }
}
</style>

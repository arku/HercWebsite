<template>
    <div id="landing-eight">
        <div id="content">
            <div class="columns">
                <div class="column is-8">
                    <h1 id="title">Producing, Manufacturing<br> and Delivering Products<br> Made <b>Efficient</b> and <b>Transparent</b></h1>
                </div>
                
                <div class="column">
                  <div>
                      <h3 class="deployed">HERC Token was successfully deployed!</h3>
                      <router-link to="/tokeninfo">
                        <button id="token-button">Token Info</button>
                      </router-link>
                    </div>
                    <!-- <div id="date-wrapper">
                        <p id="date-holder">TGE Starts <br><span id="date-span">29 October 2018, 08:00am CST</span></p>
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
            <div class="columns">
                <div class="column">
                    <img src="../../assets/herc-logo.png">
                    <h3>Blockchain Powered<br>Supply Chain Protocol</h3>
                </div>
                <div class="column">
                    <h2>About HERC</h2>
                    <p>Hercules, a Special Economic Zone Company (SEZC) develops supply chain
                    management software that utilizes public blockchains.
                    </p>
                    <p>The Hercules platform is decentralized and powered by HERC tokens which
                    are required to record and validate the supply chain data.
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <p>*Hercules decentralized supply chain management
                        software enables users to create a permanent and shared record
                        that provides immutability, and more importantly, trust for the consumer.</p>
                </div>
                <div class="column">
                    <div id="buttons-lol">
                      <a href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
                        <button  class="left-button" @click="trackTelegram">Talk With Us</button>
                      </a>
                      <a href="https://purchase.herc.one">
                        <button @click="trackTokenSale" class="tokensale-button">Buy HERC</button>
                      </a>
                      <router-link to="/whitepaper">
                        <button  class="right-button" @click="trackWhitepaper">Read Whitepaper</button>
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
    trackTelegram() {
      this.$ga.event({
        eventCategory: "LandingPageEight",
        eventAction: "Telegram button clicked",
        eventLabel: "8-1"
      });
    },
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

<style scoped>
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
  color: #f3c736;
  line-height: 1.2em;
  text-align: left;
  letter-spacing: 2px;
  text-shadow: 2px 2px black;
}

#date-holder {
  font-size: 22px;
  text-align: right;
  color: white;
  margin-bottom: 1%;
  width: 100%;
}

#date-wrapper {
  width: 100%;
}

#date-span {
  font-size: 22px;
  color: white;
  font-weight: normal;
}

#days,
#hours,
#minutes,
#seconds {
  margin: 0;
  text-align: center !important;
  font-size: 30px;
  font-weight: bold;
  color: #091141;
  line-height: 1em;
  width: 100%;
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
  color: #f3c736;
  font-size: 20px;
  margin-bottom: 5%;
}

p {
  text-align: center;
  margin-bottom: 2%;
  width: 100%;
  color: white;
}

.countdown-size {
  margin: auto;
  width: 100%;
}

#countdown {
  background-color: #f3c736;
  width: 100%;
  box-shadow: 0px 12px 18px -6px #000;
  margin-bottom: 5%;
}

span {
  color: #091141;
  font-size: 12px;
  font-weight: bold;
}

img {
  width: 60%;
}

button {
  background-color: #f3c736;
  border: 2px solid #f3c736;
  font-size: 20px;
  text-transform: uppercase;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  color: #091141;
}

button:hover {
  background-color: #091141;
  color: #f3c736;
  border: 2px solid #f3c736;
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

#token-button {
  margin: 5%;
  border-radius: 5px;
  box-shadow: 0px 12px 18px -6px #000;
}

.tokensale-button {
  animation-name: flash;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  -webkit-animation-name: flash;
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;

  -moz-animation-name: flash;
  -moz-animation-duration: 1s;
  -moz-animation-timing-function: linear;
  -moz-animation-iteration-count: infinite;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #countdown,
  #date-holder {
    width: 100%;
  }

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
  #countdown,
  #date-holder {
    width: 100%;
  }

  #date-span {
    font-size: 20px;
  }

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

  #date-holder {
    text-align: center;
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

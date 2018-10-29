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
                    <!-- <a href="https://purchase.herc.one">
                      <button @click="trackTokenSale">Token Sale</button>
                    </a> -->
                    <router-link to="/whitepaper">
                      <button  class="right-button" @click="trackWhitepaper">Read Whitepaper</button>
                    </router-link>
                  </div>
                  <!-- <h2 id="date-info">29 October 2018. 08:00 am CST</h2>
                  <div id="countdown">
                      <p id="demo"></p>
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
                  </div> -->
                  <h2 class="center-text">HERC Token was succesfuly deployed!</h2>
                  <p class="center-text">Click on button to see more info</p>
                  <router-link to="/tokeninfo">
                    <button>Token Info</button>
                  </router-link>
                </div>
              </div>
              <div class="column">
                <img src="../../assets/landing-pages/people-group.png">
                <h2>About HERC</h2>
                <p>Hercules, a Special Economic Zone Company (SEZC) develops supply chain
                  management software that utlizes public blockchains.
                </p>
                <p>The Hercules platform is decentralized and powered by HERC tokens which
                  are required to record and validate the supply chain data
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
        document.getElementById("date-info").style.cssText = "display:none;";
      }
    }, 1000);
    */
  }
};
</script>
<style scoped>
#landing-one {
  padding: 50px;
  background-color: #091141;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  color: #f3c736;
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
  color: #f3c736;
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
}

button:hover {
  background-color: transparent;
  color: #f3c736;
  border: 2px solid #f3c736;
  cursor: pointer;
  box-shadow: 0px 12px 18px -6px #000;
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

#demo {
  text-align: center;
}

#days,
#hours,
#minutes,
#seconds {
  margin-top: 0;
  margin-bottom: 0;
  text-align: center !important;
  font-size: 40px;
  font-weight: bold;
  color: #f3c736;
  line-height: 1em;
}

#holder {
  display: inline-block;
}

.countdown-size {
  margin: auto;
  width: 50%;
}

#date-info {
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
}

.center-text {
  text-align: center;
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
  .countdown-size {
    width: 100%;
  }
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

  .countdown-size {
    width: 100%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

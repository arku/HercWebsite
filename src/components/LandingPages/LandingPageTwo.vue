<template>
    <div id="landing-two">
        <div id="content">
            <div id="first-section" class="columns">
                <div class="column">
                    <img src="../../assets/herc-logo.png">
                    <h2>Beyond the Legendary Gold Legacy Comes a Transformation of Global
                        Value Chains</h2>
                    <h1>Welcome to supply Chain Management on The Blockchain!</h1>
                    <img src="../../assets/landing-pages/guy.png" id="guy">
                </div>
                <div class="column">
                  <div id="countdown">
                    <p id="demo"></p>
                    <div id="title-holder">
                    <h2 id="tge" class="date-info">TGE Starts</h2>
                    <h2 class="date-info">29 October 2018. 12:00 PST</h2>
                    </div>
                      <div class="columns countdown-size is-mobile">
                        <div class="column">
                          <p id="days"></p>
                          <span>Days</span>
                        </div>
                        <div class="column">
                          <p id="hours">20</p>
                          <span>Hours</span> 
                        </div>  
                        <div class="column">
                          <p id="minutes">20</p>
                          <span>Minutes</span>
                        </div>  
                        <div class="column">
                          <p id="seconds">55</p>
                          <span>Seconds</span>
                        </div>       
                      </div>
                  </div>
                </div>
            </div>
            <div id="shape-section" class="columns">
                <div class="column">
                    <div id="buttons-lol">
                        <router-link to="/terms">Terms & Conditions</router-link>
                        <a href="https://s3.us-east-2.amazonaws.com/hercmedia/herc_2018_whitepaper_x3.pdf" target="_blank">White Paper</a>
                    </div>
                </div>
                <div class="column">
                    <h2 id="about-text">About HERC</h2>
                    <p class="p-tune">Hercules, a Special Economic Zone Company (SEZC) develops supply
                        chain management software that utilizes public blockchains.
                    </p>
                    <p class="p-tune">The Hercules platform is decentralized and powered by HERC tokens
                        which are required to record and validate the supply chain data.
                    </p>
                    <p class="p-tune">Hercules software is fully open source.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "LandingPageTwo",
  mounted() {
    // Set the date we're counting down to
    var countDownDate = new Date("Oct 29, 2018 09:00:00").getTime();

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
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
};
</script>

<style scoped>
#landing-two {
  background-image: url("../../assets/landing-pages/gradient-image-bg.png");
  background-size: cover;
  background-color: #091141;
}

#first-section {
  padding: 50px;
  padding-bottom: 0;
  /* max-width: 1080px;
  margin: auto; */
}

h1 {
  color: #f3c736;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1.2em;
  margin-bottom: 5%;
}

h2 {
  font-size: 24px;
  color: white;
  text-align: center;
  margin: auto;
  margin-bottom: 5%;
  text-transform: uppercase;
}

p {
  color: #091141;
  text-align: left;
  margin-bottom: 1%;
  font-weight: bold;
}

.p-tune {
  margin-left: 20%;
  width: 80%;
}

span {
  color: #091141;
  font-size: 12px;
  font-weight: bold;
}

img {
  margin: auto;
  margin-bottom: 5%;
  width: 70%;
}

a {
  background-color: #f3c736;
  border: 2px solid #f3c736;
  font-size: 18px;
  text-transform: uppercase;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  color: #091141;
  margin: 5%;
}

a:hover {
  background-color: transparent;
  border: 2px solid #f3c736;
}

#logo {
  width: 40%;
}

#buttons-lol {
  margin-top: 28%;
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
  color: #091141;
  line-height: 1em;
}

#holder {
  display: inline-block;
}

.countdown-size {
  margin: auto;
  width: 80%;
  background-color: #f3c736;
}

.date-info {
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  color: #091141;
  font-weight: bold;
}

#guy {
  width: 25%;
  float: right;
}

#countdown {
  background-color: #e9e9e9;
  padding: 20px;
  border: 8px solid white;
  border-radius: 5px;
}

#tge {
  margin-bottom: 0;
}

#shape-section {
  background-image: url("../../assets/wave-shape.png");
  background-position: left;
  background-position-x: -250px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -200px;
}

#about-text {
  color: #091141;
  font-weight: bold;
  text-transform: none;
  margin-top: 5%;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #shape-section {
    margin-top: -150px;
  }

  p {
    width: 70%;
    margin-left: 25%;
  }
}

@media all and (max-width: 1099px) {
  #shape-section {
    margin-top: -150px;
    background-position-x: -400px;
  }

  p {
    width: 80%;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  #buttons-lol {
    margin-top: 20% !important;
  }

  #shape-section {
    background-color: white;
    margin-top: 50px;
  }

  #guy {
    display: none;
  }

  #first-section {
    padding: 50px;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  a {
    margin: 1%;
  }

  #buttons-lol {
    margin-top: 50%;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #buttons-lol {
    margin-top: 5%;
  }

  h2,
  p {
    text-align: center;
    width: 100%;
    margin: auto;
    margin-bottom: 5%;
  }

  #about-text {
    margin-top: 0;
    margin-bottom: 1%;
  }

  #shape-section {
    padding-bottom: 50px;
  }

  #first-section {
    padding: 20px;
  }

  #countdown {
    width: 100%;
  }

  .countdown-size {
    width: 100%;
    background-color: transparent;
  }

  #demo {
    display: none;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

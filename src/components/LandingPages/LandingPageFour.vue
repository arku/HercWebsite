<template>
    <div id="landing-four">
        <div id="content">
            <div class="columns">
                <div class="column">
                    <h1 id="title">Leveraging <span id="btc">Bitcoin</span> & <span id="eth">Ethereum</span><br> Public Blockchains</h1>
                    <img src="../../assets/herc-logo.png" id="logo">
                    <h3 id="logo-subtitle">An integrated &<br> multi-layered<br> Supply Chain<br> Software Solution</h3>
                    <div id="buttons-lol">
                        <button class="left-button">Talk With Us</button>
                        <button>Join Token Sale</button>
                        <button class="right-button">Read Whitepaper</button>
                  </div>
                </div>
                <div class="column">
                    <p id="date-holder">TGE Starts<br><span id="date-span">29 October 2018, 12:00PST</span></p>
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
                  <img src="../../assets/landing-pages/coins.png" id="coins">
                  <h4>Powered by <span id="herc-bold">HERC</span> tokens</h4>
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
  name: "LandingPageFour",
  mounted() {
    // Set the date we're counting down to
    var countDownDate = new Date("Oct 29, 2018 21:00:00").getTime();

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
  color: #f3c736;
  font-size: 40px;
  text-transform: uppercase;
  line-height: 1.2em;
  margin-bottom: 5%;
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
  color: #f3c736;
  font-weight: bold;
  text-shadow: 2px 2px black;
  text-transform: uppercase;
  line-height: 1.2em;
  margin-bottom: 5%;
}

h4 {
  color: #f3c736;
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
  color: #f3c736;
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
}

.left-button {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.right-button {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

#date-holder {
  font-size: 24px;
  text-align: center;
}

#date-span {
  font-weight: bold;
  font-size: 24px;
  color: white;
}

span {
  color: #091141;
  font-size: 12px;
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
  font-size: 30px;
  font-weight: bold;
  color: #091141;
  line-height: 1em;
}

.countdown-size {
  margin: auto;
  width: 100%;
}

#countdown {
  background-color: #f3c736;
  width: 50%;
  margin: auto;
  box-shadow: 0px 12px 18px -6px #000;
  margin-bottom: 5%;
}

#coins {
  width: 60%;
  margin: auto;
}

#herc-bold {
  color: #f3c736;
  font-weight: bold;
  font-size: 20px;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #countdown {
    width: 80%;
  }

  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }
}

@media all and (max-width: 1099px) {
  #countdown {
    width: 70%;
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

  #date-holder,
  #countdown {
    margin-bottom: 10%;
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
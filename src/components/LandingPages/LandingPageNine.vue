<template>
    <div id="landing-nine">
        <div id="content">
            <div class="columns" id="first-section">
                <div class="column is-8">
                    <h1 id="title">Track Product Movements and Trace the Origins</h1>
                </div>
                <div class="column">
                    <div id="date-wrapper">
                        <p id="date-holder">TGE Starts <br><span id="date-span">29 October 2018, 12:00PST</span></p>
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
                    </div>
                </div>
            </div>
            <div class="columns" id="second-section">
                <div class="column">
                    <img src="../../assets/herc-logo.png">
                    <h3>The Revolutionary<br>Supply Chain<br>Optimization<br>Solution</h3>
                </div>
                <div class="column">
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
        <div class="columns" id="complex2">
                <div class="column">
                    <div id="buttons-lol">
                      <a href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
                        <button  class="left-button">Talk With Us</button>
                      </a>
                      <a>
                        <!-- <button>Token Sale</button> -->
                      </a>
                      <a href="https://s3.us-east-2.amazonaws.com/hercmedia/herc_2018_whitepaper_x3.pdf" target="_blank">
                        <button  class="right-button">Read Whitepaper</button>
                      </a>
                  </div>
                </div>
                <div class="column">
                    <p id="info">*With the Hercules Supply Chain Protocol, users can record production details
                        and key information, or digital versions of certification as products journey through the supply chain.
                    </p>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: "LandingPageNine",
  mounted() {
    // Set the date we're counting down to
    var countDownDate = new Date("Oct 29, 2018 08:00:00").getTime();

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
#landing-nine {
  background-image: url("../../assets/landing-pages/complex-bg.png");
  background-size: cover;
  background-color: #091141;
  background-repeat: no-repeat;
  background-position: top;
}

#first-section,
#second-section {
  padding: 50px;
  max-width: 1080px;
  margin: auto;
}

#title {
  font-size: 40px;
  color: #f3c736;
  line-height: 1.2em;
  text-align: left;
  font-weight: bold;
}

#date-holder {
  font-size: 20px;
  text-align: center;
  color: #f3c736;
  margin-bottom: 1%;
  width: 100%;
}

#date-wrapper {
  width: 100%;
}

#date-span {
  font-size: 20px;
  color: #f3c736;
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
}

h3 {
  color: #f3c736;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2em;
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
  border: 2px solid #091141;
  border-radius: 5px !important;
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
  background-color: #091141;
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

#info {
  text-align: center;
  color: #091141;
  width: 100%;
  font-weight: bold;
}

#complex2 {
  background-color: #fafafa;
  padding: 50px;
  margin: 0;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #countdown,
  #date-holder {
    width: 100%;
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

  .left-button,
  .right-button {
    border-radius: 0;
    margin: 5%;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  img {
    width: 60%;
    margin-bottom: 5%;
  }

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
    width: 100%;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #landing-nince {
    padding-left: 20px;
    padding-right: 20px;
  }

  #date-holder {
    text-align: center;
  }

  #date-wrapper {
    margin: auto;
    width: 100%;
  }

  h2 {
    margin-top: 0;
    margin-left: 0;
  }

  h3 {
    margin: auto;
  }

  #title {
    text-align: center;
    line-height: 1.2em;
    margin-bottom: 10%;
  }

  img {
    margin: auto;
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

  #info {
    text-align: center;
    width: 100%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #title {
    font-size: 30px;
    line-height: 1.2em;
  }

#first-section{
  padding: 5px;
}

}
</style>

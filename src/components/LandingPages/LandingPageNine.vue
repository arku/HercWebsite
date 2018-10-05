<template>
    <div id="landing-nine">
        <div id="content">
            <div class="columns">
                <div class="column is 8">
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
            <div class="columns">
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
                        <button class="left-button">Talk With Us</button>
                        <button>Join Token Sale</button>
                        <button class="right-button">Read Whitepaper</button>
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
#landing-nine {
  background-image: url("../../assets/landing-pages/complex-bg.png");
  background-size: cover;
  background-color: #091141;
  background-repeat: no-repeat;
  background-position: top;
}

#content {
  padding: 50px;
}

#title {
  font-size: 40px;
  color: #f3c736;
  line-height: 1.2em;
  text-align: left;
  letter-spacing: 2px;
  font-weight: bold;
}

#date-holder {
  font-size: 24px;
  text-align: left;
  color: #f3c736;
  margin-bottom: 1%;
  margin-left: 0;
  letter-spacing: 2px;
}

#date-wrapper {
  width: 80%;
}

#date-span {
  font-size: 24px;
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
  text-align: left;
  margin: auto;
  margin-bottom: 5%;
  margin-top: 10%;
}

h3 {
  color: #f3c736;
  font-size: 20px;
  margin-bottom: 5%;
  font-weight: bold;
  line-height: 1.2em;
  margin-right: 40%;
}

p {
  text-align: left;
  margin-bottom: 2%;
  width: 60%;
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
  width: 50%;
  margin-right: 40%;
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
  margin-left: 0;
  color: #091141;
  margin-right: 0;
  width: 80%;
  font-weight: bold;
}

#complex2 {
  background-color: #fafafa;
  padding: 50px;
}
</style>

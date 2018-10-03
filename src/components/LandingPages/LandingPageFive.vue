<template>
    <div id="landing-five">
        <div id="content">
            <div id="title-div">
                <h1 id="title">Follow an Asset through its Lifecycle</h1>
            </div>
            <div class="columns custom">
                <div class="column">
                    <img src="../../assets/herc-logo.png" id="logo">
                    <h3>Helping Eradicate<br> Racketeering & Collusion</h3>
                    <p id="info">*Hercules decentralized supply chain management
                        software enables users to create a permanent and shared record
                        that provides immutability, and more importantly, trust for the consumer.
                    </p>
                    <div id="buttons-lol">
                        <button class="left-button">Talk With Us</button>
                        <button>Join Token Sale</button>
                        <button class="right-button">Read Whitepaper</button>
                  </div>
                </div>
                <div class="column">
                    <h2>About HERC</h2>
                    <p>Hercules, a Special Economic Zone Company (SEZC) develops supply chain
                    management software that utlizes public blockchains.
                    </p>
                    <p>The Hercules platform is decentralized and powered by HERC tokens which
                    are required to record and validate the supply chain data
                    </p>
                    <div id="date-wrapper">
                        <p id="date-holder">TGE Starts<br><span id="date-span">15 October 2018, 12:00PST</span></p>
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
        </div>
    </div>
</template>

<script>
export default {
  name: "LandingPageFive",
  mounted() {
    // Set the date we're counting down to
    var countDownDate = new Date("Oct 15, 2018 21:00:00").getTime();

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
#title-div {
  background-color: #091141;
  padding: 30px;
  border-bottom: 5px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
}

#title {
  color: #f3c736;
  font-size: 50px;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  color: #091141;
  text-align: left;
  margin: auto;
  margin-bottom: 2%;
  margin-top: 5%;
}

h3 {
  color: #091141;
  font-size: 30px;
  line-height: 1.2em;
  margin-bottom: 5%;
}

p {
  text-align: left;
  margin-bottom: 2%;
  width: 80%;
}

.custom {
  background-image: url("../../assets/landing-pages/town-bg.png");
  background-size: cover;
}

.column {
  padding: 50px !important;
}

#logo {
  width: 50%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
}

#info {
  margin: auto;
  margin-bottom: 5%;
  color: #091141;
  text-align: center;
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

#date-wrapper {
  background-color: #091141;
  border: 3px solid #f3c736;
  border-radius: 10px;
  border-bottom: 0;
  border-right: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  margin-right: -50px;
  padding: 50px;
  margin-top: 5%;
}

#date-holder {
  font-size: 24px;
  text-align: left;
  color: white;
}

#date-span {
  font-size: 24px;
  color: white;
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

.countdown-size .column{
    padding: 10px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;

}

#countdown {
  background-color: #f3c736;
  width: 100%;
  margin: auto;
  box-shadow: 0px 12px 18px -6px #000;
  margin-bottom: 5%;
}
</style>

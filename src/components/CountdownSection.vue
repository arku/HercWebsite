<template>
    <div id="countdown-section">
        <div id="content">
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
</template>

<script>
export default {
  name: "CountdownSection",
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

<style scoped lang="scss">
#countdown-section {
  padding: 50px;
  padding-top: 0px;
  background-color: $herc-blue;
}

#content {
  max-width: 1080px;
  margin: auto;
}

#date-holder {
  font-size: 24px;
  text-align: center;
  color: $herc-gold;
  margin-bottom: 1%;
  margin-left: 0;
  letter-spacing: 2px;
}

#date-wrapper {
  width: 50%;
  margin: auto;
}

#date-span {
  font-size: 24px;
  color: $herc-gold;
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
  color: $herc-blue;
  line-height: 1em;
  width: 100%;
}

p {
  margin-bottom: 2%;
  width: 100%;
}

.countdown-size {
  margin: auto;
  width: 100%;
}

#countdown {
  background-color: $herc-gold;
  width: 100%;
  box-shadow: $herc-shadow;
  margin-bottom: 5%;
  border-radius: 5px;
}

span {
  color: $herc-blue;
  font-size: 12px;
  font-weight: bold;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
    #countdown-section{
        padding-left: 20px;
        padding-right: 20px;
    }

  #date-wrapper {
    margin: auto;
    width: 100%;
  }

  #date-holder,
  #countdown {
    margin-bottom: 10%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

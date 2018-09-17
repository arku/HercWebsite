<template>
    <div id="bubble-section">
        <div id="content">
          <div>
            <h1 class="title">With Hercules, you get . . .</h1>
          </div>
            <div class="columns">
                <div class="column blurb">
                    <div class="blurb-image hvr-pulse-shrink">
                        <i class="fas fa-cogs fa-5x"></i>
                    </div>
                    <h2 class="blurb-title">Efficiency</h2>
                    <p class="blurb-text">Today paper and email invoice errors cost $40-$400 to reconcile. Using Hercules $.01-$1.</p>
                </div>
                <div class="column blurb">
                    <div class="blurb-image hvr-pulse-shrink">
                        <i class="fas fa-plane fa-5x"></i>
                    </div>
                    <h2 class="blurb-title">Speed</h2>
                    <p class="blurb-text">Today a single paper and email invoice processing takes 10.3 days on average to process. Using Hercules: Same Day.</p>
                </div>
                <div class="column blurb">
                    <div class="blurb-image hvr-pulse-shrink">
                        <i class="fas fa-balance-scale fa-5x"></i>
                    </div>
                    <h2 class="blurb-title">Integrity</h2>
                    <p class="blurb-text">Today paper, email and off-chain digital records can
                       be easily tampered with. Using Hercules: irrefutable proof of date, time, or
                        geolocation can be recorded and stored immutably.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "BubbleSection"
};
</script>

<style scoped>
#bubble-section {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 150px;
  background-color: #091141;
  padding-right: 150px;
  border-top: 2px solid #f3c736;
  border-bottom: 2px solid #f3c736;
}

.title {
  color: #f3c736;
  text-transform: none;
  font-weight: normal;
}

.blurb {
  background-color: #fafafa !important;
  height: 320px !important;
  margin: 3%;
  margin-bottom: auto;
  padding: 20px;
  box-shadow: 0px 12px 18px -6px #000;
}

h1 {
  font-size: 40px;
  text-align: center;
  color: #091141;
  text-transform: uppercase;
  margin-bottom: 2%;
  line-height: 1em;
  font-weight: bold;
}

i {
  margin: auto;
  margin-bottom: 50%;
  color: #f3c736;
}

.blurb-title {
  text-transform: uppercase;
  text-align: center;
  color: #091141;
  font-weight: bold;
  line-height: 1em;
  margin-bottom: 3%;
  font-size: 18px;
}

.blurb-text {
  color: #091141;
  text-align: center;
  /* text-transform: uppercase; */
  line-height: 1.5em;
  font-weight: 900;
  font-size: 14px;
}

#subtitle {
  color: #091141;
  margin-bottom: 2%;
  font-size: 24px;
}

/* Pulse Shrink */
@-webkit-keyframes hvr-pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
@keyframes hvr-pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
.hvr-pulse-shrink {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-animation-name: hvr-pulse-shrink;
  animation-name: hvr-pulse-shrink;
  -webkit-animation-duration: 0.3s;
  animation-duration: 1.9s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}

/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #bubble-section {
    padding-right: 10px;
    padding-left: 10px;
    margin: auto;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}

/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  .blurb-title {
    font-size: 16px;
    font-weight: bold;
  }

  .blurb-text {
    line-height: 1.1em;
  }

  .blurb {
    margin: 2%;
  }

  #bubble-section {
    padding: 50px;
  }

  h1 {
    font-size: 40px;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  .blurb-title {
    font-size: 18px;
    font-weight: bold;
    color: #091141;
  }

  .blurb-text {
    font-size: 14px;
    line-height: 1.2em;
    color: #091141;
  }

  #bubble-section {
    padding: 100px;
    border-bottom: 0px;
  }

  .columns {
    margin-bottom: 10% !important;
  }

  h1 {
    font-size: 30px;
  }

  #subtitle {
    margin-bottom: 5%;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  .blurb-title {
    font-size: 18px;
    font-weight: 900;
    color: #091141;
  }

  .blurb-text {
    font-size: 14px;
    line-height: 1.1em;
    color: #091141;
  }

  #bubble-section {
    padding: 30px;
  }

  .blurb {
    margin: 10%;
    height: 350px !important;
  }

  h1 {
    font-size: 30px;
  }
}
</style>
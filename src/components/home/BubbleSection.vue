<template>
  <div id="bubble-section">
    <div id="content">
      <div>
        <h1 class="title">With Hercules, you get . . .</h1>
      </div>
      <div class="columns">
        <div class="column blurb">
          <div class="blurb-image hvr-pulse-shrink">
            <!-- <i class="fas fa-cogs fa-5x"></i> -->
            <img src="../../assets/bubble/efficiency.png">
          </div>
          <h2 class="blurb-title">Efficiency</h2>
          <p
            class="blurb-text"
          >Today paper and email invoice errors cost $40-$400 to reconcile. Using Hercules $.01-$1.</p>
        </div>
        <div class="column blurb">
          <div class="blurb-image hvr-pulse-shrink">
            <!-- <i class="fas fa-rocket fa-5x"></i> -->
            <img src="../../assets/bubble/speed.png">
          </div>
          <h2 class="blurb-title">Speed</h2>
          <p
            class="blurb-text"
          >Today a single paper and email invoice processing takes 10.3 days on average to process. Using Hercules: Same Day.</p>
        </div>
        <div class="column blurb">
          <div class="blurb-image hvr-pulse-shrink">
            <!-- <i class="fas fa-balance-scale fa-5x"></i> -->
            <img src="../../assets/bubble/integrity.png">
          </div>
          <h2 class="blurb-title">Integrity</h2>
          <p class="blurb-text">
            Today paper, email and off-chain digital records can
            be easily tampered with. Using Hercules: irrefutable proof of date, time, or
            geolocation can be recorded and stored immutably.
          </p>
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

<style scoped lang="scss">
#bubble-section {
  padding: 50px;
  background-color: $herc-blue;
  border-top: 2px solid $herc-gold;
  border-bottom: 2px solid $herc-gold;
}

#content {
  max-width: 1080px;
  margin: auto;
}

.title {
  color: $herc-gold;
  text-transform: none;
  font-weight: normal;
}

.blurb {
  background-color: #fafafa !important;
  height: 320px !important;
  margin: 3%;
  margin-bottom: auto;
  padding: 20px;
  box-shadow: $herc-shadow;
  border-radius: 5px;
}

h1 {
  @include herc-blue-h1;
  text-align: center;
  margin-bottom: 2%;
  line-height: 1em;
  font-weight: bold;
}

// i {
//   margin: auto;
//   margin-bottom: 50%;
//   color: $herc-gold;
// }

img {
  height: 128px;
  width: 128px;
  margin-bottom: 10%;
}

.blurb-title {
  text-transform: uppercase;
  text-align: center;
  color: $herc-blue;
  font-weight: bold;
  line-height: 1em;
  margin-bottom: 3%;
  font-size: 18px;
}

.blurb-text {
  color: $herc-blue;
  text-align: center;
  line-height: 1.5em;
  font-weight: 900;
  font-size: 14px;
}

#subtitle {
  color: $herc-blue;
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
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  .blurb-title {
    font-size: 18px;
    font-weight: bold;
    color: $herc-blue;
  }

  .blurb-text {
    font-size: 14px;
    line-height: 1.2em;
    color: $herc-blue;
  }

  #bubble-section {
    padding: 100px;
    border-bottom: 0px;
  }

  .columns {
    margin-bottom: 10% !important;
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
    color: $herc-blue;
  }

  .blurb-text {
    font-size: 14px;
    line-height: 1.1em;
    color: $herc-blue;
  }

  #bubble-section {
    padding: 30px;
  }

  .blurb {
    margin: 10%;
    height: 350px !important;
  }
}
</style>
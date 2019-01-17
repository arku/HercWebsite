<template>
  <div id="slider-section">
    <div id="content">
      <h1>
        Get Your
        <span>HERC</span> Tokens Now
      </h1>
      <carousel
        id="mobile-slider"
        class="carousel"
        autoplay
        :per-page="3"
        :pagination-enabled="false"
        :scroll-per-page="false"
        :loop="true"
      >
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/exchanges/idax.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://bit.ly/2Q8fb95" target="_blank">
            <img class="imgSize" src="../../assets/exchanges/latoken.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.fubt.top" target="_blank">
            <img class="imgSize" src="../../assets/exchanges/fubt.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.dobitrade.com/" target="_blank">
            <img class="imgSize" src="../../assets/exchanges/dobi_logo.svg">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://coinmarketcap.com/" target="_blank">
            <img class="imgSize" src="../../assets/exchanges/coin-market-cap-logo.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://coincodex.com/" target="_blank">
            <img class="imgSize" src="../../assets/exchanges/coincodex-light.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.coingecko.com" target="_blank">
            <img class="imgSize" src="../../assets/exchanges/coingecko.png">
          </a>
        </slide>
      </carousel>

      <div id="desktop-slider">
        <div class="columns">
          <div class="column">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../../assets/exchanges/idax.png">
            </a>
          </div>
          <div class="column">
            <a href="https://bit.ly/2Q8fb95" target="_blank">
              <img class="imgSize" src="../../assets/exchanges/latoken.png">
            </a>
          </div>
          <div class="column">
            <a href="https://www.fubt.top" target="_blank">
              <img class="imgSize" src="../../assets/exchanges/fubt.png">
            </a>
          </div>
          <div class="column">
            <a href="https://www.dobitrade.com/" target="_blank">
              <img class="imgSize" src="../../assets/exchanges/dobi_logo.svg">
            </a>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <a href="https://coinmarketcap.com/" target="_blank">
              <img class="imgSize" src="../../assets/exchanges/coin-market-cap-logo.png">
            </a>
          </div>
          <div class="column">
            <a href="https://coincodex.com/" target="_blank">
              <img class="imgSize" src="../../assets/exchanges/coincodex-light.png">
            </a>
          </div>
          <div class="column">
            <a href="https://www.coingecko.com" target="_blank">
              <img class="imgSize" src="../../assets/exchanges/coingecko.png">
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="columns">
        <div class="column">
          <h1 class="spacer">
            <span id="herc">HERC</span> price chart
          </h1>
          <div class="chart">
            <coingecko-coin-compare-chart-widget coin-ids="hercules" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
            <h3>Market Capitalization:</h3>
            <p>{{marketCapitalization}}</p>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
//Import and declare jQuery for component scoped use

// import JQuery from "jquery";
// let $ = JQuery;

import { Carousel, Slide } from "vue-carousel";
export default {
  name: "SliderSection",
  components: {
    Carousel,
    Slide
  }
  // data() {
  //   return {
  //     marketCapitalization: ""
  //   };
  // },
  // methods: {
  //   showInfo() {
  //     const self = this;
  //     $.getJSON("https://chart.anthemgold.com/bi-1.0-SNAPSHOT/Report", function(
  //       data
  //     ) {
  //       self.marketCapitalization = `${data.marketCapitalization}`;
  //     });
  //   }
  // },
  // beforeMount() {
  //   this.showInfo();
  // }
};
</script>

<style scoped lang="scss">
#slider-section {
  padding: 50px;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  @include herc-blue-h1;
  font-weight: bold;
  margin-bottom: 5%;
}

h3 {
  font-weight: bold;
  color: $herc-blue;
}

span {
  color: $herc-gold;
}
.carousel {
  padding-top: 2%;
  padding-bottom: 5%;
}

.imgSize {
  width: 60%;
  margin: auto;
}

.chart {
  width: 90%;
  margin: auto;
  border: 2px solid $herc-gold;
  border-radius: 5px;
  box-shadow: $herc-shadow;
}

#herc {
  color: $herc-gold;
}

.spacer {
  margin-bottom: 2%;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
  #mobile-slider {
    display: none;
  }
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #mobile-slider {
    display: none;
  }
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  #mobile-slider {
    display: none;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  #mobile-slider {
    display: none;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #desktop-slider {
    display: none;
  }

  #slider-section {
    padding: 20px;
  }

  #slide-container {
    margin: auto;
  }

  .imgSize {
    width: 60%;
  }

  h1 {
    margin-bottom: 15%;
  }

  #mobile-slider {
    display: inherit;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

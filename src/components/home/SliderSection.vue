<template>
  <div id="slider-section">
    <div id="content">
      <h1>Get Your
        <span>HERC</span> Tokens Now
      </h1>
      <!-- <carousel
            class="carousel"
            autoplay
            :per-page="3"
            :pagination-enabled="false"
            :scroll-per-page="false"
            :loop="true">
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
            <a href="https://sistemkoin.com/" target="_blank">
              <img class="imgSize" src="../../assets/exchanges/sistemkoin.png">
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
      </carousel>-->
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
          <a href="https://sistemkoin.com/" target="_blank">
            <img class="imgSize" src="../../assets/exchanges/sistemkoin.png">
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
  </div>
</template>

<script>
// import { Carousel, Slide } from "vue-carousel";
export default {
  name: "SliderSection"
  // components: {
  //   Carousel,
  //   Slide
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
  #slide-container {
    margin: auto;
  }

  .imgSize {
    width: 60%;
  }

  h1{
    margin-bottom: 15%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

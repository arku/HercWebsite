<template>
    <div id="slider-section">
      <div id="content">
        <h1>Trade <span>HERC</span> tokens now</h1>
        <carousel
            class="carousel"
            autoplay
            :per-page="3"
            :pagination-enabled="false"
            :scroll-per-page="false"
            :loop="true">
          <slide class="slide-container">
            <a href="https://www.idax.mn" target="_blank">
              <img class="imgSize" src="../assets/exchanges/idax.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://bit.ly/2Q8fb95" target="_blank">
              <img class="imgSize" src="../assets/exchanges/latoken.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.fubt.top" target="_blank">
              <img class="imgSize" src="../assets/exchanges/fubt.png">
            </a>
          </slide>
        </carousel>
      </div>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "SliderSection",
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
#slider-section {
  padding: 50px;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  font-size: 30px;
  color: #091141;
  font-weight: bold;
  margin-bottom: 5%;
}

span {
  color: #f3c736;
}
.carousel {
  padding-top: 2%;
  padding-bottom: 5%;
}

.imgSize {
  width: 40%;
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
  #slider-section {
    padding: 10px;
    padding-top: 50px;
  }

  #slide-container {
    margin: auto;
  }

  .imgSize {
    width: 80%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

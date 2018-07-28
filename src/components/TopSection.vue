<template>
    <div id="top-section">
        <div id="content">
            <div>
                <h1>DECENTRALIZED SUPPLY CHAIN<br> MANAGEMENT SOFTWARE</h1>
            </div>
            <div>
                <h3>Leave Your Email to Stay <br> Updated With Latest News!</h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "TopSection"
};
</script>
<style scoped>
#top-section {
  background-image: url("../assets/cubes.png");
  background-blend-mode: color-burn;
  background-size: initial;
  background-position: bottom left;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
  height: 80vh;
}

h1 {
  font-size: 45px;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

h3{
    text-transform: uppercase;
    font-weight: 100;
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
  h1 {
    padding-top: 80px;
    padding-bottom: 80px;
    font-size: 40px;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 30px;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 30px;
  }
}
</style>
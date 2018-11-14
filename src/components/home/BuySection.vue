<template>
    <div id="buy-section">
        <div id="content">
            <h1>Buy <span>HERC</span> now!</h1>
            <a href="https://purchase.herc.one">
                <img src="../../assets/pillar-only-small.gif">
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: "BuySection"
};
</script>

<style scoped>
#buy-section {
  padding: 50px;
  background-color: #091141;
  background-image: url("../../assets/HERC_BKG_v2_blue.png");
  background-size: cover;
  background-position: center;
  border-top: 5px solid #091141;
  border-bottom: 5px solid #f3c736;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  color: white;
  font-size: 30px;
  margin-bottom: 5%;
  text-shadow: 1px 1px black;
}

span {
  color: #f3c736;
  font-weight: bold;
}

img {
  width: 20%;
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
  img {
    width: 80%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

<template>
    <div id="hiw-section">
        <div id="content">
             <div>
                <h1>How it Works</h1>
            </div>
              <!-- <iframe width="90%" height="515" src="https://www.youtube.com/embed/177Ub1YUdgQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
              <video controls poster="../assets/hiw.png">
                <source src="../assets/steve.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
        </div>
    </div>
</template>

<script>
export default {
  name: "HiwSection"
};
</script>

<style scoped>
#hiw-section {
  padding: 50px;
  background-color: #091141;
  padding-top: 0px;
}

h1 {
  font-size: 40px;
  color: #f3c736;
  font-weight: bold;
  margin-bottom: 5%;
}

video {
  width: 80%;
  border: 2px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
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
    h1{
        font-size: 30px;
    }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

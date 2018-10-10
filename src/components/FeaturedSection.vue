<template>
    <div id="featured-section">
        <div id="content">
            <h1>As featured on:</h1>
            <div class="columns">
              <div class="column">
                <a href="https://www.bloomberg.com/europe" target="_blank">
                  <img src="../assets/partners/bloomberg.png">
                </a>
              </div>
              <div class="column">
                <a href="https://www.tdameritrade.com/home.page" target="_blank">
                  <img src="../assets/partners/amtd.png">
                </a>
              </div>
              <div class="column">
                <a href="https://www.americanbanker.com/" target="_blank">
                  <img src="../assets/partners/americanbanker.png">
                </a>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "FeaturedSection"
};
</script>
<style scoped>
#featured-section {
  padding: 50px;
  padding-left: 150px;
  padding-right: 150px;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  font-size: 30px;
  text-align: center;
  color: gray;
  text-transform: uppercase;
  margin-bottom: 5%;
  font-weight: bold;
}

img {
  opacity: 0.7;
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
  #featured-section {
    padding: 50px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
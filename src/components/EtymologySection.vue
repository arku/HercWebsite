<template>
    <div id="etymology-section">
        <div id="content">
            <div>
                <h1>Etymology of Herc</h1>
            </div>
            <div class="columns">
               <div class="column blurb">
                  <img class="blurb-image image is-128x128" src="../assets/check-circle.png">
                  <h2 class="blurb-title">Helping</h2>
               </div>
               <div class="column blurb">
                  <img class="blurb-image image is-128x128" src="../assets/check-circle.png">
                  <h2 class="blurb-title">Eradicate</h2>
               </div>
               <div class="column blurb">
                  <img class="blurb-image image is-128x128" src="../assets/check-circle.png">
                  <h2 class="blurb-title">Racketeering</h2>
               </div>
               <div class="column blurb">
                  <img class="blurb-image image is-128x128" src="../assets/check-circle.png">
                  <h2 class="blurb-title">Collusion</h2>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "EtymologySection"
};
</script>

<style scoped>
#etymology-section {
  padding: 50px;
}

h1 {
  font-size: 45px;
  text-align: center;
  color: #f3c736;
  text-transform: uppercase;
  margin-bottom: 50px;
}

.blurb {
  background-color: #fafafa !important;
  box-shadow: 0px 12px 18px -6px #000;
  border-width: 1px !important;
  border: 1px solid #f3c736;
  margin: 2%;
  margin-bottom: auto;
  padding: 20px;
}

.blurb-image {
  margin: auto;
  margin-bottom: 10%;
}

.blurb-title {
  text-transform: uppercase;
  text-align: center;
  color: #091141;
  font-weight: 900;
  line-height: 1em;
  margin-bottom: 3%;
  font-size: 18px;
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
    font-size: 40px;
  }

  .blurb-title {
    font-size: 15px;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    font-size: 30px;
  }

  .blurb-title {
    font-size: 18px;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
  }
}
</style>

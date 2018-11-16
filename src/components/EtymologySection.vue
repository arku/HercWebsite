<template>
    <div id="etymology-section">
        <div id="content">
            <div>
                <h1>The Definition</h1>
            </div>
            <div class="columns">
               <div class="column blurb">
                  <img class="blurb-image image" src="../assets/etymology/h.png">
                  <h2 class="blurb-title">Helping</h2>
               </div>
               <div class="column blurb">
                  <img class="blurb-image image" src="../assets/etymology/e.png">
                  <h2 class="blurb-title">Eradicate</h2>
               </div>
               <div class="column blurb">
                  <img class="blurb-image image" src="../assets/etymology/r.png">
                  <h2 class="blurb-title">Racketeering</h2>
               </div>
               <div class="column blurb">
                  <img class="blurb-image image" src="../assets/etymology/c.png">
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

<style scoped lang="scss">
#etymology-section {
  padding: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
}

h1 {
  font-size: 45px;
  text-align: center;
  color: $herc-blue;
  text-transform: uppercase;
  margin-bottom: 5%;
  line-height: 1em;
  font-weight: bold;
}

.blurb-title {
  text-transform: uppercase;
  text-align: center;
  /* color: #f3c736; */
  color: $herc-blue;
  font-weight: 900;
  line-height: 1em;
  margin-bottom: 3%;
  font-size: 18px;
}

img {
  border-radius: 50%;
  -webkit-transition: -webkit-transform 0.8s ease-in-out;
  -ms-transition: -ms-transform 0.8s ease-in-out;
  transition: transform 0.8s ease-in-out;
}
img:hover {
  transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}

/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #etymology-section {
    padding: 150px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}

/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  #etymology-section {
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  h1 {
    font-size: 40px;
  }

  .blurb-title {
    font-size: 15px;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #etymology-section {
    padding: 150px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  h1 {
    font-size: 30px;
  }

  .blurb-title {
    font-size: 18px;
  }

  img {
    height: 50%;
    width: 50%;
    margin: auto;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
  }

  #etymology-section {
    padding: 50px;
  }
}
</style>

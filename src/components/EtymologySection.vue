<template>
    <div id="etymology-section">
        <div id="content">
            <div>
                <h1>Etymology of Herc</h1>
            </div>
            <div class="columns">
               <div class="column blurb">
                  <img class="blurb-image" src="../assets/check-circle.png">
                  <h2 class="blurb-title">Helping</h2>
               </div>
               <div class="column blurb">
                  <img class="blurb-image" src="../assets/check-circle.png">
                  <h2 class="blurb-title">Eradicate</h2>
               </div>
               <div class="column blurb">
                  <img class="blurb-image" src="../assets/check-circle.png">
                  <h2 class="blurb-title">Racketeering</h2>
               </div>
               <div class="column blurb">
                  <img class="blurb-image" src="../assets/check-circle.png">
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
  box-shadow: 0px 12px 18px -15px #000 !important;
  border-width: 1px !important;
  border: 1px solid #f3c736;
  border-radius: 5px;
  margin: 5%;
  margin-bottom: auto;
  padding: 20px;
  width: 50px;
}

.blurb-image {
  width: 100%;
  margin: auto;
  margin-bottom: 10%;
}

.blurb-title {
  text-transform: uppercase;
  text-align: center;
  color: #091141;
  font-weight: 700;
  line-height: 1em;
  margin-bottom: 3%;
  font-size: 18px;
}

.blurb-text {
  color: #091141;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.5em;
  font-weight: 700;
  font-size: 11px;
}
</style>

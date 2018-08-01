<template>
    <div id="blurb-section">
        <div id="content">
            <div class="columns">
                <div class="column blurb">
                    <div class="image is-128x128 blurb-image">
                        <img src="../assets/blurb/blockchain.png">
                    </div>
                    <h2 class="blurb-title">A new era in supply chain ecosystems</h2>
                    <p class="blurb-text">From Agri-Food to Technology value chains, HERC can be used for any physical interchangeable item and any entity type of organization in virtually any local, regional, or Global Value Chain.</p>
                </div>
                <div class="column blurb">
                    <div class="image is-128x128 blurb-image">
                        <img src="../assets/blurb/weight-balance.png">
                    </div>
                    <h2 class="blurb-title">100% Provable, <br>24-hours a day</h2>
                    <p class="blurb-text">Enabling transparent and efficient supply chain management functions.</p>
                </div>
                <div class="column blurb">
                    <div class="image is-128x128 blurb-image">
                        <img src="../assets/blurb/research.png">
                    </div>
                    <h2 class="blurb-title">Measure, Verify , Track</h2>
                    <p class="blurb-text">Blockchain software for tracking physical inventory in a Supply Chain with a digital source to store and review verification information.</p>
                </div>
            </div>
            <div class="columns">
                <div class="column blurb">
                    <div class="image is-128x128 blurb-image">
                        <img src="../assets/blurb/decentralized.png">
                    </div>
                    <h2 class="blurb-title">Dedicated to decentralized distribution</h2>
                    <p class="blurb-text">A robust ecosystem for entities dedicated to decentralized distribution and attaining effective supply chain planning production for commodities.</p>
                </div>
                <div class="column blurb">
                    <div class="image is-128x128 blurb-image">
                        <img src="../assets/blurb/innovation.png">
                    </div>
                    <h2 class="blurb-title">Revolutionizing the global value chain</h2>
                    <p class="blurb-text">HERC helps to create a more secure and streamlined ecosystem and is the easiest way to verify supply chain items and proving their existence, possession, storage and insurance in crypto units.</p>
                </div>
                <div class="column blurb">
                    <div class="image is-128x128 blurb-image">
                        <img src="../assets/blurb/corruption.png">
                    </div>
                    <h2 class="blurb-title">Helping Eradicate Racketeering & Collusion</h2>
                    <p class="blurb-text">Empowering & entrusting the public with control of the Global Value Chain.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "BlurbSection"
};
</script>

<style scoped>
#blurb-section {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
}

.blurb {
  background-color: #fafafa !important;
  height: 350px !important;
  box-shadow: 0px 12px 18px -15px #000 !important;
  border-width: 1px !important;
  border: 1px solid #f3c736;
  margin: 5%;
  margin-bottom: auto;
  padding: 20px;
  
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
  .blurb-title {
    font-size: 10px;
  }

  .blurb{
      margin: 2%;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  .blurb-title {
    font-size: 10px;
  }

  .columns{
    margin-bottom: 10% !important;
}
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  .blurb-title {
    font-size: 10px;
  }
}
</style>


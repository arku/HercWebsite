<template>
    <div id="blurb-section">
        <div id="content">
            <div class="columns">
                <div class="column blurb">
                    <div class="blurb-image">
                        <img src="../assets/blurb/1.png" class="image is-128x128">
                    </div>
                    <h2 class="blurb-title">A new era in supply chain ecosystems</h2>
                    <p class="blurb-text">From Agri-Food to Technology value chains, HERC can be used for any physical interchangeable item and any entity type of organization in virtually any local, regional, or Global Value Chain.</p>
                </div>
                <div class="column blurb">
                    <div class="blurb-image">
                        <img src="../assets/blurb/2.png" class="image is-128x128">
                    </div>
                    <h2 class="blurb-title">100% Provable, <br>24-hours a day</h2>
                    <p class="blurb-text">Enabling transparent and efficient supply chain management functions.</p>
                </div>
                <div class="column blurb">
                    <div class="blurb-image">
                        <img src="../assets/blurb/3.png" class="image is-128x128">
                    </div>
                    <h2 class="blurb-title">Measure, Verify , Track</h2>
                    <p class="blurb-text">Blockchain software for tracking physical inventory in a Supply Chain with a digital source to store and review verification information.</p>
                </div>
            </div>
            <div class="columns">
                <div class="column blurb">
                    <div class="blurb-image">
                        <img src="../assets/blurb/4.png" class="image is-128x128">
                    </div>
                    <h2 class="blurb-title">Dedicated to decentralized distribution</h2>
                    <p class="blurb-text">A robust ecosystem for entities dedicated to decentralized distribution and attaining effective supply chain planning production for commodities.</p>
                </div>
                <div class="column blurb">
                    <div class="blurb-image">
                        <img src="../assets/blurb/5.png" class="image is-128x128">
                    </div>
                    <h2 class="blurb-title">Revolutionizing the global value chain</h2>
                    <p class="blurb-text">HERC helps to create a more secure and streamlined ecosystem and is the easiest way to verify supply chain items and proving their existence, possession, storage and insurance in crypto units.</p>
                </div>
                <div class="column blurb">
                    <div class="blurb-image">
                        <img src="../assets/blurb/6.png" class="image is-128x128">
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
  padding-left: 200px;
  padding-right: 200px;
}

.blurb {
  background-color: #fafafa !important;
  height: 320px !important;
  box-shadow: 0px 12px 18px -6px #000;
  border-width: 1px !important;
  border: 1px solid #f3c736;
  margin: 3%;
  margin-bottom: auto;
  padding: 10px;
}

img {
  margin: auto;
  margin-bottom: 10%;
}

.blurb-title {
  text-transform: uppercase;
  text-align: center;
  color: #091141;
  font-weight: bold;
  line-height: 1em;
  margin-bottom: 3%;
  font-size: 18px;
}

.blurb-text {
  color: #091141;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.5em;
  font-weight: 900;
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
    font-size: 16px;
    font-weight: bold;
  }

  .blurb-text {
    line-height: 1.1em;
  }

  .blurb {
    margin: 2%;
  }

  #blurb-section{
    padding: 50px;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  .blurb-title {
    font-size: 18px;
    font-weight: bold;
    color: #f3c736;
  }

  .blurb-text {
    font-size: 14px;
    line-height: 1.2em;
    color: #f3c736;
  }

  #blurb-section {
    padding: 100px;
    padding-bottom: 0px;
  }

  .columns {
    margin-bottom: 10% !important;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  .blurb-title {
    font-size: 18px;
    font-weight: 900;
    color: #f3c736;
  }

  .blurb-text {
    font-size: 14px;
    line-height: 1.1em;
    color: #f3c736;
  }

  #blurb-section {
    padding: 30px;
    padding-bottom: 0px;
  }

  .blurb {
    margin: 10%;
    height: 350px !important;
  }
}
</style>


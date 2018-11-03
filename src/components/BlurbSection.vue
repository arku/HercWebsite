<template>
    <div id="blurb-section">
        <div id="content">
          <div>
            <h1>HERC means:</h1>
            <p id="subtitle">Helping Eradicate Racketeering Collusion</p>
          </div>
            <div class="columns">
                <div class="column blurb">
                    <div class="blurb-image hvr-pulse-shrink">
                        <img src="../assets/blurb/1.png" class="image is-128x128">
                    </div>
                    <h2 class="blurb-title">The Platform</h2>
                    <p class="blurb-text">From Agri-Food to Technology value chains, HERC can be used for any physical interchangeable item and any entity type of organization in virtually any local, regional, or Global Value Chain.</p>
                </div>
                <div class="column blurb"> 
                    <div class="blurb-image hvr-pulse-shrink">
                        <img src="../assets/blurb/2.png" class="image is-128x128">
                    </div>
                    <h2 class="blurb-title">The Token</h2>
                    <p class="blurb-text">Enabling transparent and efficient supply chain management functions.</p>
                </div>
                <div class="column blurb">
                    <div class="blurb-image hvr-pulse-shrink">
                        <img src="../assets/blurb/3.png" class="image is-128x128">
                    </div>
                    <h2 class="blurb-title">Token Metrics</h2>
                    <p class="blurb-text">Blockchain software for tracking physical inventory in a Supply Chain with a digital source to store and review verification information.</p>
                </div>
            </div>
            <div class="columns">
                <div class="column blurb">
                    <div class="blurb-image hvr-pulse-shrink">
                        <img src="../assets/blurb/4.png" class="image is-128x128">
                    </div>
                    <h2 class="blurb-title">Use Case</h2>
                    <p class="blurb-text">A robust ecosystem for entities dedicated to decentralized distribution and attaining effective supply chain planning production for commodities.</p>
                </div>
                <div class="column blurb">
                    <div class="blurb-image hvr-pulse-shrink">
                        <img src="../assets/blurb/5.png" class="image is-128x128">
                    </div>
                    <h2 class="blurb-title">Costs and Technical Breakdown</h2>
                    <p class="blurb-text">HERC helps to create a more secure and streamlined ecosystem and is the easiest way to verify supply chain items and proving their existence, possession, storage and insurance in crypto units.</p>
                </div>
                <div class="column blurb">
                    <div class="blurb-image hvr-pulse-shrink">
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
  padding-left: 150px;
  padding-right: 150px;
}

#content {
  max-width: 1080px;
  margin: auto;
}

.blurb {
  background-color: #fafafa !important;
  height: 350px !important;
  margin: 3%;
  margin-bottom: auto;
  padding: 10px;
  border: 4px solid #f3c736;
  border-radius: 5px;
}

.blurb:hover {
  box-shadow: 0px 12px 18px -6px #000;
}

h1 {
  font-size: 30px;
  text-align: center;
  color: #091141;
  text-transform: uppercase;
  line-height: 1em;
  font-weight: bold;
}

img {
  margin: auto;
  margin-bottom: 10%;
}

#section-logo {
  margin-bottom: 1%;
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
  /* text-transform: uppercase; */
  line-height: 1.5em;
  font-weight: 900;
  font-size: 14px;
}

#subtitle {
  color: #091141;
  margin-bottom: 2%;
  font-size: 24px;
}

/* Pulse Shrink */
@-webkit-keyframes hvr-pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
@keyframes hvr-pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
.hvr-pulse-shrink {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-animation-name: hvr-pulse-shrink;
  animation-name: hvr-pulse-shrink;
  -webkit-animation-duration: 0.3s;
  animation-duration: 1.9s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}

/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #blurb-section {
    padding-right: 10px;
    padding-left: 10px;
    margin: auto;
  }
}

@media all and (max-width: 1099px) {
  .blurb-title {
    font-size: 16px;
    font-weight: bold;
  }

  .blurb-text {
    line-height: 1.1em;
  }
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

  #blurb-section {
    padding: 50px;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  .blurb-title {
    font-size: 18px;
    font-weight: bold;
    color: #091141;
  }

  .blurb-text {
    font-size: 14px;
    line-height: 1.2em;
    color: #091141;
  }

  #blurb-section {
    padding: 100px;
    padding-bottom: 0px;
  }

  .columns {
    margin-bottom: 10% !important;
  }

  #subtitle {
    margin-bottom: 5%;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  .blurb-title {
    font-size: 18px;
    font-weight: 900;
    color: #091141;
  }

  .blurb-text {
    font-size: 14px;
    line-height: 1.1em;
    color: #091141;
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


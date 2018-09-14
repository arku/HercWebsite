<template>
    <div id="ecosystem-section">
        <div id="content">
            <div>
                <h1>The HERC Ecosystem</h1>
                <p>HERC is designed to serve the 400+ million online users who
                     already collect, buy and sell digital items.</p>
            </div>
            <div id="tabs-buefy">
              <b-tabs type="is-toggle" expanded class="gradient">
                <b-tab-item label="Asset Creator" icon="sitemap" class="item-content">
                  <h2>Create you own Supply Chain Assets</h2>
                  <p>By entering shipment information into Hercules, business owners can save significant
                    costs by guaranteeing the data integrity of their supply chains.
                  </p>
                </b-tab-item>
                <b-tab-item label="Originator" icon="user">
                  <h2>Oversee your supply chain with perfection</h2>
                  <p>
                    HERC enables a new generation of business owners with complete data
                    integrity solution with per use pricing for every budget
                  </p>
                </b-tab-item>
                <b-tab-item label="Recipient" icon="hand-holding-heart">
                  <h2>Oversee the Goods Received by Your Supply Chain</h2>
                  <p>Receive goods with gaurenteed chain of custody providing data integrity along with the supply chain, minimise
                     transport - related disputes and maximise logistical efficiencies</p>
                </b-tab-item>
                <b-tab-item label="Validating Gamer" icon="gamepad">
                  <h2>Play HIPR Games, Get HERC Token Rewards</h2>
                  <p>Online gamers play puzzle type games and receive HERC token rewards for their human actions that in turn
                     provide Proof of Human Work secuirty for the Hercules Blockchain.</p>
                </b-tab-item>
              </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "EcosystemSection"
};
</script>

<style scoped>
#ecosystem-section {
  padding: 50px;
  padding-left: 200px;
  padding-right: 200px;
}

h1 {
  font-size: 40px;
  color: #091141;
  font-weight: bold;
}

h2 {
  font-size: 30px;
  color: #091141;
  font-weight: bold;
  margin-bottom: 5%;
}

p {
  color: #091141;
  margin-bottom: 5%;
}

.gradient {
  background-image: linear-gradient(white, #fafafa, white);
}

/* Pop */
@-webkit-keyframes tabHeader {
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
@keyframes tabHeader {
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

.tabHeader:hover {
  -webkit-animation-name: tabHeader;
  animation-name: tabHeader;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

#tabs-buefy {
  width: 70%;
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
  #ecosystem-section {
    padding: 50px;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  #ecosystem-section {
    padding: 50px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    font-size: 30px;
    line-height: 1.2em;
  }
  #tabs-buefy {
    width: 100%;
  }

  h2 {
    font-size: 24px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

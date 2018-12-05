<template>
<div id="triangle-divider">
  <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100"
      viewBox="0 0 100 102"
      preserveAspectRatio="none"
    >
      <path d="M100 60 L100 30 L0 100 Z"></path>
    </svg>
  <div id="the-roadmap-section">
    <div id="content"></div>
    <h1>Roadmap</h1>
    <h2>Click to expand</h2>
    <h6>2018</h6>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q3 2018</h3>
          <h4 class="completed">
            Completed
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>MVP HERC / AGLD DEVELOPMENT</h5>
        </div>
      </b-collapse>
    </div>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q4 2018</h3>
          <h4 class="completed">
            Completed
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>HERC Launch & Stabilization</h5>
        </div>
      </b-collapse>
    </div>
    <h6>2019</h6>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q1 2019</h3>
          <h4>
            In progress
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>
            <i class="fas fa-code"></i> Mintable asset tokens m[AT]
          </h5>
          <h5>
            <i class="fas fa-code"></i> HERC IGVC Registry
          </h5>
          <h5>
            <i class="fas fa-code"></i> Multichain Explorer
          </h5>
          <h5>
            <i class="fas fa-code"></i> Permissionless censorship resistant marketplace ALPHA
          </h5>
          <h5>
            <i class="fas fa-code"></i> Bug Bounty
          </h5>
        </div>
      </b-collapse>
    </div>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q2 2019</h3>
          <h4>
            In progress
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>
            <i class="fas fa-code"></i> Extended Vertical Pilots
          </h5>
          <h5>
            <i class="fas fa-code"></i> Permissionless censorship resistant asset marketplace public beta
          </h5>
          <h5>
            <i class="fas fa-code"></i> HERC Hackathon
          </h5>
          <h5>
            <i class="fas fa-code"></i> HIPR Engine Relayer ALPHA
          </h5>
          <h5>
            <i class="fas fa-code"></i> Beyond Inventory
          </h5>
        </div>
      </b-collapse>
    </div>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q3 2019</h3>
          <h4>
            In progress
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>
            <i class="fas fa-code"></i> HERC Terminal Operating System Private Beta
          </h5>
          <h5>
            <i class="fas fa-code"></i> Port to Port IoT data integrity pilot
          </h5>
          <h5>
            <i class="fas fa-code"></i> HIPR Engine Relayer Public Beta
          </h5>
          <h5>
            <i class="fas fa-code"></i> HIPR Engine Relayer Public Beta & HERCade Buildout
          </h5>
        </div>
      </b-collapse>
    </div>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q4 2019</h3>
          <h4>
            In progress
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>
            <i class="fas fa-code"></i> HERC Ground Control Payload Pilot
          </h5>
          <h5>
            <i class="fas fa-code"></i> Permissionless censorship resistant asset marketplace v1.0
          </h5>
          <h5>
            <i class="fas fa-code"></i> HIPR Engine Relayer v1.0
          </h5>
          <h5>
            <i class="fas fa-code"></i> HIPR GoCube Beta
          </h5>
        </div>
      </b-collapse>
    </div>
    <h6>2020</h6>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q1 2020</h3>
          <h4>
            In progress
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>
            <i class="fas fa-code"></i> Digital viewer v2: AR/VR NFTS
          </h5>
          <h5>
            <i class="fas fa-code"></i> HIPR HERCade Nintendo Switch Port
          </h5>
          <h5>
            <i class="fas fa-code"></i> Measure, Verify, Track: The Story of HERC
          </h5>
          <h5>
            <i class="fas fa-code"></i> HERC-ID Self Soverign Bio-Verification
          </h5>
        </div>
      </b-collapse>
    </div>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q2 2020</h3>
          <h4>
            In progress
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>
            <i class="fas fa-code"></i> HERC Terminal OS v2.0
          </h5>
          <h5>
            <i class="fas fa-code"></i> Extended IoT Pilots
          </h5>
          <h5>
            <i class="fas fa-code"></i> HERC Ground Control Payload Pilot 2
          </h5>
          <h5>
            <i class="fas fa-code"></i> Olympic Prep "Tokyo Bay Pilot"
          </h5>
        </div>
      </b-collapse>
    </div>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q3 2020</h3>
          <h4>
            In progress
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>
            <i class="fas fa-code"></i> Tokyo Bay Pilot at Olympics 2020
          </h5>
          <h5>
            <i class="fas fa-code"></i> HERC Messier 13 Stage
          </h5>
          <h5>
            <i class="fas fa-code"></i> Intergalactic Value Chains Pilot
          </h5>
          <h5>
            <i class="fas fa-code"></i> HERC-Strong RFID/NFC/QR Container Locks
          </h5>
        </div>
      </b-collapse>
    </div>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q4 2020</h3>
          <h4>
            In progress
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>
            <i class="fas fa-code"></i> Global Hackathon
          </h5>
          <h5>
            <i class="fas fa-code"></i> Cross Border Bug Bounty
          </h5>
          <h5>
            <i class="fas fa-code"></i> Geo Orbital Positioning "Send it up here, bring it down there" Pilot
          </h5>
          <h5>
            <i class="fas fa-code"></i> Waste Management & Resource Recycling Pilot
          </h5>
        </div>
      </b-collapse>
    </div>
    <h6>2021</h6>
    <div>
      <b-collapse :open="false" id="job-holder">
        <div slot="trigger" class="question">
          <h3>Q1 2021</h3>
          <h4>
            In progress
            <i class="far fa-check-square"></i>
          </h4>
        </div>
        <div class="notification answer">
          <h5>
            <i class="fas fa-code"></i> HERC The DAO
          </h5>
          <h5>
            <i class="fas fa-code"></i> Orcalized AI Governance Integration
          </h5>
          <h5>
            <i class="fas fa-code"></i> HIPR Engine Relayer Cross Chain Bridge
          </h5>
          <h5>
            <i class="fas fa-code"></i> Community Developer managed repos from HERC Improvement Proposal Follow Through
          </h5>
        </div>
      </b-collapse>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "TheRoadmapSection"
};
</script>

<style scoped lang="scss">
#triangle-divider {
  pointer-events: none;
  background-color: #fafafa;
}

#triangle-divider path {
  fill: $herc-blue;
  stroke: $herc-blue;
  stroke-width: 2;
}
#the-roadmap-section {
  padding: 50px;
  background-color: #fafafa;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  @include herc-blue-h1;
  font-weight: bold;
  margin: 0;
}

h2 {
  font-size: 16px;
  color: #808080;
  margin-bottom: 5%;
}
h3 {
  color: $herc-gold;
  font-size: 24px;
}
h4 {
  color: #fafafa;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
}

h5 {
  font-weight: bold;
  text-transform: uppercase;
}

h6 {
  color: $herc-gold;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 1px 1px $herc-blue;
}

#job-holder {
  margin-bottom: 2%;
}

.center-element {
  text-align: center;
}

.question {
  width: 40%;
  margin: auto;
  border: 2px solid $herc-gold;
  color: $herc-gold;
  text-transform: uppercase;
  background-color: $herc-blue;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  box-shadow: $herc-shadow;
  border-radius: 5px;
}
.answer {
  width: 40%;
  margin: auto;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 2px solid $herc-gold;
  background-color: #fafafa;
  text-align: left;
  color: $herc-blue;
  box-shadow: $herc-shadow;
}

.accordian-holder {
  margin: auto;
}

.completed {
  color: green;
  font-style: italic;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  .question,
  .answer {
    width: 60%;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  .question,
  .answer {
    width: 100%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

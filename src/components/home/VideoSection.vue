<template>
  <div id="video-section">
      <div id="content">
        <h1>How Hercules Works Using Human Initiated Performance Reporting (HIPR)</h1>
        <img src="../../assets/diagram.png" id="diagram">
        <div class="columns blurbs-holder">
          <div class="column blurb">
            <img src="../../assets/bubble/Icon1_key.png" class="hvr-pulse-shrink">
            <p>From a technology standpoint, HIPR implements steganography, an age old cryptography process
                to encrypt the supply chain metrics into the puzzles the humans perform to validation of chain
                  data integrity.
            </p>
          </div>
          <div class="column blurb">
            <img src="../../assets/bubble/Icon2_PoHW.png" class="hvr-pulse-shrink">
            <p>As a more secure and newly implemented Consensus model, Proof of Human Work does not waste
                electricity and resource to validate transactions. Leveraging the intuition of the Human Brain
                  and incentivising good actors in the network is our way of protecting against malicious attacks.
            </p>
          </div>
        </div>
        <div class="columns blurbs-holder">
          <div class="column blurb">
            <img src="../../assets/bubble/Icon4_Game.png" class="hvr-pulse-shrink">
              <p> HIPR is built Unity3D, with C# and Solidity while targeting WebGl, NEthereum for Web3 connectivity.
          From market research we have found this Consensus model is 90% more efficient as we scale in HIPR
            players because more we entertain our community the more integrious our chain data becomes. </p>
          </div>
          <div class="column blurb">
            <img src="../../assets/bubble/Icon3_HIPR.png" class="hvr-pulse-shrink">
            <p>
          Other blockchain projects with similar use cases have only considered private permissioned blockchain technology as a means to scale. 
          We believe Proof of Human Work will revolutionize the way projects can scale on public blockchain.
          At 0.001$/kb indexed HERC is >98%+ more cost efficient when compared to Hyperledger's $1000$/month/node model.
          HERC's protocol consensus model has built-in pay per supply chain movement.</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "VideoSection"
};
</script>

<style scoped>
#video-section {
  padding: 50px;
  border-top: 2px solid #f3c736;
  border-bottom: 2px solid #f3c736;
  background-color: #091141;
}

#content {
  max-width: 1080px;
  margin: auto;
}

.blurbs-holder {
  padding-left: 100px !important;
  padding-right: 100px !important;
}

h1 {
  font-size: 30px;
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}

.blurb {
  background-color: #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
  padding: 30px;
  margin: 2% !important;
}

p {
  text-align: center;
  font-weight: bold;
  margin-bottom: 1%;
  color: #091141;
}

.columns {
  background-color: #f3c736;
}

img {
  width: 40%;
}

#diagram {
  width: 70%;
}

/* * Pulse Shrink */

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
  #video-section {
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  #video-section {
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

#diagram-holder {
  width: 100%;
}

/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  #video-section {
    padding: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .blurbs-holder {
    padding: 0 !important;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #video-section {
    padding: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .blurbs-holder {
    padding: 0 !important;
  }

  #diagram {
    width: 90%;
    margin-bottom: 10%;
  }
}

.blurb {
  margin: 5%;
}

.columns {
  padding: 10px;
  background-color: transparent;
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1{
    font-size: 22px;
    line-height: 1.2em;
  }
}
</style>
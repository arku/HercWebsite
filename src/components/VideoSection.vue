<template>
    <div id="video-section">
        <div id="content">
            <div>
                <h1>How it Works</h1>
            </div>
              <!-- <iframe width="90%" height="515" src="https://www.youtube.com/embed/177Ub1YUdgQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
              <video controls poster="../assets/hiw.png">
                <source src="../assets/steve.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <div>
                <h1>How Hercules Works Using Human Initiated Performance Reporting (HIPR)</h1>
                <div id="diagram-holder">
                  <img src="../assets/diagram.png">
                </div>
                <div class="columns">
                  <div class="column blurb">
                    <p>From a technology standpoint, HIPR implements steganography, an age old cryptography process
                      to encrypt the supply chain metrics into the puzzles the humans perform to validation of chain
                        data integrity.
                    </p>
                  </div>
                  <div class="column blurb">
                    <p>
                      As a more secure and newly implemented Consensus model, Proof of Human Work does not waste
                      electricity and resource to validate transactions. Leveraging the intuition of the Human Brain
                        and incentivising good actors in the network is our way of protecting against malicious attacks.
                    </p>
                  </div>
                </div>
                <div class="columns">
                  <div class="column blurb">
                    <p> HIPR is built Unity3D, with C# and Solidity while targeting WebGl, NEthereum for Web3 connectivity.
                From market research we have found this Consensus model is 90% more efficient as we scale in HIPR
                 players because more we entertain our community the more integrious our chain data becomes. </p>
                 </div>
                 <div class="column blurb">
                 <p>
                Other blockchain projects with similar use cases have only considered private permissioned blockchain technology as a means to scale. 
                We believe Proof of Human Work will revolutionize the way projects can scale on public blockchain.
                At 0.001$/kb indexed HERC is >98%+ more cost efficient when compared to Hyperledger's $1000$/month/node model.
                HERC's protocol consensus model has built in pay per supply chain movement.</p>
                </div>
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
  padding: 150px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: 2px solid #f3c736;
  border-bottom: 2px solid #f3c736;
  background-color: #091141;
}

h1 {
  font-size: 45px;
  text-align: center;
  color: #f3c736;
  text-transform: uppercase;
  margin-bottom: 5%;
  font-weight: bold;
}

.blurb {
  background-color: #f3c736;
  margin: 2%;
  box-shadow: 0px 12px 18px -6px #000;
  padding: 50px;
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

/* iframe {
  box-shadow: 0px 12px 18px -6px #000;
  border: 1px solid #f3c736;
  margin-bottom: 5%;
} */

video {
  width: 90%;
  /* height: 515px; */
  box-shadow: 0px 12px 18px -6px #000;
  border: 1px solid #f3c736;
  margin-bottom: 5%;
}

img {
  transition: transform 2s;
}

img:hover {
  transform: scale(1.1);
}

#diagram-holder {
  background-color: #fafafa;
  width: 90%;
  border: 2px solid #f3c736;
  margin: auto;
  box-shadow: 0px 12px 18px -6px #000;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
  /* iframe {
    height: 600px;
  } */
}

/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  /* iframe {
    height: 500px;
  } */

  #video-section {
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  /* iframe {
    height: 400px;
  } */

  #video-section {
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

img {
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 2%;
}

/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  h1 {
    font-size: 40px;
  }

  /* iframe {
    height: 350px;
  } */

  #video-section {
    padding: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    font-size: 30px;
  }

  /* iframe {
    height: 300px;
  } */

  video {
    width: 90%;
  }

  #video-section {
    padding: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
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
  h1 {
    font-size: 30px;
  }

  iframe {
    height: 180px;
  }
}
</style>
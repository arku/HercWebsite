<template>
    <div id="video-section">
        <div id="content">
            <div>
                <h1>How it Works</h1>
            </div>
              <iframe width="90%" height="515" src="https://www.youtube.com/embed/177Ub1YUdgQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <!-- <div>
                <img src="../assets/hiprflow.png">
              <p>From a technology standpoint, HIPR implements steganography and age of cryptography process
                 to encrypt the supply chain metrics into the puzzles the humans perform to validation of chain
                  data integrity.
              </p>
              <p>
                As a more secure and newly implemented Consensus model, Proof of Human Work does not waste
                 electricity and resource to validate transactions. Leveraging the intuition of the Human Brain
                  and incentivising good actors in the network is our way of protecting against malicious attacks.
              </p>
              <p> HIPR is built Unity3D, with C# and Solidity while targeting WebGl, NEthereum for Web3 connectivity.
                From market research we have found this Consensus model is 90% more efficient as we scale in HIPR
                 players because more we entertain our community the more integrious our chain data becomes. 
                Other blockchain projects with similar use cases have only considered private permissioned blockchain technology as a means to scale. 
                We believe Proof of Human Work will revolutionize the way projects can scale on public blockchain.
                At 0.001$/kb indexed HERC is >98%+ more cost efficient when compared to Hyperledger's $1000$/month/node model.
                HERC's protocol consensus model has built in pay per supply chain movement.</p>
            </div> -->
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
}

h1 {
  font-size: 45px;
  text-align: center;
  color: #091141;
  text-transform: uppercase;
  margin-bottom: 5%;
  font-weight: bold;
}

p{
  text-align: left;
  font-weight: bold;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 1%;
  color: #091141;
}

iframe{
  margin-bottom: 5%;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
  iframe {
    height: 600px;
  }
}

/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  iframe {
    height: 500px;
  }

  #video-section {
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  iframe {
    height: 400px;
  }

  #video-section {
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

img{
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 2%;

}

/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  h1 {
    font-size: 40px;
  }

  iframe {
    height: 350px;
  }

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

  iframe {
    height: 300px;
  }

  #video-section {
    padding: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  img{
    padding: 0px;
  }

  p{
    padding: 0px;
  }
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
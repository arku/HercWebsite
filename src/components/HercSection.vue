<template>
    <div id="herc-section">
        <div id="content">
            <div class="columns">
                <div class="column spacer">
                    <img src="../assets/HercAdvantages_Diagram.jpg">
                </div>
                <div class="column">
                    <h1>What is Hercules?</h1>
                    <p>
                        Hercules is a decentralised blockchain protocol platform that
                         enables anyone to operate a fully functioning supply chain that
                          utilises Proof of Human Work to validate transactions. Developed
                           and Advisised by founders of Ethereum, Factom, Storj, Abra Wallet,
                            Edge Security, Waves, Transform, and Blockchain Exchange, the world's
                             leading blockchain organisations, Hercules is designed to serve
                              120+ million businesses a year already managing their supply chain.
                    </p>
                    <h1>HERC Tokens</h1>
                    <p>
                        Harnessing the power of blockchain software, HERC tokens are utility
                         tokens that allow users to create custom supply chains by defining the
                          items to be tracked and information to be recorded in the Hercules
                           mutilayered least cost routing blockchain protocol.
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                <h1 class="center-text">The Hercules Blockchain</h1>
                <p>The Hercules Protocol & Platform is a global supply chain repository
                     providing a complete list of all trackable assets accessible to anyone
                      with permission.<br>Hercules provides business people with the data integrity advantages of blockchain
                     technology, enabling their goods to be trusted and exchanged with a world wide
                      market.
                </p>
                </div>
                <div class="column">
                    <img src="../assets/herc-blockchain.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "HercSection"
};
</script>

<style scoped>
#herc-section {
  padding: 100px;
  padding-right: 150px;
  padding-left: 150px;
  background-color: #fafafa;
}

h1 {
  font-size: 30px;
  color: #091141;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1%;
}

p {
  text-align: left;
  margin-bottom: 5%;
}

.center-text {
  text-align: center;
}

img {
  border: 2px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
  transition: transform 0.9s;
}

img:hover {
  transform: scale(1.05);
}

.spacer {
  padding-top: 20px;
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
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #herc-section {
    padding: 50px;
  }

  .center-text {
    text-align: left;
  }

  .spacer {
    padding-top: 0px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

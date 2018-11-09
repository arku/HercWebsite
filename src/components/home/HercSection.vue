<template>
    <div id="herc-section">
        <div id="content">
          <div class="columns">
            <div class="column">
                    <h1>What is Hercules?</h1>
                    <p>
                        Hercules is a decentralized blockchain protocol platform that enables anyone to operate
                         a fully functioning supply chain that utilizes Proof of Human Work to validate transactions.
                         Developed and Advised by founders of Ethereum, Factom, Storj, Abra Wallet, Edge Security,
                          Waves, Transform, and Blockchain Exchange, the world's leading blockchain organisations,
                           Hercules is designed to serve 120+ million businesses a year already managing their supply 
                           chain as well as billions of aspiring entrepreneurs.
                    </p>
                  </div>
          </div>
          <div class="columns">
                <div class="column">
                    <img src="../../assets/Herc_benefits_720_1.gif">
                </div>
            </div>
            <div class="columns">
                    <div class="column">
                      <h1>HERC Tokens</h1>
                      <p>
                          Harnessing the power of blockchain software, HERC tokens are utility
                          tokens that allow users to create custom supply chains by defining the
                            items to be tracked and information to be recorded in the Hercules
                            mutilayered least cost routing blockchain protocol.
                      </p>
                    </div>
                    <div class="column">
                      <h1>The Hercules Blockchain</h1>
                      <p>The Hercules Protocol & Platform is a global supply chain repository
                          providing a complete list of all trackable assets accessible to anyone
                            with permission.<br>Hercules provides business people with the data integrity advantages of blockchain
                          technology, enabling their goods to be trusted and exchanged with a world wide
                            market.
                      </p>
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
  padding: 50px;
  background-color: #fafafa;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  font-size: 30px;
  color: #091141;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1%;
  text-align: center;
}

p {
  text-align: center;
}

img {
  border: 2px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
  border-radius: 5px;
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
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #herc-section{
    padding: 30px;
  }
}
</style>

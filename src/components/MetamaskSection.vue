<template>
    <div id="metamask-section">
        <div id="content">
            <div class="spacer">
                <h1>How to use MetaMask</h1>
                <img src="../assets/metamask/header.png">
                <p>MetaMask is an essential part of the Hercules Platform web experience. Having this
                   extension will allow your web2 browser to function as a web3 browser and work with many
                   facets of our decentralized application ecosystem. Whats best about this is that you don’t
                   have to download the blockchain to work with our Smart Contracts! Follow these steps to
                   install Metamask and begin your Value Chain Legend with HERC!</p>
            </div>
            <div class="spacer">
                <h2>Part 1 - Installing MetaMask</h2>
                <p class="step"><strong>Step 1: </strong>Click 
                <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">
                here </a> to go to Chrome Webstore and get the MetaMask plugin</p>
                <p class="step"><strong>Step 2: </strong>Click <b>"Add to Chrome"</b> to install MetaMask
                as Google Chrome extension.</p>
                <img src="../assets/metamask/1.png">
                <p class="step"><strong>Step 3: </strong>Click <b>"Add Extension" </b>to confirm and
                MetaMask will be added.</p>
                <img src="../assets/metamask/2.png">
                <p>You can see that MetaMask is added by the little fox logo that shows up on the top right corner.</p>
            </div>
            <div class="spacer">
                <h2>Part 2 - Creating a new wallet</h2>
                <p class="step"><strong>Step 1: </strong>Click the MetaMask logo.</p>
                <img src="../assets/metamask/3.png">
                <p class="step"><strong>Step 2: </strong>Read and agree to the MetaMask terms and Conditions.</p>
                <img src="../assets/metamask/4.png">
                <img src="../assets/metamask/5.png">
                <p class="step"><strong>Step 3: </strong>Click <b>"Create" </b>after typing your personal password two times.</p>
                <img src="../assets/metamask/6.png">
                <p class="step"><strong>Step 4: </strong>Metamask will now show you your seed. It is very important that you copy
                and store those 12 worlds, without them you cannot restore your wallet.</p>
                <img src="../assets/metamask/7.png">
                <p class="small-spacer">Your account is now created! It’s possible that 1 Ether shows up on your balance. That’s because you’re on
                 the testnet.</p>
                <img src="../assets/metamask/8.png">
            </div>
            <div class="spacer">
                <h2>Part 3 - Changing to the Mainnet & Funding your account</h2>
                <p class="step"><strong>Step 1: </strong><b>"Modern Testnet"</b>.</p>
                <img src="../assets/metamask/9.png">
                <p class="step"><strong>Step 2: </strong><b>"Main Ethereum Network"</b>.</p>
                <img src="../assets/metamask/10.png">
                <p class="step"><strong>Step 3: </strong>Click the copy address to clipboardto get your wallet address.
                Then all you have to do send Ether to it from your favorite exchange or wallet.</p>
                <img src="../assets/metamask/11.png">                
            </div>
            <div class="spacer">
                <h2>Part 4 - Sending Ether</h2>
                <p class="small-spacer">Now that your MetaMask account is funded you can easily send Ether.</p>
                <p class="step"><strong>Step 1: </strong>Click <b>"Send"</b>.</p>
                <img src="../assets/metamask/12.png">
                <p class="step"><strong>Step 2: </strong>Enter the wallet address to where you want to send Ether to (1), 
                Enter the amount of Ether you want to send (2) and click <b>"Send" </b>(3).</p>
                <img src="../assets/metamask/13.png">
                <p class="step"><strong>Step 3: </strong>Confirm the transaction data and click <b>"Accept"</b>.</p>
                <img src="../assets/metamask/14.png">
                <p class="small-spacer">And that’s it! You can now send and recieve Ether on your MetaMask
                wallet. Furthermore, you’ll also be able to visit Ethereum Dapps thanks to this awesome
                extension.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "MetamaskSection"
};
</script>

<style scoped>
#metamask-section {
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
  text-transform: uppercase;
  margin-bottom: 2%;
  font-weight: bold;
}

h2 {
  font-size: 30px;
  color: #091141;
  margin-bottom: 2%;
}

p {
  text-align: left;
  color: #091141;
}

img {
  margin-bottom: 1%;
  border: 2px solid #f3c736;
  border-radius: 5px;
}

.spacer {
  margin-bottom: 5%;
}

.small-spacer {
  margin-bottom: 2%;
}

.step {
  border-left: 2px solid #f3c736;
  padding-left: 10px;
  margin-bottom: 2%;
}

strong {
  color: #f3c736;
}

a {
  color: #f3c736;
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
  h2 {
    font-size: 25px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h2 {
    font-size: 20px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h2 {
    font-size: 20px;
  }
}
</style>

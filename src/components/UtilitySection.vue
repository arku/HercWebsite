<template>
    <div id="utility-section">
        <div id="content">
            <h1>Utility Resources</h1>
            <hr>
            <div class="columns" id="prvi">
                <div class="column">
                    <a class="tooltip" href="https://github.com/HERCone/herc-edge-login/releases" target="_blank">
                        <button>USE</button>
                        <span class="tooltiptext">Use the HERC DAPP Today!</span>
                    </a>
                </div>
                <div class="column">
                    <a class="tooltip" href="https://github.com/HERCone/cold-storage" target="_blank">
                        <button>HODL</button>
                        <span class="tooltiptext">Cold Storage Wallet</span>
                    </a>
                </div>
                <div class="column">
                    <a class="tooltip" href="https://etherscan.io/address/0x6251583e7d997df3604bc73b9779196e94a090ce" target="_blank">
                        <button>View</button>
                        <span class="tooltiptext">HERC EtherScan!</span>
                    </a>
                </div>
                <div class="column">
                    <a class="tooltip" href="https://hipr.one" target="_blank">
                        <button>Play HIPR</button>
                        <span class="tooltiptext">Play HERC HIPR Games!</span>
                    </a>
                </div>
            </div>
            <div class="columns">
                <div class="column">

                </div>
                <div class="column">
                    <h2>Wallets</h2>
                    <router-link to="/tokeninfo" class="tooltip">
                        <img src="../assets/edgeicon.png">
                        <span class="tooltiptext">Edge Secure Instructions!</span>
                    </router-link>
                    <a class="tooltip" href="https://s3.us-east-2.amazonaws.com/hercmedia/app/app-release-rc0.20.apk">
                        <img src="../assets/truswallet.png">
                        <span class="tooltiptext">HERC Hot Wallet</span>
                    </a>
                </div>
                <div class="column">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "UtilitySection"
};
</script>

<style scoped lang="scss">
#utility-section {
  padding: 50px;
  background-color: #fafafa;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  font-size: 30px;
  color: $herc-blue;
}

h2 {
  color: $herc-blue;
  margin-bottom: 5%;
  font-size: 24px;
}

hr {
  margin-bottom: 5%;
}

button {
  background-color: $herc-gold;
  border: 2px solid $herc-gold;
  border-radius: 5px;
  font-size: 20px;
  text-transform: uppercase;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
  font-weight: bold;
  color: $herc-blue;
}

button:hover {
  @include herc-gold-button-hover;
  background-color: $herc-blue;
}

img {
  width: 25%;
  margin: auto;
  margin: 4%;
}

span {
  font-size: 10px;
}

#wallets {
  margin-bottom: 5%;
}

#prvi {
  margin-bottom: 5%;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: $herc-blue;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
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
  img {
    width: 35%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

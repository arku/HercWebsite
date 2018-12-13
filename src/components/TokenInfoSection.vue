<template>
  <div id="token-info-section">
    <div id="content">
      <h1>HERC Token Information</h1>
      <div id="blurb">
        <h2>Token Name</h2>
        <p>Hercules</p>
        <h2>Token Code</h2>
        <p>HERC</p>
        <h2>Contract Address</h2>
        <p>0x6251583e7d997df3604bc73b9779196e94a090ce</p>
        <p id="info"></p>
        <button v-clipboard="copyAddress" @success="handleSuccess" @error="handleError">Copy Address</button>
        <h2>Number of Decimal Places</h2>
        <p>18</p>
        <a
          href="https://etherscan.io/address/0x6251583e7d997df3604bc73b9779196e94a090ce"
          target="_blank"
        >
          <button>View on Etherscan</button>
        </a>
        <!-- <h2>Additional Information</h2>
        <h3>Circulating Supply:</h3>
        <p>{{circulatingSupply}}</p>
        <h3>Aggregate Reserves:</h3>
        <p>{{aggregateReserves}}</p>
        <h3>Aggregate Supplies:</h3>
        <p>{{aggregateSupplies}}</p>
        <h3>Percent of Supply in Circulation:</h3>
        <p>{{percentOfSupplyInCirculation}}</p>
        <h3>Market Capitalization:</h3>
        <p>{{marketCapitalization}}</p>
        <h3>Average HERC Price:</h3>
        <p>{{averagePrice}}</p>
        <h3>Value Held in Reserve:</h3>
        <p>{{valueHeldInReserve}}</p> -->
      </div>
      <h1>How to store your HERC on Edge Wallet</h1>
      <img src="../assets/edge-info.png">
    </div>
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;
export default {
  name: "TokenInfoSection",
  data() {
    return {
      copyAddress: "0x6251583e7d997df3604bc73b9779196e94a090ce",
      circulatingSupply: "",
      aggregateReserves: "",
      aggregateSupplies: "",
      percentOfSupplyInCirculation: "",
      marketCapitalization: "",
      averagePrice: "",
      valueHeldInReserve: ""
    };
  },
  methods: {
    handleSuccess(e) {
      document.getElementById("info").style.cssText = "display:inherit";
      document.getElementById("info").innerHTML = "Address copied succesfully!";
      console.log(e);
    },
    handleError(e) {
      console.log(e);
    },
    showInfo() {
      const self = this;
      $.getJSON("https://chart.anthemgold.com/bi-1.0-SNAPSHOT/Report", function(
        data
      ) {
        self.circulatingSupply = `${data.circulatingSupply}`;
        self.aggregateReserves = `${data.aggregateReserves}`;
        self.aggregateSupplies = `${data.aggregateSupplies}`;
        self.percentOfSupplyInCirculation = `${
          data.percentOfSupplyInCirculation
        }`;
        self.marketCapitalization = `${data.marketCapitalization}`;
        self.averagePrice = `${data.averagePrice}`;
        self.valueHeldInReserve = `${data.valueHeldInReserve}`;
      });
    }
  },
  beforeMount() {
    this.showInfo();
  }
};
</script>

<style scoped lang="scss">
#token-info-section {
  padding: 50px;
  background-color: $herc-blue;
  background-image: url("../assets/HERC_BKG_v2_blue.png");
  background-size: cover;
  background-position: center;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  @include herc-gold-h1;
  font-size: 35px;
  font-weight: bold;
}

h2 {
  color: white;
  font-weight: bold;
  font-size: 28px;
}

h3 {
  font-size: 26px;
  color: gray;
}

p {
  color: $herc-gold;
  font-weight: bold;
  margin-bottom: 2%;
  font-size: 20px;
  text-align: center;
  word-wrap: break-word;
}

#blurb {
  background-color: rgba(9, 17, 65, 0.9);
  border: 2px solid $herc-gold;
  border-radius: 5px;
  padding: 50px;
  box-shadow: $herc-shadow;
  margin-bottom: 5%;
}

button {
  @include herc-gold-button;
  border-radius: 5px;
  margin-bottom: 2%;
}

button:hover {
  @include herc-gold-button-hover;
}

img {
  width: 60%;
  margin: auto;
  border: 2px solid $herc-gold;
  border-radius: 5px;
  box-shadow: $herc-shadow;
}

#info {
  display: none;
  color: white;
  margin: 0;
  margin-bottom: 1%;
  font-size: 12px;
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
  #token-info-section {
    padding: 10px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  #blurb {
    padding: 20px;
  }

  h1 {
    font-size: 30px;
    line-height: 1.2em;
  }

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }

  img {
    width: 100%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
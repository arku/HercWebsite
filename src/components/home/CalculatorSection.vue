<template>
  <div id="calculator-section">
    <h3 v-model="assetCost">Only {{assetCost}} HERC to stake a Value Chain</h3>
    <div id="content">
      <div class="columns">
        <div class="column">
          <h1>Herc Protocol Cost Calculator</h1>
        </div>
        <div class="column">
          <h1>Options:</h1>
          <select id="period-select" v-model="period" v-on:change="hercNeeded">
            <option disabled value>Select period</option>
            <option id="day" selected value="Day">Day</option>
            <option id="month">Month</option>
            <option id="year">Year</option>
          </select>
          <select id="size-select" v-model="size" v-on:change="hercNeeded">
            <option disabled value>Select unit</option>
            <option selected>KB</option>
            <option>MB</option>
            <option>GB</option>
          </select>
          <!-- <select id="price-select" v-model="price" v-on:change="hercNeeded">
            <option selected>BTC</option>
            <option>ETH</option>
            <option>USD</option>
            <option>EUR</option>
          </select>-->
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h2>Estimated Number of Assets</h2>
          <input id="asset-num" placeholder="Enter number of assets" v-on:input="hercNeeded">
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h2>Estimated Photo Data Size ({{size}})</h2>
          <input id="photo-size" placeholder="Enter photo size" v-on:input="hercNeeded">
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h2>Estimated Number of Documents</h2>
          <input id="doc-num" placeholder="Enter number of documents" v-on:input="hercNeeded">
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h2>Estimated Herc Needed per {{period}}:</h2>
          <input id="herc-needed" disabled :value="hercNeededResult">
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h2>Estimated Herc Cost in USD per {{period}}:</h2>
          <input id="herc-price" disabled :value="hercCostUSD">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Import and declare jQuery for component scoped use

import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "CalculatorSection",
  data() {
    return {
      period: "",
      size: "",
      price: "",
      hercNeededResult: 0,
      hercCostUSD: 0,
      assetCost: 0
    };
  },
  methods: {
    hercNeeded() {
      const self = this;
      $.getJSON(
        "https://chart.anthemgold.com/service-1.0-SNAPSHOT/PRICE?symbol=HERCUSD&range=MINUTE_5",
        function(data) {
          var hercOpen = `${data.o}`;
          hercOpen = Number(hercOpen);
          var hercLow = `${data.l}`;
          hercLow = Number(hercLow);
          var hercHigh = `${data.h}`;
          hercHigh = Number(hercHigh);
          var hercClose = `${data.c}`;
          hercClose = Number(hercClose);
          var hercAvgPrice = (hercOpen + hercLow + hercHigh + hercClose) / 4;

          var measureType;
          var measureUnit;
          var numOfAsset;
          var photoSize;
          var numOfDocs;
          var hercNeeded;
          var selectedPeriod;

          measureType = document.getElementById("size-select").value;
          numOfAsset = document.getElementById("asset-num").value;
          photoSize = document.getElementById("photo-size").value;
          numOfDocs = document.getElementById("doc-num").value;
          selectedPeriod = document.getElementById("period-select").value;

          switch (measureType) {
            case "KB":
              measureUnit = 1;
              break;
            case "MB":
              measureUnit = 1024;
              break;
            case "GB":
              measureUnit = 1048576;
              break;
            default:
              measureUnit = 1;
              break;
          }

          switch (selectedPeriod) {
            case "Day":
              numOfAsset = Number(numOfAsset);
              numOfDocs = Number(numOfDocs);
              photoSize = Number(photoSize);
              hercNeeded =
                numOfAsset * (400 / hercAvgPrice) +
                measureUnit * photoSize * 0.00000008 +
                numOfDocs * 0.000032;
              self.hercNeededResult = hercNeeded;
              break;
            case "Month":
              numOfAsset = Number(numOfAsset);
              numOfDocs = Number(numOfDocs);
              photoSize = Number(photoSize);
              hercNeeded =
                numOfAsset * (400 / hercAvgPrice) +
                (measureUnit * photoSize * 0.00000008 + numOfDocs * 0.000032) *
                  31;
              self.hercNeededResult = hercNeeded;
              break;
            case "Year":
              numOfAsset = Number(numOfAsset);
              numOfDocs = Number(numOfDocs);
              photoSize = Number(photoSize);
              hercNeeded =
                numOfAsset * (400 / hercAvgPrice) +
                (measureUnit * photoSize * 0.00000008 + numOfDocs * 0.000032) *
                  365;
              self.hercNeededResult = hercNeeded;
              break;
            default:
              numOfAsset = Number(numOfAsset);
              numOfDocs = Number(numOfDocs);
              photoSize = Number(photoSize);
              hercNeeded =
                numOfAsset * (400 / hercAvgPrice) +
                measureUnit * photoSize +
                numOfDocs * 0.000032;
              self.hercNeededResult = hercNeeded;
              break;
          }
          var hercCostUSD = hercNeeded * hercAvgPrice;
          self.hercCostUSD = hercCostUSD;
          var assetCost = 400 / hercAvgPrice;
          assetCost = Math.trunc(assetCost);
          self.assetCost = assetCost;
        }
      );
    }
  },
  mounted() {
    this.hercNeeded();
  }
};
</script>

<style scoped lang="scss">
#calculator-section {
  padding: 50px;
  background-color: #fafafa;
}

#content {
  max-width: 1080px;
  margin: auto;
  border: 2px solid $herc-gold;
  border-radius: 5px;
  padding: 50px;
  box-shadow: $herc-shadow;
  background-color: $herc-blue;
}

h1 {
  @include herc-gold-h1;
  font-weight: bold;
}

h2 {
  font-size: 20px;
  color: $herc-gold;
  margin-bottom: 1%;
}

h3 {
  @include herc-blue-h1;
  font-weight: bold;
}

select {
  margin: auto;
  font-size: 20px;
  text-transform: uppercase;
  border-color: $herc-gold;
  border-width: 2px;
  border-radius: 5px;
  margin: 1%;
}

input {
  border: 2px solid $herc-gold;
  border-radius: 5px;
  height: 35px;
  text-align: center;
  font-weight: bold;
}

::placeholder {
  color: gray;
  text-align: center;
  font-size: 12px;
}

#herc-needed,
#herc-price {
  text-align: center;
  font-weight: bold;
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
  h1 {
    font-size: 24px;
  }

  #content {
    padding: 10;
  }

  #calculator-section {
    padding: 20px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

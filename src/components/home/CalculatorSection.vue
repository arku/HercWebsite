<template>
    <div id="calculator-section">
        <div id="content">
            <div class="columns">
                <div class="column">
                    <h1>Herc Protocol Cost Calculator</h1>
                </div>
                <div class="column">
                    <h1 class="animated infinite bounce">Options:</h1>
                    <select id="period-select" v-model="period">
                        <option id="day">Day</option>
                        <option id="month">Month</option>
                        <option id="year">Year</option>
                    </select>
                    <select id="size-select" v-model="size">
                        <option>KB</option>
                        <option>MB</option>
                        <option>GB</option>
                        <option>TB</option>
                    </select>
                    <select id="price-select" v-model="price">
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Estimated Number of Assets</h2>
                    <input id="asset-num" placeholder="Enter number of assets">
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Estimated Photo Data Size ({{size}})</h2>
                    <input id="photo-size" placeholder="Enter photo size">
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Estimated Number of Documents</h2>
                    <input id="doc-num" placeholder="Enter number of documents">
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Estimated Herc Needed per {{period}}:</h2>
                    <input id="herc-needed" disabled value="10">
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Estimated Herc Cost in {{price}}:</h2>
                    <input id="herc-price" disabled v-model="calculated">
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
      calculated: ""
    };
  },
  methods: {
    calculate() {
        this.calculated = 5;
    }
  },
  mounted(){
    //   calculate();
  }
};
// jQuery(function($) {
function roundUp(num, precision) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision) / precision;
}

roundUp(192.168, 1); //=> 192.2
$.getJSON("https://jsondata.herc.one/service-1.0-SNAPSHOT/JSON", function(
  data
) {
  var factPrice = `${data.factomPrice}`;
  var storjPrice = `${data.storjPrice}`;
  var etheriumNeeded = `${data.gasPrice}`;
  var hercPrice = 0.6;

  var factNeeded = (0.000128 / factPrice) * 4;
  var storjNeeded = 0.0007032 / storjPrice;
  var hercBurned = factNeeded / hercPrice;

  factNeeded = roundUp(factNeeded, 6);
  storjNeeded = roundUp(storjNeeded, 6);

  var hercNeededFCT = (0.000128 / 0.6) * factPrice * 4;
  var hercNeededSTORJ = (0.0007032 / 0.6) * storjPrice;
  var hercNeeded =
    storjNeeded / hercPrice +
    factNeeded / hercPrice +
    etheriumNeeded / hercPrice +
    hercBurned;

  hercNeededFCT = roundUp(hercNeededFCT, 6);
  hercNeededSTORJ = roundUp(hercNeededSTORJ, 6);

  $("#factPrice").html(factPrice);
  $("#factPriceMobile").html(factPrice);
  $("#storjPrice").html(storjPrice);
  $("#storjPriceMobile").html(storjPrice);

  $("#factNeeded").html(factNeeded);
  $("#factNeededMobile").html(factNeeded);

  $("#storjNeeded").html(storjNeeded);
  $("#storjNeededMobile").html(storjNeeded);

  $("#ethGasPrice").html(etheriumNeeded);
  $("#ethGasPrice2").html(etheriumNeeded);
  $("#ethGasPrice3").html(etheriumNeeded);

  $("#hercNeeded").html(hercNeededFCT);
  $("#hercNeeded2").html(hercNeededSTORJ);
  $("#hercNeededMobile").html(hercNeededFCT);
  $("#hercNeededMobile2").html(hercNeededSTORJ);
  $("#ethGasPriceMobile").html(etheriumNeeded);
  $("#ethGasPriceMobile2").html(etheriumNeeded);
  $("#ethGasPriceMobile3").html(etheriumNeeded);
});
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
}

::placeholder {
  color: gray;
  text-align: center;
}

#herc-needed,
#herc-price {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>

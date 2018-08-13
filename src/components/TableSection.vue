<template>
    <div id="table-section">
        <div id="content">
            <table class="table is-bordered">
                <thead>
                    <tr>
                        <th>
                        <img class="image" src="../assets/factom.png">
                        </th>
                        <th>
                        <img class="image" src="../assets/storj.png">
                        </th>
                        <th>
                        <img class="image" src="../assets/ipfs.png">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="factom-color">Action:<br>4 hash files</td>
                        <td class="storj-color">Action:<br>6 pictures</td>
                        <td class="ipfs-color">Action:<br>8 variables</td>
                    </tr>
                    <tr>
                        <td class="factom-color">Size:<br>32 bytes</td>
                        <td class="storj-color">Size:<br>8,790kb</td>
                        <td class="ipfs-color">Size:<br>126 bytes</td>
                    </tr>
                    <tr>
                        <td class="factom-color">Cost/kb:<br>$0.001</td>
                        <td class="storj-color">Cost/kb:<br>$0.00000002</td>
                        <td class="ipfs-color">Cost/kb:<br>$0.00</td>
                    </tr>
                    <tr>
                        <td class="factom-color">Cost associated:<br>$0.00032</td>
                        <td class="storj-color">Cost associated:<br>$0.00001758</td>
                        <td class="ipfs-color">Cost associated:<br>$0.00</td>
                    </tr>
                    <tr>
                        <td class="factom-color">Cost of Token:<br>$<span id="factPrice"></span></td>
                        <td class="storj-color">Cost of Token:<br>$<span id="storjPrice"></span></td>
                    </tr>
                    <tr>
                        <td class="factom-color"><span id="factNeeded"></span><br>FCT needed</td>
                        <td class="storj-color"><span id="storjNeeded"></span><br>STORJ needed</td>
                    </tr>
                    <tr>
                        <td class="factom-color"><span id="hercNeeded"></span><br>HERC needed</td>
                        <td class="storj-color"><span id="hercNeeded2"></span><br>HERC needed</td>
                        <td class="ipfs-color"><span id="hercNeeded3"></span><br>HERC needed</td>
                    </tr>
                    <tr>
                        <td class="factom-color"><span id="ethGasPrice"></span><br>ETH Gas Price</td>
                        <td class="storj-color"><span id="ethGasPrice2"></span><br>ETH Gas Price</td>
                        <td class="ipfs-color"><span id="ethGasPrice"></span><br>ETH Gas Price</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "TableSection",
  // mounted: function() {
  //   this.$nextTick(function() {
  //     // Code that will run only after the
  //     // entire view has been rendered

  //     alert("lol!");
  //   });
  // },
  // roundUp: function(num, precision) {
  //   precision = Math.pow(10, precision);
  //   return Math.ceil(num * precision) / precision;
  //   alert("Round up done!");
  //   console.log("test");
  // }
};

// jQuery(function($) {
//   function roundUp(num, precision) {
//     precision = Math.pow(10, precision)
//     return Math.ceil(num * precision) / precision
//   }

//   roundUp(192.168, 1) //=> 192.2
//   $.getJSON('https://jsondata.herc.one/service-1.0-SNAPSHOT/JSON', function(data) {

//     var roundedUp;
//     var factPrice = `${data.factomPrice}`;
//     var storjPrice = `${data.storjPrice}`;
//     var etheriumNeeded = `${data.gasPrice}`;
//     var hercPrice = 0.60;

//     var factNeeded = 0.000128 / factPrice;
//     var storjNeeded = 0.0007032 / storjPrice;
//     var hercBurned = factNeeded/hercPrice;

//     factNeeded = roundUp(factNeeded, 6);
//     storjNeeded = roundUp(storjNeeded, 6);

//     var hercNeededFCT = (0.000128 / 0.60) * factPrice;
//     var hercNeededSTORJ = (0.0007032 / 0.60) * storjPrice;
//     var hercNeeded = ((storjNeeded/hercPrice) + (factNeeded/hercPrice)+(etheriumNeeded/hercPrice)+hercBurned);

//     $("#factPrice").html(factPrice);
//     $("#factPriceMobile").html(factPrice);
//     $("#storjPrice").html(storjPrice);
//     $("#storjPriceMobile").html(storjPrice);

//     $("#factNeeded").html(factNeeded);
//     $("#factNeededMobile").html(factNeeded);

//     $("#storjNeeded").html(storjNeeded);
//     $("#storjNeededMobile").html(storjNeeded);

//     $("#ethGasPrice").html(etheriumNeeded);
// 	      $("#ethGasPrice2").html(etheriumNeeded);
//     $("#ethGasPrice3").html(etheriumNeeded);

//     $("#hercNeeded").html(hercNeededFCT);
//     $("#hercNeeded2").html(hercNeededSTORJ);
//     $("#hercNeededMobile").html(hercNeededFCT);
//     $("#hercNeededMobile2").html(hercNeededSTORJ);
//     $("#ethGasPriceMobile").html(etheriumNeeded);
// 	      $("#ethGasPriceMobile2").html(etheriumNeeded);
//     $("#ethGasPriceMobile3").html(etheriumNeeded);

//   });
// });
</script>

<style scoped>
#table-section {
  padding: 50px;
}

table {
  text-align: center;
  background-color: transparent;
  margin: auto;
  border: 2px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
}

table th {
  border-color: #f3c736;
}

table td {
  color: white;
  text-align: center;
  border-color: #f3c736;
  font-weight: bold;
}

table td:hover {
  background-color: #f3c736;
  color: black;
}

table img {
  margin: auto;
}

.factom-color {
  background-color: #1a3850;
}

.storj-color {
  background-color: #2683ff;
}

.ipfs-color {
  background-color: #449294;
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
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  table td {
    font-size: 12px;
  }
}
</style>
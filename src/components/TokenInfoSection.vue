<template>
    <div id="token-info-section">
        <div id="content">
            <h1>HERC Token Information</h1>
            <p><span><b>IMPORTANT NOTICE:</b></span>This is the test network information!</p>
        </div>
        <div>
            <ul>
                <li>Token Name: <b>Hercules</b></li>
                <li>Token Code: <b>HERC</b></li>
                <li>Contract Address: <b>0x0C97b0B42140D77dE45Fc669E826225E6bb6B3D2</b></li>
                <li>Number of Decimal Places: <b>18</b></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "TokenInfoSection"
};
</script>

<style scoped>
#token-info-section {
  padding: 50px;
  height: 70vh;
}

h1 {
  font-size: 40px;
  color: #091141;
  font-weight: bold;
}

p {
  margin-bottom: 5%;
}

ul {
  text-align: left;
  width: 50%;
  margin: auto;
  margin-bottom: 5%;
}

li {
  font-size: 20px;
  color: #091141;
}

span {
  color: red;
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
  ul {
    width: 100%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

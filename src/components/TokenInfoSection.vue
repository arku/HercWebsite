<template>
    <div id="token-info-section">
        <div id="content">
            <h1>HERC Token Information</h1>
        </div>
        <div>
            <ul>
                <li>Token Name:</li>
                <li>Token Code:</li>
                <li>Contract Address:</li>
                <li>Number of Decimal Places:</li>
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
  height: 60vh;
}

h1 {
  font-size: 40px;
  color: #091141;
  font-weight: bold;
  margin-bottom: 5%;
}

ul {
  text-align: left;
  width: 35%;
  margin: auto;
  margin-bottom: 5%;
}

li {
  font-size: 20px;
  color: #091141;
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

<template>
    <div id="protocol-section">
        <div id="content">
            <div>
                <h1>Cost per Protocol Action:</h1>
            </div>
            <div id="image-placeholder">
                <img src="../assets/cost-per-protocol.png">
            </div>
            <div class="is-128x128">
                <img src="../assets/down-arrow.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProtocolCostSection"
};
</script>

<style scoped>
#protocol-section {
  padding: 50px;
}

#image-placeholder {
  background-color: #1c224b;
  margin-bottom: 5%;
}

h1 {
  font-size: 45px;
  text-align: center;
  color: #f3c736;
  text-transform: uppercase;
  margin-bottom: 50px;
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
  h1 {
    font-size: 40px;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    font-size: 30px;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
  }
}
</style>
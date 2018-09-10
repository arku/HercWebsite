<template>
    <div id="protocol-section">
        <div id="content">
            <div>
                <h1>Cost per Protocol Action:</h1>
            </div>
            <div id="image-placeholder">
                <img src="../assets/cost-per-protocol.png">
            </div>
            <div>
                <img src="../assets/down-arrow.png" class="image is-64x64">
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
  padding-left: 250px;
  padding-right: 250px;
}

#image-placeholder {
  /* background-color: #1c224b; */
  background-color: #fafafa;
  margin-bottom: 5%;
}

h1 {
  font-size: 45px;
  text-align: center;
  color: #091141;
  text-transform: uppercase;
  margin-bottom: 50px;
  font-weight: bold;
  line-height: 1em;
}

img {
  margin: auto;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}

/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  #protocol-section {
    padding-left: 100px;
    padding-right: 100px;
  }
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

  #protocol-section {
    padding-left: 50px;
    padding-right: 50px;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
  }

  #protocol-section {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
<template>
    <div id="roadmap-section">
        <div id="content">
            <div>
                <h1 class="h1title">Process</h1>
            </div>
            <div class="columns is-gapless glue">
                <div class="column">
                    <div class="bg-color right-border">
                        <img src="../assets/check-icon.png" class="image is-64x64">
                        <h1 class="left-text">January 2018</h1>
                        <p>Bug Bounty & Test Net</p>
                    </div>
                </div>
                <div class="column">

                </div>
            </div>
            <div class="columns is-gapless glue">
                <div class="column">
                    
                </div>
                <div class="column">
                    <div class="bg-color left-border">
                        <img src="../assets/check-icon.png" class="image is-64x64">
                        <h1 class="right-text">February 2018</h1>
                        <p>Test Net & Security Audits</p>
                    </div>
                </div>
            </div>
            <div class="columns is-gapless glue">
                <div class="column">
                    <div class="bg-color right-border">
                        <img src="../assets/check-icon.png" class="image is-64x64">
                        <h1 class="left-text">March 2018</h1>
                        <p>Private Presale</p>
                    </div>
                </div>
                <div class="column">

                </div>
            </div>
            <div class="columns is-gapless glue">
                <div class="column">
                    
                </div>
                <div class="column">
                    <div class="bg-color left-border">
                        <img src="../assets/check-icon.png" class="image is-64x64">
                        <h1 class="right-text">Q2 2018</h1>
                        <p>Private Presale</p>
                    </div>
                </div>
            </div>
            <div class="columns is-gapless glue">
                <div class="column">
                    <div class="bg-color right-border">
                        <img src="../assets/check-icon.png" class="image is-64x64">
                        <h1 class="left-text">Q3 2018</h1>
                        <p>Private Presale</p>
                    </div>
                </div>
                <div class="column">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "RoadmapSection"
};
</script>


<style scoped>
#roadmap-section {
  padding: 100px;
}

h1 {
  font-size: 30px;
  text-align: center;
  color: #091141;
  text-transform: uppercase;
  font-weight: bold;
}

.h1title {
  font-size: 45px;
  text-align: center;
  color: #f3c736;
  text-transform: uppercase;
  margin-bottom: 5%;
}

img {
  float: left;
}

.bg-color {
  background-color: #f3c736;
  padding: 50px;
  box-shadow: 0px 12px 18px -6px #000;
  border: 10px solid black;
}

.bg-color:hover{
    border-color: #fafafa;
}

.left-border {
  border-left: 10px solid #fafafa;
  margin-left: -5px;
}

.right-border {
  border-right: 10px solid #fafafa;
  margin-right: -5px;
}

.left-text {
  text-align: center;
}

.right-text {
  text-align: center;
}

.glue {
  margin-bottom: 0 !important;
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
    h1{
        font-size: 40px;
    }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
    h1{
        font-size: 30px;
    }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
    h1{
        font-size: 30px;
    }
}
</style>
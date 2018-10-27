<template>
    <div id="roadmap-section">
        <div id="content">
            <div>
                <h1 class="h1title">Roadmap</h1>
            </div>
            <div class="columns ">
                <div class="column ">
                    <div>
                        <i class="fas fa-check-circle fa-2x"></i>
                        <h1>Q3 2018</h1>
                        <p>MVP HERC / AGLD Development</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x not-done"></i>
                        <h1>Q4 2018</h1>
                        <p>HERC Launch</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x not-done"></i>
                        <h1>Q1 2019</h1>
                        <p>AnthemGold Launch</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x not-done"></i>
                        <h1>Q2 2019</h1>
                        <p>HERC v2.5 / Extended Verticals</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x not-done"></i>
                        <h1>Q3 2019</h1>
                        <p>HERC Terminal Operating System / Shipping Containers</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x not-done"></i>
                        <h1>Q4 2019</h1>
                        <p>Beyond Inventory / BEX Ecosystem</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x not-done"></i>
                        <h1>Q1 2020</h1>
                        <p>Olympic Prep / Switch Port</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x not-done"></i>
                        <h1>Q2 2020</h1>
                        <p>Olympics Tokyo / AGLD StableCoin</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x not-done"></i>
                        <h1>Q3 2020</h1>
                        <p>HERC / AGLD / BEX Ecosystem</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x not-done"></i>
                        <h1>Q4 2020</h1>
                        <p>Global User Base</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x not-done"></i>
                        <h1>Q1 2021</h1>
                        <p>HERC the DAO</p>
                    </div>
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
  padding: 50px;
  display: none;
}

.column {
  background-color: #091141;
  border-bottom: 1px solid #f3c736;
  padding-top: 5%;
  padding-bottom: 5%;
}

i {
  color: #f3c736;
}

.not-done {
  color: gray;
}

h1 {
  font-size: 26px;
  text-align: center;
  color: #091141;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1%;
}

.h1title {
  font-size: 45px;
  text-align: center;
  color: #f3c736;
  text-transform: uppercase;
  margin-bottom: 5%;
  font-weight: bold;
}

p {
  font-weight: bold;
  /* width: 60%; */
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
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  h1 {
    font-size: 20px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #roadmap-section {
    display: block;
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #f3c736;
  }

  h1 {
    font-size: 20px;
    color: #f3c736;
    text-transform: none;
  }

  .h1title {
    color: #091141;
  }

  p {
    color: white;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #roadmap-section {
    display: block;
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #f3c736;
  }

  h1 {
    font-size: 20px;
    color: #f3c736;
    text-transform: none;
  }

  p {
    color: white;
  }

  .h1title {
    color: #091141;
  }
}
</style>
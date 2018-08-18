<template>
    <div id="roadmap-section">
        <div id="content">
            <div>
                <h1 class="h1title">Process</h1>
            </div>
            <div class="columns ">
                <div class="column ">
                    <div>
                        <i class="fas fa-check-circle fa-2x"></i>
                        <h1>January 2018</h1>
                        <p>Bug Bounty & Test Net</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x"></i>
                        <h1>February 2018</h1>
                        <p>Test Net & Security Audits</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x"></i>
                        <h1>March 2018</h1>
                        <p>Private Presale</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x"></i>
                        <h1>Q2 2018</h1>
                        <p>Private Presale</p>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <i class="fas fa-check-circle fa-2x"></i>
                        <h1>Q3 2018</h1>
                        <p>Private Presale</p>
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
}

.columns{
  box-shadow: 0px 12px 18px -6px #000;
}

i {
  color: #f3c736;
}

h1 {
  font-size: 26px;
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
  font-weight: bold;
}

p {
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
  h1 {
    font-size: 20px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #roadmap-section {
    display: block;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 5%;
  }

  .h1title {
    margin-bottom: 10%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #roadmap-section {
    display: block;
    padding: 55px;
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
<template>
    <div id="documents-section">
        <div id="content">
            <div>
                <h1>Documents</h1>
            </div>
            <div class="columns is-gapless">
                <div class="column">
                    <a class="button">Token Sale Policy</a>
                </div>
                <div class="column">
                    <a class="button">White Paper</a>
                </div>
            </div>
            <div>
                <img src="../assets/infographic.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "DocumentsSection"
};
</script>

<style scoped>
#documents-section {
  padding: 50px;
}

#content a {
  text-transform: uppercase;
  border-radius: 0;
  background-color: transparent;
  color: #f3c736;
  border-color: #f3c736;
  font-weight: 500;
  font-size: 20px;
  box-shadow: 0px 12px 18px -15px #000 !important;
  margin: 5%;
}

#content a:hover {
  color: white;
  border-color: white;
}

#content img {
  width: 80%;
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
    #content img{
        width: 100%;
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
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
  }
}
</style>

<template>
    <div id="documents-section">
        <div id="content">
            <div>
                <h1>Documents</h1>
            </div>
            <div class="columns">
              <div class="column">
                    <router-link to="/whitepaper/">
                      <img src="../assets/whitepaper-cover.png">
                    </router-link>
                  </div>
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

img {
  width: 25%;
  border: 3px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
  transition: transform 0.9s;
}

img:hover {
  transform: scale(1.1);
}

h1 {
  font-size: 45px;
  text-align: center;
  /* color: #f3c736; */
  color: #091141;
  text-transform: uppercase;
  margin-bottom: 50px;
  font-weight: bold;
}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  #content img {
    width: 90%;
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

  #documents-section {
    padding: 50px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
    padding-bottom: 0px;
  }

  #documents-section {
    padding: 50px;
  }
}
</style>

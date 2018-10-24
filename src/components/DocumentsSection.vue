<template>
    <div id="documents-section">
        <div id="content">
            <div>
                <h1>Documents</h1>
            </div>
            <div class="columns is-gapless">
              <div class="column">

              </div>
              <div class="column">
                <router-link to="/whitepaper/" class="dugme">
                    <i class="fas fa-file-pdf"></i> Whitepaper
                </router-link>
              </div>
              <div class="column">
                <a href="https://s3.us-east-2.amazonaws.com/hercmedia/AcademicPaper.pdf" target="_blank" class="dugme">
                    <i class="fas fa-file-pdf"></i> Academic Paper
                </a>
              </div>
              <div class="column">
                
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
  background-color: #fafafa;
}

#content {
  max-width: 1080px;
  margin: auto;
}

.dugme {
  font-size: 20px;
  background-color: #f3c736;
  color: #091141;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 5;
  position: relative;
  border-radius: 5px;
}

.dugme:hover {
  background-color: #091141;
  border: 1px solid #f3c736;
  color: #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
}

i {
  margin-right: 1%;
}

h1 {
  font-size: 30px;
  text-align: center;
  color: #091141;
  text-transform: uppercase;
  margin-bottom: 5%;
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
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #documents-section {
    padding: 50px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #documents-section {
    padding: 50px;
  }
}
</style>

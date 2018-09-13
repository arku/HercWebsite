<template>
    <div id="top-section">
        <div id="content">
          <div class="columns">
            <div class="column">
              <iframe width="90%" height="415" src="https://www.youtube.com/embed/177Ub1YUdgQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div class="column">
              <div>
                <h1>DECENTRALIZED SUPPLY CHAIN<br> MANAGEMENT SOFTWARE</h1>
            </div>
            <!-- Begin Constant Contact Inline Form Code -->
            <div id="subscribe-form">
              <div class="ctct-inline-form" data-form-id="1b7fd750-5561-4cd8-a57d-7e6611366a52"></div>
            <!-- End Constant Contact Inline Form Code -->
            </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "TopSection"
};
</script>
<style scoped>
#top-section {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #fafafa;
}

#top-section button:hover {
  color: #091141;
  border-color: #f3c736;
  background-color: #f3c736;
}

h1 {
  font-size: 35px;
  text-align: center;
  color: #091141;
  font-weight: bold;
}

h3 {
  text-transform: uppercase;
  color: #f3c736;
  font-size: 20px;
  margin-bottom: 50px;
}

.center-field {
  text-align: center;
}

#subscribe-form {
  width: 30%;
  margin: auto;
  color: #f3c736;
}

/* #form-background {
  background-color: transparent !important;
}

.ctct-inline-form {
  background-color: transparent !important;
} */

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}

/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  #top-section input {
    width: 40%;
  }
}

/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  h1 {
    padding-top: 80px;
    padding-bottom: 80px;
    font-size: 40px;
  }

  h3 {
    font-size: 18px;
  }

  #top-section input {
    width: 50%;
  }

  #top-section button {
    font-size: 18px;
    width: 200px;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #subscribe-form {
    width: 90%;
    margin: auto;
    color: #f3c736;
  }

  h1 {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 30px;
    width: 90%;
    margin: auto;
  }

  h3 {
    font-size: 18px;
  }

  #top-section input {
    width: 50%;
  }

  #top-section button {
    font-size: 16px;
    width: 200px;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 30px;
  }
}
</style>
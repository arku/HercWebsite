<template>
    <div id="top-section">
        <div id="content">
            <div>
                <h1>DECENTRALIZED SUPPLY CHAIN<br> MANAGEMENT SOFTWARE</h1>
            </div>
            <!-- <div>
                <h3>Leave Your Email to Stay <br> Updated With Latest News!</h3>
              <div class="field">
                <div class="control center-field">
                  <input class="input is-danger" type="email" placeholder="Email" value="">
                </div>
                <p class="help is-danger">This email is invalid</p>
              </div>
            <div class="control center-field">
              <button class="button is-link">Subscribe</button>
            </div>
          </div> -->

          <!-- Begin Constant Contact Inline Form Code -->
          <div id="subscribe-form">
<div class="ctct-inline-form" data-form-id="1b7fd750-5561-4cd8-a57d-7e6611366a52"></div>
<!-- End Constant Contact Inline Form Code -->
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
  background-image: url("../assets/cubes.png");
  background-blend-mode: color-burn;
  background-size: initial;
  background-position: bottom left;
  background-repeat: no-repeat;
  background-color: #091141;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 0px;
  padding-right: 0px;
}

#top-section input {
  width: 300px;
  height: 50px;
  text-align: center;
  background-color: transparent;
  color: #f3c736;
  border-color: #f3c736;
  border-radius: 0;
  box-shadow: 0px 12px 18px -6px #000;
  font-size: 16px;
  font-weight: 400;
}

input::placeholder {
  color: #f3c736;
  font-size: 14px;
}

#top-section button {
  font-size: 20px;
  border-radius: 0;
  background-color: transparent;
  color: #f3c736;
  border-color: #f3c736;
  text-transform: uppercase;
  width: 300px;
  height: 50px;
  box-shadow: 0px 12px 18px -6px #000;
  font-weight: bold;
}

#top-section button:hover {
  color: #091141;
  border-color: #f3c736;
  background-color: #f3c736;
}

h1 {
  font-size: 45px;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  color: #f3c736;
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

#subscribe-form{
  width: 30%;
  margin: auto;
  color: #f3c736;
}

#form-background{
  background-color: transparent !important;
}

.ctct-inline-form{
  background-color: transparent !important;
}

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

  #top-section input {
    width: 80%;
  }

  #top-section button {
    font-size: 16px;
  }
}
</style>
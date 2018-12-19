<template>
  <div id="get-started-section">
    <div id="content">
      <div id="mobile-version">
        <h1>Leveraging
          <br>Bitcoin & Ethereum
          <br>Public Blockchains
        </h1>
        <img src="../../assets/get-started/phone.png">
        <br>
        <router-link to="/get-started" class="get-started-btn">Get Started</router-link>
        <p>The Hercules platform is decentralized
          <br>and powered by HERC tokens which are
          <br>required to record and validate the
          <br>supply chain data.
        </p>
      </div>
      <div id="desktop-version">
        <div class="columns">
          <div class="column">
            <img src="../../assets/get-started/laptop.png">
          </div>
          <div class="column">
            <h1>Leveraging
              <br>Bitcoin & Ethereum
              <br>Public Blockchains
            </h1>
            <router-link to="/get-started" class="get-started-btn">Get Started</router-link>
          </div>
        </div>
        <p>The Hercules platform is decentralized and
          <br>powered by HERC tokens which are required to
          <br>record and validate the supply chain data.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetStartedSection"
};
</script>

<style scoped lang="scss">
#get-started-section {
  padding: 50px;
  background-color: $herc-blue;
  background-image: url("../../assets/get-started/bg.png");
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  @include herc-gold-h1;
  color: white;
}

img {
  margin-bottom: 5%;
}

.get-started-btn {
  color: white;
  border: 2px solid $herc-gold;
  border-radius: 4px;
  text-transform: uppercase;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10%;
  font-weight: bold;
}

.get-started-btn:hover {
  background-color: $herc-gold;
  color: $herc-blue;
  box-shadow: $herc-shadow;
}

p {
  margin-top: 10%;
  font-size: 18px;
  color: white;
}

#desktop-version {
  padding: 100px;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
  #mobile-version {
    display: none;
  }
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #mobile-version {
    display: none;
  }
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  #mobile-version {
    display: none;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  #mobile-version {
    display: none;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #desktop-version {
    display: none;
  }
  #mobile-version {
    display: inherit;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

<template>
    <div id="partners-section">
        <div id="content">
            <div>
                <h1>Partners</h1>
            </div>
            <div class="hide-desktop">
                <div class="columns">
                    <div class="column">
                        <img src="../assets/partners/factom.png">
                    </div>
                    <div class="column">
                        <img src="../assets/partners/storj.png">
                    </div>
                    <div class="column">
                        <img src="../assets/partners/bfc.png">
                    </div>
                    <div class="column">
                        <img src="../assets/partners/coinpayments.png">
                    </div>
                    <div class="column">
                        <img src="../assets/partners/rivetz.png">
                    </div>
                    <div class="column">
                        <img src="../assets/partners/cayman.png">
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        
                    </div>
                    <div class="column">
                        <img src="../assets/partners/amagi.gif">
                    </div>
                    <div class="column">
                        <img src="../assets/partners/shipstation.png">
                    </div>
                    <div class="column">
                        <img src="../assets/partners/idology.png">
                    </div>
                    <div class="column">
                        <img src="../assets/partners/earlyiq.png">
                    </div>
                    <div class="column">
                        
                    </div>
                </div>
            </div>

            <!-- Mobile view -->
            <div class="hide-mobile">
                <div class="columns is-mobile">
                    
                    <div class="column is-half-mobile">
                        <img src="../assets/partners/factom.png">
                    </div>
                    <div class="column column is-half-mobile">
                        <img src="../assets/partners/storj.png">
                    </div>
                </div>
                <div class="columns is-mobile">
                    <div class="column is-half-mobile">
                        <img src="../assets/partners/bfc.png">
                    </div>
                    <div class="column is-half-mobile">
                        <img src="../assets/partners/coinpayments.png">
                    </div>
                </div>
                <div class="columns is-mobile">
                    <div class="column">
                        <img src="../assets/partners/rivetz.png">
                    </div>
                    <div class="column">
                        <img src="../assets/partners/cayman.png">
                    </div>
                </div>
                <div class="columns is-mobile">
                    <div class="column is-half-mobile">
                        <img src="../assets/partners/amagi.gif">
                    </div>
                    <div class="column is-half-mobile">
                        <img src="../assets/partners/shipstation.png">
                    </div>
                </div>
                <div class="columns is-mobile">
                    <div class="column is-half-mobile">
                        <img src="../assets/partners/idology.png">
                    </div>
                    <div class="column is-half-mobile">
                        <img src="../assets/partners/earlyiq.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "PartnersSection"
};
</script>
<style scoped>
#partners-section {
  padding: 50px;
  background-color: #fafafa;
}

h1 {
  font-size: 45px;
  color: #091141;
  text-transform: uppercase;
  margin-bottom: 5%;
  font-weight: bold;
}

.hide-mobile {
  display: none;
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
    font-size: 40px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    font-size: 30px;
  }

  .hide-desktop {
    display: none;
  }

  .hide-mobile{
      display: unset;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
  }
}
</style>
<template>
    <div id="hipr-section">
        <h1>HERC's First Internal Control<br> 
Encrypted Performance Report</h1>
        <div id="content">
            
                    <img src="../../assets/cube.png">
                    <img src="../../assets/hipr_perfomance_flow.png">
            
        </div>
    </div>
</template>

<script>
export default {
  name: "HiprSection"
};
</script>

<style scoped lang="scss">
#content {
  max-width: 1080px;
  margin: auto;
  padding: 50px;
}

h1 {
  color: $herc-gold;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: $herc-blue;
  padding: 20px;
  line-height: 1.2em;
}

img {
  border: 2px solid $herc-gold;
  box-shadow: $herc-shadow;
  border-radius: 5px;
  width: 80%;
  margin: auto;
  margin-bottom: 5%;
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
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  img {
    width: 100%;
  }

  h1 {
    font-size: 24px;
  }

  br {
    display: none;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 22px;
  }
}
</style>
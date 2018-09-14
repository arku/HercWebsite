<template>
    <div id="hipr-section">
        <h1>Hipr internal control<br>
                emcrypted performance report
        </h1>
        <div id="content">
            <img src="../assets/cube.png">
        </div>
    </div>
</template>

<script>
export default {
  name: "HiprSection"
};
</script>

<style scoped>
#content {
  padding: 50px;
  background-color: #fafafa;
}

h1 {
  color: #f3c736;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #091141;
  padding: 20px;
  line-height: 1.2em;
}

img {
  width: 50%;
  border: 2px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
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
    img{
        width: 100%;
    }

    h1{
        font-size: 24px;
    }

    br{
        display: none;
    }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
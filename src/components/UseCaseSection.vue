<template>
    <div id="usecase-section">
        <div id="content">
            <h1>Featured Use Case</h1>
        </div>
        <video controls poster="../assets/HERC_USECASE.png">
            <source src="../assets/usecase.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div>

        </div>
    </div>
</template>

<script>
export default {
  name: "UseCaseSection"
};
</script>

<style scoped>
#usecase-section {
  padding: 50px;
  background-color: #091141;
}

#content{
    max-width: 1080px;
    margin: auto;
}

h1 {
  font-size: 40px;
  color: #f3c736;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5%;
}

video {
  border: 1px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
  width: 60%;
  margin: auto;
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
    video{
        width: 100%;
    }

    h1{
        font-size: 30px;
    }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
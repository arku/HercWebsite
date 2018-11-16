<template>
    <div id="usecase-section">
        <div id="content">
            <h1>Featured Use Case</h1>
        </div>
        <video controls poster="../../assets/HERC_USECASE.png">
            <source src="../../assets/videos/usecase.mp4" type="video/mp4">
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

<style scoped lang="scss">
#usecase-section {
  padding: 50px;
  background-color: $herc-blue;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  font-size: 30px;
  color: $herc-gold;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5%;
}

video {
  border: 1px solid $herc-gold;
  box-shadow: $herc-shadow;
  width: 60%;
  margin: auto;
  border-radius: 5px;
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
  video {
    width: 100%;
  }

  h1 {
    font-size: 24px;
    line-height: 1.2em;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
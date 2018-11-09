<template>
    <div id="hiw-section">
        <div id="content">
             <div>
                <h1>How it Works</h1>
            </div>
              <video controls poster="../../assets/hiw.png">
                <source src="../../assets/videos/steve.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
        </div>
    </div>
</template>

<script>
export default {
  name: "HiwSection"
};
</script>

<style scoped>
#hiw-section {
  padding: 50px;
  background-color: #091141;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  font-size: 30px;
  color: #f3c736;
  font-weight: bold;
  margin-bottom: 5%;
}

video {
  width: 60%;
  border: 2px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
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
    width: 90%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

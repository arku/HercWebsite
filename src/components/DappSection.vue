<template>
    <div id="dapp-section">
        <div id="content">
            <h1>Check out our mobile dapp</h1>
            <video controls>
                <source src="../assets/dappvideo.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>

<script>
export default {
  name: "DappSection"
};
</script>

<style scoped>
#dapp-section {
  padding: 50px;
  background-color: #091141;
}

h1 {
  color: #f3c736;
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 2%;
}

video {
  width: 20%;
  margin: auto;
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
video{
    width: 50%;
}
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
    video{
        width: 90%;
    }

    h1{
        font-size: 30px;
    }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

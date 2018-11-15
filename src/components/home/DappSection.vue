<template>
    <div id="dapp-section">
        <div id="content">
            <h1>Check out our mobile dapp</h1>
            <video controls poster="../../assets/HERC_dAPP.png">
                <source src="../../assets/videos/dappvideo.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video><br>
            <router-link to="/utilities">
              <button>Check out our Utilities</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "DappSection"
};
</script>

<style scoped lang="scss">
#dapp-section {
  padding: 50px;
  background-color: $herc-blue;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  color: $herc-gold;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 2%;
}

video {
  width: 20%;
  margin: auto;
  margin-bottom: 2%;
  border: 2px solid $herc-gold;
  box-shadow: $herc-shadow;
  border-radius: 5px;
}

button {
  @include herc-gold-button;
  border-radius: 5px;
  font-size: 20px;
}

button:hover {
  @include herc-gold-button-hover;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  video {
    width: 50%;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  video {
    width: 90%;
  }

  h1 {
    font-size: 30px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

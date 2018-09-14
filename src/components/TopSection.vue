<template>
    <div id="top-section">
      <div id="content">
        <div>
          <h1>DECENTRALIZED SUPPLY CHAIN<br> MANAGEMENT SOFTWARE</h1>
        </div>
          <div class="columns">
            <div class="column">
              <!-- <iframe width="90%" height="360" src="https://www.youtube.com/embed/177Ub1YUdgQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
              <video width="90%" height="360" controls>
                <source src="../assets/steve.mp4" type="video/mp4">
              Your browser does not support the video tag.
              </video>
            </div>
            <div class="column">
            <!-- Begin Constant Contact Inline Form Code -->
            <div id="subscribe-form">
              <div class="ctct-inline-form" data-form-id="1b7fd750-5561-4cd8-a57d-7e6611366a52"></div>
            <!-- End Constant Contact Inline Form Code -->
            </div>
            </div>
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
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #fafafa;
}

#top-section button:hover {
  color: #091141;
  border-color: #f3c736;
  background-color: #f3c736;
}

h1 {
  font-size: 40px;
  text-align: center;
  color: #091141;
  font-weight: bold;
  margin-bottom: 5%;
}

#subscribe-form {
  width: 70%;
  margin: auto;
  color: #f3c736;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}

/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  iframe {
    height: 310px;
  }

  video {
    height: 310px;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}

/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  h1 {
    font-size: 30px;
  }

  iframe {
    margin-top: 30px;
    height: 200px;
  }

  video {
    margin-top: 30px;
    height: 200px;
  }

  #subscribe-form {
    width: 90%;
    margin: auto;
    color: #f3c736;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #subscribe-form {
    width: 100%;
    margin: auto;
    color: #f3c736;
  }

  h1 {
    font-size: 30px;
    margin: auto;
    margin-bottom: 5%;
    line-height: 1.2em;
  }

  iframe {
    height: 170px;
  }

  video {
    height: 170px;
    width: 100%;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
<template>
    <div id="ecosystem-section">
        <div id="content">
            <div>
                <h1>The HERC Ecosystem</h1>
                <p>HERC is designed to serve the 400+ million online users who
                     already collect, buy and sell digital items.</p>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="tab-wrapper">
                        <div class="card">
                            <div class="verticalTabs" id="left-div">
                                <div class="tabHeader active">
                                    <div class="tabText">Asset Creator</div>
                                </div>
                                <div class="tabHeader">
                                    <div class="tabText">Originator</div>
                                </div>
                                <div class="tabHeader">
                                    <div class="tabText">Recipient</div>
                                </div>
                                <div class="tabHeader">
                                    <div class="tabText">Validation Gamer</div>
                                </div>
                            </div>
                            <div class ="textHolder">
                                <div class="tabTitle">Create you own Supply Chain Assets</div>
                                <div class="textBody">
                                  <p>
                                    HERC enables a new generation of business owners with complete data
                                     integrity solution with per use pricing for every budget
                                  </p>
                                </div>
                                <div class="tabTitle">Create you own Supply Chain Assets</div>
                                <div class="textBody">
                                  <p>
                                    HERC enables a new generation of business owners with complete data
                                     integrity solution with per use pricing for every budget
                                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "EcosystemSection"
};

$(document).ready(function() {
  // Check for click events on the navbar burger icon
  var tabTitles = [
    "Asset Creator",
    "Originator",
    "Recipient",
    "Validation Gamer"
  ];

  $(".tabHeader").click(function() {
    $(".tabHeader").removeClass("active");
    var position = $(this).position();
    var top = position.top;
    $(".active").css("top", top);
    $(this).addClass("active");
    var text = $(this)
      .text()
      .trim();
    switch (text) {
      case "Asset Creator":
        $(".tabTitle").text(tabTitles[0]);
        break;
      case "Originator":
        $(".tabTitle").text(tabTitles[1]);
        break;
      case "Recipient":
        $(".tabTitle").text(tabTitles[2]);
        break;
      case "Validation Gamer":
        $(".tabTitle").text(tabTitles[3]);
        break;
      default:
        $(".tabTitle").text("Select A TAB");
        break;
    }
  });
});
</script>

<style scoped>
#ecosystem-section {
  padding: 50px;
  padding-left: 200px;
  padding-right: 200px;
}

h1 {
  font-size: 40px;
  color: #091141;
  font-weight: bold;
}

p {
  color: #091141;
  margin-bottom: 5%;
}

#left-div {
  padding: 50px;
  background-image: linear-gradient(white, #fafafa, white);
}

.card {
  display: flex;
  flex-direction: row;
  background-color: #fafafa;
}

.tabHeader {
  width: 200px;
  height: 50px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  margin: 10%;
  border: 1px solid #f3c736;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}

.active {
  position: relative;
  z-index: 50;
  width: 200px;
  height: 50px;
  background-color: #f3c736;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  border: 1px solid #091141;
}

.tabText {
  position: absolute;
  color: #091141;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-top: 12px;
  margin-left: 23px;
}

.textHolder {
  padding: 80px;
  text-align: justify;
  background-color: white;
}

.tabTitle {
  font-size: 24px;
  font-weight: bold;
  color: #091141;
  margin-bottom: 5%;
}

/* Pop */
@-webkit-keyframes tabHeader {
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
@keyframes tabHeader {
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

.tabHeader:hover {
  -webkit-animation-name: tabHeader;
  animation-name: tabHeader;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  #ecosystem-section {
    padding: 50px;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  #ecosystem-section {
    padding: 50px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #ecosystem-section {
    display: none;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

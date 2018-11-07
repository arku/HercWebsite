<template>
    <div class="home">
        <NavBar></NavBar>
        <split-test name="landing-randomizer">
          <landing-page-one slot="A" chance="1"></landing-page-one>
          <!-- <landing-page-two slot="B" chance="1"></landing-page-two> -->
          <landing-page-three slot="C" chance="1"></landing-page-three>
          <landing-page-four slot="D" chance="1"></landing-page-four>
          <landing-page-five slot="E" chance="1"></landing-page-five>
          <landing-page-six slot="F" chance="1"></landing-page-six>
          <landing-page-seven slot="G" chance="1"></landing-page-seven>
          <landing-page-eight slot="H" chance="1"></landing-page-eight>
          <landing-page-nine slot="I" chance="1"></landing-page-nine>
        </split-test>
        <!-- <TopSection></TopSection> -->
        <!-- <CountdownSection></CountdownSection> -->
        <HiwSection></HiwSection>
        <CommunitySection></CommunitySection>
        <BlurbSection></BlurbSection>
        <FeaturedSection></FeaturedSection>
        <HercSection></HercSection>
        <!-- <EtymologySection></EtymologySection> -->
        <VideoSection></VideoSection>
        <HiprSection></HiprSection>
        <TableSection></TableSection>
        <!-- <EcosystemSection></EcosystemSection> -->
        <DappSection></DappSection>
        <RoadmapHorizontalSection></RoadmapHorizontalSection>
        <RoadmapSection></RoadmapSection>
        <PartnersSection></PartnersSection>
        <UseCaseSection></UseCaseSection>
        <DocumentsSection></DocumentsSection>
        <!-- <ProtocolCostSection></ProtocolCostSection> -->
        <BubbleSection></BubbleSection>
        <TeamSection></TeamSection>
        <BuySection></BuySection>
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>

<!-- Trigger/Open The Modal -->
<!-- <button id="myBtn">Open Modal</button> -->

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <!-- &times; -->
    
    <div class="modal-main-content">
      <h1>HERC Token has been launched!</h1>
    <p>You are able to buy HERC now at the discounted price!</p>
    <a href="https://purchase.herc.one" @click="popupAction">BUY NOW</a>
    <span class="close">I want to do some research first</span>
    </div>
  </div>

</div>



    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
// import TopSection from "@/components/TopSection.vue";
import BlurbSection from "@/components/BlurbSection.vue";
// import EtymologySection from "@/components/EtymologySection.vue";
// import ProtocolCostSection from "@/components/ProtocolCostSection.vue";
import TableSection from "@/components/TableSection.vue";
import VideoSection from "@/components/VideoSection.vue";
import RoadmapSection from "@/components/RoadmapSection.vue";
import RoadmapHorizontalSection from "@/components/RoadmapHorizontalSection.vue";
import PartnersSection from "@/components/PartnersSection.vue";
import DocumentsSection from "@/components/DocumentsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import TeamSection from "@/components/TeamSection.vue";
import FeaturedSection from "@/components/FeaturedSection.vue";
import CommunitySection from "@/components/CommunitySection.vue";
import HercSection from "@/components/HercSection.vue";
// import EcosystemSection from "@/components/EcosystemSection.vue";
import HiprSection from "@/components/HiprSection.vue";
import BubbleSection from "@/components/BubbleSection.vue";
import UseCaseSection from "@/components/UseCaseSection.vue";
import DappSection from "@/components/DappSection.vue";
import HiwSection from "@/components/HiwSection.vue";
// import CountdownSection from "@/components/CountdownSection.vue";
import LandingPageOne from "@/components/LandingPages/LandingPageOne.vue";
// import LandingPageTwo from "@/components/LandingPages/LandingPageTwo.vue";
import LandingPageThree from "@/components/LandingPages/LandingPageThree.vue";
import LandingPageFour from "@/components/LandingPages/LandingPageFour.vue";
import LandingPageFive from "@/components/LandingPages/LandingPageFive.vue";
import LandingPageSix from "@/components/LandingPages/LandingPageSix.vue";
import LandingPageSeven from "@/components/LandingPages/LandingPageSeven.vue";
import LandingPageEight from "@/components/LandingPages/LandingPageEight.vue";
import LandingPageNine from "@/components/LandingPages/LandingPageNine.vue";
import BuySection from "@/components/BuySection.vue";

export default {
  name: "home",
  components: {
    NavBar,
    // TopSection,
    LandingPageOne,
    // LandingPageTwo,
    LandingPageThree,
    LandingPageFour,
    LandingPageFive,
    LandingPageSix,
    LandingPageSeven,
    LandingPageEight,
    LandingPageNine,
    CommunitySection,
    BlurbSection,
    HercSection,
    // EtymologySection,
    // ProtocolCostSection,
    TableSection,
    // EcosystemSection,
    VideoSection,
    HiprSection,
    RoadmapHorizontalSection,
    RoadmapSection,
    PartnersSection,
    BubbleSection,
    DocumentsSection,
    FeaturedSection,
    UseCaseSection,
    ContactSection,
    FooterSection,
    TeamSection,
    DappSection,
    HiwSection,
    BuySection
    // CountdownSection
  },
  methods: {
    popupAction() {
      this.$ga.event({
        eventCategory: "Homepage",
        eventAction: "Popup buy button clicked",
        eventLabel: "popup"
      });
    },
    showPopup() {
      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal
      btn.onclick = function() {
        modal.style.display = "block";
      };

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  },
  mounted() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
};
</script>

<style>
.btn-to-top {
  width: 40px;
  height: 40px;
  border-color: #f3c736;
  background-color: transparent;
  color: #f3c736;
  font-size: 16px;
  line-height: 20px;
  border-radius: 5px;
}

.btn-to-top:hover {
  box-shadow: 0px 12px 18px -6px #000;
  background-color: #f3c736;
  color: #091141;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
}

.modal h1 {
  color: #f3c736;
  font-size: 30px;
}

.modal p {
  color: white;
  margin-bottom: 5%;
}

.modal a {
  background-color: #f3c736;
  border: 2px solid transparent;
  border-radius: 5px !important;
  font-size: 16px;
  text-transform: uppercase;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  color: #091141;
  animation-name: flash;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  -webkit-animation-name: flash;
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;

  -moz-animation-name: flash;
  -moz-animation-duration: 1s;
  -moz-animation-timing-function: linear;
  -moz-animation-iteration-count: infinite;
}

.modal span {
  text-align: center;
  color: white;
  margin: auto;
  margin-top: 10%;
  width: 100%;
  font-weight: normal;
  line-height: 1.2em;
}

.modal span:hover {
  color: #f3c736;
}

@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.modal a:hover {
  background-color: #091141;
  color: #f3c736;
  border: 2px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
}

/* Modal Content */
.modal-content {
  background-color: #091141;
  border-radius: 5px;
  box-shadow: 0px 12px 18px -6px #000;
  margin: auto;
  padding: 15px;
  padding-top: 5px;
  padding-bottom: 50px;
  border: 2px solid #f3c736;
  width: 80%;
  margin: auto !important;
}

.modal-main-content {
  padding: 50px;
}

/* The Close Button */
.close {
  color: #f3c736;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
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
  .modal h1 {
    line-height: 1.2em;
    margin-bottom: 10%;
  }

  .modal p {
    margin-bottom: 10%;
  }

  .modal-main-content {
    padding: 20px;
  }

  .modal-content {
    width: 90% !important;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

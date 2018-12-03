<template>
  <div class="home">
    <NavBar></NavBar>
    <split-test name="landing-randomizer">
      <landing-page-one slot="A" chance="1"></landing-page-one>
      <landing-page-three slot="C" chance="1"></landing-page-three>
      <landing-page-four slot="D" chance="1"></landing-page-four>
      <landing-page-five slot="E" chance="1"></landing-page-five>
      <landing-page-six slot="F" chance="1"></landing-page-six>
      <landing-page-seven slot="G" chance="1"></landing-page-seven>
      <landing-page-eight slot="H" chance="1"></landing-page-eight>
      <landing-page-nine slot="I" chance="1"></landing-page-nine>
    </split-test>
    <!-- <TopSection></TopSection> -->
    <HiwSection></HiwSection>
    <CommunitySection></CommunitySection>
    <SliderSection></SliderSection>
    <BlurbSection></BlurbSection>
    <FeaturedSection></FeaturedSection>
    <HercSection></HercSection>
    <VideoSection></VideoSection>
    <HiprSection></HiprSection>
    <CalculatorSection></CalculatorSection>
    <DappSection></DappSection>
    <TheRoadmapSection></TheRoadmapSection>
    <PartnersSection></PartnersSection>
    <UseCaseSection></UseCaseSection>
    <DocumentsSection></DocumentsSection>
    <BubbleSection></BubbleSection>
    <TeamSection></TeamSection>
    <BuySection></BuySection>
    <ContactSection></ContactSection>
    <FooterSection></FooterSection>
    <back-to-top bottom="100px" right="10px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
// import TopSection from "@/components/TopSection.vue";
import BlurbSection from "@/components/home/BlurbSection.vue";
import VideoSection from "@/components/home/VideoSection.vue";
import PartnersSection from "@/components/home/PartnersSection.vue";
import DocumentsSection from "@/components/home/DocumentsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import TeamSection from "@/components/home/TeamSection.vue";
import FeaturedSection from "@/components/home/FeaturedSection.vue";
import CommunitySection from "@/components/home/CommunitySection.vue";
import HercSection from "@/components/home/HercSection.vue";
import HiprSection from "@/components/home/HiprSection.vue";
import BubbleSection from "@/components/home/BubbleSection.vue";
import UseCaseSection from "@/components/home/UseCaseSection.vue";
import DappSection from "@/components/home/DappSection.vue";
import HiwSection from "@/components/home/HiwSection.vue";
import LandingPageOne from "@/components/LandingPages/LandingPageOne.vue";
import LandingPageThree from "@/components/LandingPages/LandingPageThree.vue";
import LandingPageFour from "@/components/LandingPages/LandingPageFour.vue";
import LandingPageFive from "@/components/LandingPages/LandingPageFive.vue";
import LandingPageSix from "@/components/LandingPages/LandingPageSix.vue";
import LandingPageSeven from "@/components/LandingPages/LandingPageSeven.vue";
import LandingPageEight from "@/components/LandingPages/LandingPageEight.vue";
import LandingPageNine from "@/components/LandingPages/LandingPageNine.vue";
import BuySection from "@/components/home/BuySection.vue";
import SliderSection from "@/components/home/SliderSection.vue";
import CalculatorSection from "@/components/home/CalculatorSection.vue";
import TheRoadmapSection from "@/components/home/TheRoadmapSection.vue";

export default {
  name: "home",
  components: {
    NavBar,
    // TopSection,
    LandingPageOne,
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
    VideoSection,
    HiprSection,
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
    BuySection,
    SliderSection,
    CalculatorSection,
    TheRoadmapSection
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
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>

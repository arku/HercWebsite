<template>
    <div class="home">
        <NavBar></NavBar>
        <!-- <split-test name="landing-randomizer">
          <landing-page-one slot="A" chance="1"></landing-page-one>
          <landing-page-two slot="B" chance="1"></landing-page-two>
          <landing-page-three slot="C" chance="1"></landing-page-three>
          <landing-page-four slot="D" chance="1"></landing-page-four>
          <landing-page-five slot="E" chance="1"></landing-page-five>
          <landing-page-six slot="F" chance="1"></landing-page-six>
          <landing-page-seven slot="G" chance="1"></landing-page-seven>
          <landing-page-eight slot="H" chance="1"></landing-page-eight>
          <landing-page-nine slot="I" chance="1"></landing-page-nine>
        </split-test> -->
        <TopSection></TopSection>
        <CountdownSection></CountdownSection>
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
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import TopSection from "@/components/TopSection.vue";
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
import CountdownSection from "@/components/CountdownSection.vue";
import LandingPageOne from "@/components/LandingPages/LandingPageOne.vue";
// import LandingPageTwo from "@/components/LandingPages/LandingPageTwo.vue";
import LandingPageThree from "@/components/LandingPages/LandingPageThree.vue";
import LandingPageFour from "@/components/LandingPages/LandingPageFour.vue";
import LandingPageFive from "@/components/LandingPages/LandingPageFive.vue";
import LandingPageSix from "@/components/LandingPages/LandingPageSix.vue";
import LandingPageSeven from "@/components/LandingPages/LandingPageSeven.vue";
import LandingPageEight from "@/components/LandingPages/LandingPageEight.vue";
import LandingPageNine from "@/components/LandingPages/LandingPageNine.vue";

export default {
  name: "home",
  components: {
    NavBar,
    TopSection,
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
    CountdownSection
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

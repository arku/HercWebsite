<template>
    <div class="home">
        <NavBar></NavBar>
        <TopSection></TopSection>
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
import EcosystemSection from "@/components/EcosystemSection.vue";
import HiprSection from "@/components/HiprSection.vue";
import BubbleSection from "@/components/BubbleSection.vue";
import UseCaseSection from "@/components/UseCaseSection.vue";
import DappSection from "@/components/DappSection.vue";

export default {
  name: "home",
  components: {
    NavBar,
    TopSection,
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
    DappSection
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

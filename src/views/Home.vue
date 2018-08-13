<template>
    <div class="home">
        <NavBar></NavBar>
        <TopSection></TopSection>
        <BlurbSection></BlurbSection>
        <EtymologySection></EtymologySection>
        <ProtocolCostSection></ProtocolCostSection>
        <TableSection></TableSection>
        <VideoSection></VideoSection>
        <RoadmapHorizontalSection></RoadmapHorizontalSection>
        <RoadmapSection></RoadmapSection>
        <DocumentsSection></DocumentsSection>
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
import EtymologySection from "@/components/EtymologySection.vue";
import ProtocolCostSection from "@/components/ProtocolCostSection.vue";
import TableSection from "@/components/TableSection.vue";
import VideoSection from "@/components/VideoSection.vue";
import RoadmapSection from "@/components/RoadmapSection.vue";
import RoadmapHorizontalSection from "@/components/RoadmapHorizontalSection.vue";
import DocumentsSection from "@/components/DocumentsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import TeamSection from "@/components/TeamSection.vue";

export default {
  name: "home",
  components: {
    NavBar,
    TopSection,
    BlurbSection,
    EtymologySection,
    ProtocolCostSection,
    TableSection,
    VideoSection,
    RoadmapHorizontalSection,
    RoadmapSection,
    DocumentsSection,
    ContactSection,
    FooterSection,
    TeamSection
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

.btn-to-top:hover{
  box-shadow: 0px 12px 18px -6px #000;
  background-color: #f3c736;
  color: #091141;
}
</style>

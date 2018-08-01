<template>
    <div class="home">
        <TopSection></TopSection>
        <BlurbSection></BlurbSection>
        <EtymologySection></EtymologySection>
        <ProtocolCostSection></ProtocolCostSection>
        <TableSection></TableSection>
        <VideoSection></VideoSection>
        <RoadmapSection></RoadmapSection>
        <DocumentsSection></DocumentsSection>
        <TeamSection></TeamSection>
        <GithubSection></GithubSection>
        <FooterSection></FooterSection>
    </div>
</template>
<script>
import TopSection from "@/components/TopSection.vue";
import BlurbSection from "@/components/BlurbSection.vue";
import EtymologySection from "@/components/EtymologySection.vue";
import ProtocolCostSection from "@/components/ProtocolCostSection.vue";
import TableSection from "@/components/TableSection.vue";
import VideoSection from "@/components/VideoSection.vue";
import RoadmapSection from "@/components/RoadmapSection.vue";
import DocumentsSection from "@/components/DocumentsSection.vue";
import GithubSection from "@/components/GithubSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import TeamSection from "@/components/TeamSection.vue";

export default {
  name: "home",
  components: {
    TopSection,
    BlurbSection,
    EtymologySection,
    ProtocolCostSection,
    TableSection,
    VideoSection,
    RoadmapSection,
    DocumentsSection,
    GithubSection,
    FooterSection,
    TeamSection
  }
};
</script>

<template>
    <div class="home">
        <TopSection></TopSection>
        <BlurbSection></BlurbSection>
        <HowItWorksSection></HowItWorksSection>
        <EtymologySection></EtymologySection>
        <ProtocolCostSection></ProtocolCostSection>
        <TableSection></TableSection>
        <VideoSection></VideoSection>
        <RoadmapSection></RoadmapSection>
        <DocumentsSection></DocumentsSection>
        <GithubSection></GithubSection>
    </div>
</template>
<script>
import TopSection from "@/components/TopSection.vue";
import BlurbSection from "@/components/BlurbSection.vue";
import HowItWorksSection from "@/components/HowItWorksSection.vue";
import EtymologySection from "@/components/EtymologySection.vue";
import ProtocolCostSection from "@/components/ProtocolCostSection.vue";
import TableSection from "@/components/TableSection.vue";
import VideoSection from "@/components/VideoSection.vue";
import RoadmapSection from "@/components/RoadmapSection.vue";
import DocumentsSection from "@/components/DocumentsSection.vue";
import GithubSection from "@/components/GithubSection.vue";

export default {
  name: "home",
  components: {
    TopSection,
    BlurbSection,
    HowItWorksSection,
    EtymologySection,
    ProtocolCostSection,
    TableSection,
    VideoSection,
    RoadmapSection,
    DocumentsSection,
    GithubSection
  }
};
</script>

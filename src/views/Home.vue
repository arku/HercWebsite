<template>
    <div class="home">
        <TopSection></TopSection>
        <BlurbSection></BlurbSection>
        <HowItWorksSection></HowItWorksSection>
        <EtymologySection></EtymologySection>
        <ProtocolCostSection></ProtocolCostSection>
        <TableSection></TableSection>
    </div>
</template>
<script>
import TopSection from "@/components/TopSection.vue";
import BlurbSection from "@/components/BlurbSection.vue";
import HowItWorksSection from "@/components/HowItWorksSection.vue";
import EtymologySection from "@/components/EtymologySection.vue";
import ProtocolCostSection from "@/components/ProtocolCostSection.vue";
import TableSection from "@/components/TableSection.vue";

export default {
  name: "home",
  components: {
    TopSection,
    BlurbSection,
    HowItWorksSection,
    EtymologySection,
    ProtocolCostSection,
    TableSection
  }
};
</script>

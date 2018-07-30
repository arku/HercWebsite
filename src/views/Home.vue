<template>
    <div class="home">
        <TopSection></TopSection>
        <BlurbSection></BlurbSection>
        <HowItWorksSection></HowItWorksSection>
        <EtymologySection></EtymologySection>
        <ProtocolCostSection></ProtocolCostSection>
    </div>
</template>
<script>
import TopSection from "@/components/TopSection.vue";
import BlurbSection from "@/components/BlurbSection.vue";
import HowItWorksSection from "@/components/HowItWorksSection.vue";
import EtymologySection from "@/components/EtymologySection.vue";
import ProtocolCostSection from "@/components/ProtocolCostSection.vue";

export default {
  name: "home",
  components: {
    TopSection,
    BlurbSection,
    HowItWorksSection,
    EtymologySection,
    ProtocolCostSection
  }
};
</script>

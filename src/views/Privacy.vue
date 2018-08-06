<template>
    <div class="privacy">
        <PrivacySection></PrivacySection>
        <FooterSection></FooterSection>
    </div>
</template>
<script>
import PrivacySection from "@/components/PrivacySection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "privacy",
  components: {
    PrivacySection,
    FooterSection
  }
};
</script>

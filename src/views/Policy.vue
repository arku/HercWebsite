<template>
    <div class="policy">
        <PolicySection></PolicySection>
        <FooterSection></FooterSection>
    </div>
</template>
<script>
import PolicySection from "@/components/PolicySection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "policy",
  components: {
    PolicySection,
    FooterSection
  }
};
</script>

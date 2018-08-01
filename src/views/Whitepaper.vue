<template>
    <div class="whitepaper">
        <WhitepaperSection></WhitepaperSection>
        <FooterSection></FooterSection>
    </div>
</template>
<script>
import WhitepaperSection from "@/components/WhitepaperSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "home",
  components: {
    WhitepaperSection,
    FooterSection
  }
};
</script>

<template>
    <div class="token-info">
        <NavBar></NavBar>
        <TokenInfoSection></TokenInfoSection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>

import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";
import TokenInfoSection from "@/components/TokenInfoSection.vue";

export default {
  name: "policy",
  components: {
    NavBar,
    TokenInfoSection,
    FooterSection
  }
};
</script>

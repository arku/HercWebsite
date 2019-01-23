<template>
    <div class="terms">
        <NavBar></NavBar>
        <TosSection></TosSection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import TosSection from "@/components/TosSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "terms",
  components: {
    NavBar,
    TosSection,
    FooterSection
  }
};
</script>

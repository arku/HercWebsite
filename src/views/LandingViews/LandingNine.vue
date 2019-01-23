<template>
    <div class="landing-nine">
        <NavBar></NavBar>
        <LandingPageNine></LandingPageNine>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import LandingPageNine from "@/components/LandingPages/LandingPageNine.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "LandingNine",
  components: {
    NavBar,
    LandingPageNine,
    FooterSection
  }
};
</script>

<template>
    <div class="landing-six">
        <NavBar></NavBar>
        <LandingPageSix></LandingPageSix>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import LandingPageSix from "@/components/LandingPages/LandingPageSix.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "LandingSix",
  components: {
    NavBar,
    LandingPageSix,
    FooterSection
  }
};
</script>

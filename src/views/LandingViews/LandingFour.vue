<template>
    <div class="landing-four">
        <NavBar></NavBar>
        <LandingPageFour></LandingPageFour>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import LandingPageFour from "@/components/LandingPages/LandingPageFour.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "LandingFour",
  components: {
    NavBar,
    LandingPageFour,
    FooterSection
  }
};
</script>

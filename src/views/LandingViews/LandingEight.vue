<template>
    <div class="landing-eight">
        <NavBar></NavBar>
        <LandingPageEight></LandingPageEight>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import LandingPageEight from "@/components/LandingPages/LandingPageEight.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "LandingEight",
  components: {
    NavBar,
    LandingPageEight,
    FooterSection
  }
};
</script>


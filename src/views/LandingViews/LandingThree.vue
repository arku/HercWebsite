<template>
    <div class="landing-three">
        <NavBar></NavBar>
        <LandingPageThree></LandingPageThree>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import LandingPageThree from "@/components/LandingPages/LandingPageThree.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "LandingThree",
  components: {
    NavBar,
    LandingPageThree,
    FooterSection
  }
};
</script>

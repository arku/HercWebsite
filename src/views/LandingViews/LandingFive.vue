<template>
    <div class="landing-five">
        <NavBar></NavBar>
        <LandingPageFive></LandingPageFive>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import LandingPageFive from "@/components/LandingPages/LandingPageFive.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "LandingFive",
  components: {
    NavBar,
    LandingPageFive,
    FooterSection
  }
};
</script>


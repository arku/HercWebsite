<template>
    <div class="landing-seven">
        <NavBar></NavBar>
        <LandingPageSeven></LandingPageSeven>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import LandingPageSeven from "@/components/LandingPages/LandingPageSeven.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "LandingSeven",
  components: {
    NavBar,
    LandingPageSeven,
    FooterSection
  }
};
</script>

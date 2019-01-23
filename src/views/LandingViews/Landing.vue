<template>
    <div class="landing">
        <NavBar></NavBar>
        <LandingPageOne></LandingPageOne>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import LandingPageOne from "@/components/LandingPages/LandingPageOne.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Landing",
  components: {
    NavBar,
    LandingPageOne,
    FooterSection
  }
};
</script>



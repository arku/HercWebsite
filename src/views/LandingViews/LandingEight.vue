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

<style scoped>
.btn-to-top {
  width: 40px;
  height: 40px;
  border-color: #f3c736;
  background-color: transparent;
  color: #f3c736;
  font-size: 16px;
  line-height: 20px;
}

.btn-to-top:hover {
  box-shadow: 0px 12px 18px -6px #000;
  background-color: #f3c736;
  color: #091141;
}
</style>

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

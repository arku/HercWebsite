<template>
  <div class="contact">
    <NavBar></NavBar>
    <CalculatorSection></CalculatorSection>
    <FooterSection></FooterSection>
    <back-to-top bottom="100px" right="10px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>
  </div>
</template>
<script>
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";
import CalculatorSection from "@/components/home/CalculatorSection.vue";

export default {
  name: "contact",
  components: {
    NavBar,
    CalculatorSection,
    FooterSection
  }
};
</script>

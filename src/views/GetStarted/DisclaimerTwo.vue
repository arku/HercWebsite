<template>
  <div class="disclaimer-two">
    <NavBar></NavBar>
    <DisclaimerTwoSection></DisclaimerTwoSection>
    <ContactSection></ContactSection>
    <FooterSection></FooterSection>
    <back-to-top bottom="100px" right="10px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>
  </div>
</template>
<script>
import DisclaimerTwoSection from "@/components/GetStarted/DisclaimerTwoSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "faq",
  components: {
    NavBar,
    DisclaimerTwoSection,
    ContactSection,
    FooterSection
  }
};
</script>



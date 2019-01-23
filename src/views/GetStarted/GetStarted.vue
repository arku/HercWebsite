<template>
  <div class="get-started">
    <NavBar></NavBar>
    <GetStartedSection></GetStartedSection>
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
import GetStartedSection from "@/components/GetStarted/GetStartedSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "get-started",
  components: {
    NavBar,
    GetStartedSection,
    ContactSection,
    FooterSection
  }
};
</script>



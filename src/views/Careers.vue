<template>
    <div class="careers">
        <NavBar></NavBar>
        <CareerSection></CareerSection>
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import CareerSection from "@/components/CareerSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "careers",
  components: {
    NavBar,
    CareerSection,
    ContactSection,
    FooterSection
  }
};
</script>

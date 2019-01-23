<template>
    <div class="dev-sources">
        <NavBar></NavBar>
        <DevSourcesSection></DevSourcesSection>
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import DevSourcesSection from "@/components/DevSourcesSection.vue";
import NavBar from "@/components/NavBar.vue";
import FooterSection from "@/components/FooterSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "contact",
  components: {
    NavBar,
    DevSourcesSection,
    FooterSection,
    ContactSection
  }
};
</script>

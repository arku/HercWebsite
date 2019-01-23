<template>
    <div class="metamask">
        <NavBar></NavBar>
        <MetamaskSection></MetamaskSection>
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import FooterSection from "@/components/FooterSection.vue";
import MetamaskSection from "@/components/MetamaskSection.vue";
import NavBar from "@/components/NavBar.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "metamask",
  components: {
    NavBar,
    MetamaskSection,
    ContactSection,
    FooterSection
  }
};
</script>

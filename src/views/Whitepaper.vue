<template>
    <div class="whitepaper">
        <NavBar></NavBar>
        <WhitepaperSection></WhitepaperSection>
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import WhitepaperSection from "@/components/WhitepaperSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "whitepaper",
  components: {
    NavBar,
    WhitepaperSection,
    ContactSection,
    FooterSection
  }
};
</script>

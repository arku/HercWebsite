<template>
    <div class="news">
        <NavBar></NavBar>
        <NewsSection></NewsSection>
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";
import NewsSection from "@/components/NewsSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "policy",
  components: {
    NavBar,
    NewsSection,
    FooterSection,
    ContactSection
  }
};
</script>

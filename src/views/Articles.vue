<template>
  <div class="articles">
    <NavBar></NavBar>
    <ArticlesSection></ArticlesSection>
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
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";
import ContactSection from "@/components/ContactSection.vue";
import ArticlesSection from "@/components/ArticlesSection.vue";

export default {
  name: "articles",
  components: {
    NavBar,
    ArticlesSection,
    ContactSection,
    FooterSection
  }
};
</script>

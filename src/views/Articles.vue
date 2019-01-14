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

<style scoped lang="scss">
.btn-to-top {
  width: 40px;
  height: 40px;
  border-color: $herc-gold;
  background-color: transparent;
  color: $herc-gold;
  font-size: 16px;
  line-height: 20px;
}

.btn-to-top:hover {
  box-shadow: $herc-shadow;
  background-color: $herc-gold;
  color: $herc-blue;
}
</style>

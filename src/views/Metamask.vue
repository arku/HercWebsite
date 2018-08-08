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

<style scoped>
.btn-to-top {
  width: 40px;
  height: 40px;
  border-color: #f3c736;
  background-color: transparent;
  color: #f3c736;
  font-size: 16px;
  line-height: 20px;
}

.btn-to-top:hover {
  box-shadow: 0px 12px 18px -6px #000;
  background-color: #f3c736;
  color: #091141;
}
</style>

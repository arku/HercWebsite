<template>
    <div class="policy">
        <NavBar></NavBar>
        <PolicySection></PolicySection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import PolicySection from "@/components/PolicySection.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "policy",
  components: {
    NavBar,
    PolicySection,
    FooterSection
  }
};
</script>

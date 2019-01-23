<template>
    <div class="utility-resources">
        <NavBar></NavBar>
        <UtilitySection></UtilitySection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";
import UtilitySection from "@/components/UtilitySection.vue";

export default {
  name: "policy",
  components: {
    NavBar,
    UtilitySection,
    FooterSection
  }
};
</script>

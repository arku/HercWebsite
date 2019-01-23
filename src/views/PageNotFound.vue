<template>
    <div class="page-not-found">
        <NavBar></NavBar>
        <NotFoundSection></NotFoundSection>
        <FooterSection></FooterSection>
        <back-to-top bottom="100px" right="10px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>
    </div>
</template>
<script>
import NotFoundSection from "@/components/NotFoundSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "PageNotFound",
  components: {
    NavBar,
    NotFoundSection,
    FooterSection
  }
};
</script>

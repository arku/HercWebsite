<template>
  <div class="mentions">
    <NavBar></NavBar>
    <MentionsSection></MentionsSection>
    <ContactSection></ContactSection>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import MentionsSection from "@/components/MentionsSection.vue";
import NavBar from "@/components/NavBar.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "mentions",
  components: {
    NavBar,
    FooterSection,
    ContactSection,
    MentionsSection
  }
};
</script>


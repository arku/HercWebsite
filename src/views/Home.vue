<template>
    <div class="home">
        <TopSection></TopSection>
        <BlurbSection></BlurbSection>
    </div>
</template>
<script>
import TopSection from '@/components/TopSection.vue';
import BlurbSection from '@/components/BlurbSection.vue';

export default {
    name: 'home',
    components:{
        TopSection,
        BlurbSection
    }
}
</script>

<template>
    <ul>
        <learning-resource v-for="resource in resources" :data="resource"
         :key="resource.id"
         :id="resource.id"
         :title="resource.title"
         :description="resource.description"
         :url="resource.url"
         >
        </learning-resource>        
    </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
    components: {        
        LearningResource 
    },
    inject: ['resources']    
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
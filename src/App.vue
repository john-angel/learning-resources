<template>
    <ul>
        <learning-resource v-for="resource in storedResources" :data="resource"
         :key="resource.id"
         :title="resource.title"
         :description="resource.description"
         :url="resource.url"
         >
        </learning-resource>        
    </ul>
</template>

<script>
import LearningResource from "./components/LearningResource.vue";
export default {
    components: { LearningResource },
    data(){
        return {
            storedResources: [
            {
                id: 'official-guide',
                title: 'Official guide',
                description: 'The official Vue.js documentation',
                url: 'https://vuejs.org'
            },
            {
                id: 'google',
                title: 'Google',
                description: 'Learn to Google',
                url: 'https://www.google.org'
            }
            ]
        }
    }
}
</script>
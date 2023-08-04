<template>
    <base-card>
        <Button @click="setSelectedTab('stored-resources')">Stored resources</Button>
        <Button @click="setSelectedTab('add-resource')">Add resource</Button>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
    components: {
        AddResource,
        StoredResources
    },
    data(){
        return {
            selectedTab: 'stored-resources',
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
    },
    provide(){
        return {
            resources: this.storedResources
        }
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        }
    }
}
</script>
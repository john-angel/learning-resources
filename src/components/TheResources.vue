<template>
    <base-card>
        <Button @click="setSelectedTab('stored-resources')" :mode="storedResourcesButtonMode">Stored resources</Button>
        <Button @click="setSelectedTab('add-resource')" :mode="addResourcesButtonMode">Add resource</Button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>    
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
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.deleteResource
        }
    },
    computed: {
        storedResourcesButtonMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResourcesButtonMode(){
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addResource(resource){
            console.log(resource);
            const newResource = {
                id: new Date().toISOString(),
                ...resource
            };
            this.storedResources.push(newResource);
            console.log(this.storedResources);
            this.selectedTab = 'stored-resources';
        },
        deleteResource(id){
            console.log(this.storedResources);
            console.log(`Delete resource ${ id }`);
            const index = this.storedResources.findIndex(resource => resource.id === id);
            this.storedResources.splice(index,1);
            //this.storedResources = this.storedResources.filter(resource => resource.id !== id);
            console.log(this.storedResources);
        }
    }
}
</script>
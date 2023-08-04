<template>
  <the-header title="Learning resources"></the-header>
  <stored-resources :resources="storedResources"></stored-resources>    
</template>

<script>
import StoredResources from './components/StoredResources.vue';
import TheHeader from './components/TheHeader.vue';

export default {
    components: {
      TheHeader,
      StoredResources
    },
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
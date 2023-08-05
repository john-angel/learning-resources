<template>
    <li>
      <base-card>
        <header>
              <h3>{{ title }}</h3>
              <Button mode="flat" @click="deleteLearningResource">Delete</Button>
          </header>
          <p>{{ description }}</p>
          <a :href="url">View resource</a>
      </base-card>      
    </li>
</template>

<script>
export default {
  props: ['id','title', 'description', 'url'],
  inject: ['deleteResource'],
  methods: {
    deleteLearningResource(){
      this.deleteResource(this.id);
    }
  }
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

</style>
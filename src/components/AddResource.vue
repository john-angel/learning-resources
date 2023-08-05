<template>
    <base-card>
        <form @submit.prevent="submitResource">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" v-model="title"/>
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" v-model="description"></textarea>
            </div>
            <div class="form-control">
                <label for="url">URL</label>
                <input id="link" name="link" type="url" v-model="url"/>
            </div>
            <div>
                <Button>Add resource</Button>
            </div>
        </form>
    </base-card>    
</template>

<script>
export default {
    inject: ['addResource'],
    data(){
        return {
            title: '',
            description: '',
            url: ''
        }
    },
    methods: {
        submitResource(){
            const resource = {
                title: this.title,
                description: this.description,
                url: this.url
            };
            this.addResource(resource);
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
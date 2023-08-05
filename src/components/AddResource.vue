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
    <modal v-if="invalidInput" title="Error">
        <template #default>
            <p>Invalid input</p>
        </template>
        <template #actions>
            <Button @click="tryAgain">Try again</Button>
        </template>
    </modal>    
</template>

<script>
import Modal from "./Modal.vue";

export default {
    components: { Modal },
    inject: ['addResource'],
    data(){
        return {
            title: '',
            description: '',
            url: '',
            invalidInput: false
        }
    },
    methods: {
        submitResource(){
            if(!this.title.length || !this.description.length || !this.url.length){
                console.log('Invalid input');
                this.invalidInput = true;
            }else{
                this.invalidInput = false;
                const resource = {
                    title: this.title,
                    description: this.description,
                    url: this.url
                };
                this.addResource(resource);
            }            
        },
        tryAgain(){
            this.invalidInput = false;
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
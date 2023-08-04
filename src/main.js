import { createApp } from 'vue';
import App from "./App.vue";
import BaseCard from "./components/BaseCard.vue";
import Button from "./components/Button.vue";

const app = createApp(App)
app.component('base-card', BaseCard);
app.component('Button', Button);
app.mount('#app');

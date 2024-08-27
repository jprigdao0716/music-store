import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Path to your Vuex store

const app = createApp(App);
app.use(store);
app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import { store } from './store';
import './index.css';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(store);
app.mount('#app');

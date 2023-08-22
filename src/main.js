import { createApp } from 'vue'
import '/src/style.css'
import App from '/src/App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from "/src/routes/routes.js";
import VueAxios from 'vue-axios';
import axios from 'axios';


const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.use(VueAxios,axios);
app.mount('#app');

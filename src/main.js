import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Hotel from './components/Hotel.vue';
import Ticket from './components/Ticket.vue';
import HomeStay from './components/HomeStay.vue';

const routes = [
    { path: '/', component: Hotel },
    { path: '/ticket', component: Ticket },
    { path: '/homeStay', component: HomeStay }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

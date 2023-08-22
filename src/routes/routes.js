import Hotel from "/src/components/Hotel.vue";
import Ticket from "/src/components/Ticket.vue";
import HomeStay from "/src/components/HomeStay.vue";
import App from "/src/App.vue";


const routes = [
    {
        path: '/',
        component: App,
        name: 'App',
        children: [
            {
                path: '',
                name: 'Hotel',
                component: Hotel,
            },

        ]
    },
    {
        path: '/ticket',
        name: 'Ticket',
        component: Ticket,
    },
    {
        path: '/homeStay',
        name: 'HomeStay',
        component: HomeStay,
    }
];

export default routes;

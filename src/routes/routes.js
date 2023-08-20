import Master from "../layouts/Master.vue";
import Index from "../views/Index.vue";

const routes = [
    {
        path: '/',
        component: Master,
        name: 'Index',
        redirect: '/home',
        children: [
            {
                path: '123',
                component: Index,
            },
            {
                path: 'ContentOne',
                name: 'contentone',
                component: ContentOne,
            },
            {
                path: 'ContentTwo',
                name: 'contentwo',
                component: ContentTwo,
            }
        ]
    }
];

export default routes;

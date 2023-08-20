import Index from "../layouts/Index.vue";

const routes = [
    {
        path: '/',
        component: Index,
        name: 'Index',
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: HelloWorld,
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

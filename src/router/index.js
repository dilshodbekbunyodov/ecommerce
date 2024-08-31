import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        component: () => import('../components/index.vue'),
        meta: {
            layout: "MainLayout",
        },
    },
    {
        path: '/basket',
        name: "basket",
        component: () => import('../Pages/Basket/index.vue'),
        meta: {
            layout: "MainLayout",
        },
    },
    {
        path: '/ordered',
        name: "ordered",
        component: () => import('../Pages/Ordered/index.vue'),
        meta: {
            layout: "MainLayout",
        },
    },
    {
        path: '/our-magazine',
        name: "our-magazine",
        component: () => import('../Pages/Magazine/index.vue'),
        meta: {
            layout: "MainLayout",
        },
    },
    {
        path: '/dashboard',
        name: "dashboard",
        component: () => import('../Pages/Dashboard/index.vue'),
        meta: {
            layout: "Dashboard",
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
})
export default router;

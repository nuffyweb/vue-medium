import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
//import store from '@/store';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'main',
            auth: true,
        },
    },
    {
        path: '/signup',
        name: 'TheSignup',
        meta: {
            layout: 'main',
        },
        component: () => import('@/views/TheSignup'),
    },
    {
        path: '/signin',
        name: 'TheSignin',
        meta: {
            layout: 'main',
        },
        component: () => import('@/views/TheSignin'),
    },
];

const router = new VueRouter({
    mode: 'history',
    //base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
});
// router.beforeEach((to, from, next) => {
//     const userLoggedIn = this.store.dispatch('auth/getCurrentUser');
//     if (to.meta.auth && userLoggedIn) {
//         next('/login')
//     }
//     else {
//         next()
//     }
// },
export default router;
//store.dispatch('auth/getCurrentUser');

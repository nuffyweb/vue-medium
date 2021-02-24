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
    {
        path: '/settings',
        name: 'Settings',
        meta: {
            layout: 'main',
        },
        component: Home,
    },
    {
        path: '/profile/:slug',
        name: 'UserProfile',
        meta: {
            layout: 'main',
        },
        component: Home,
    },
    {
        path: '/profile/:slug/favorites',
        name: 'UserProfileFavorites',
        meta: {
            layout: 'main',
        },
        component: Home,
    },
    {
        path: '/article/new',
        name: 'ArticleCreate',
        meta: {
            layout: 'main',
        },
        component: Home,
    },
    {
        path: '/article/:slug',
        name: 'Article',
        meta: {
            layout: 'main',
        },
        component: Home,
    },
    {
        path: '/article/:slug/edit',
        name: 'ArticleEdit',
        meta: {
            layout: 'main',
        },
        component: Home,
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
//     const userLoggedIn = store.dispatch('auth/getCurrentUser');
//     if (to.name !== 'TheSignin' && userLoggedIn) {
//         next('/login');
//     }
//     else {
//         next();
//     }
// });
export default router;

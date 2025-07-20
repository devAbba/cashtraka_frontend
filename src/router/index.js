import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/login', name: 'Login', component: () => import("../components/Login.vue")},
    { path: '/signup', name: 'Signup', component: () => import("../components/Signup.vue")},
    { path: '/forgot-password', name: 'ForgotPassword', component: () => import("../components/ForgotPassword.vue")},
    { path: '/password-reset/:token', name: 'ResetPassword', component: () => import("../components/ResetPassword.vue")}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
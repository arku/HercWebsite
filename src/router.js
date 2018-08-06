import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Whitepaper from './views/Whitepaper.vue'
import Policy from './views/Policy.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/whitepaper',
        name: 'whitepaper',
        component: Whitepaper,
    },
    {
        path: '/policy',
        name: 'polic',
        component: Policy,
    }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     // Do no scroll back if navigation is for same page navigation
    //     if (to.hash[0] !== '#') {
    //         return { x: 0, y: 0 }
    //     }

    // }
});
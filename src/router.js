import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Whitepaper from './views/Whitepaper.vue'
import Policy from './views/Policy.vue'
import FAQ from './views/FAQ.vue'

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
        name: 'policy',
        component: Policy,
    },
    {
        path: '/lol',
        name: 'faq',
        component: FAQ
    }
    ],
});
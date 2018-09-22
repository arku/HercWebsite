import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Whitepaper from './views/Whitepaper.vue'
import Policy from './views/Policy.vue'
import FAQ from './views/FAQ.vue'
import Metamask from './views/Metamask.vue'
import CareersSection from './views/Careers.vue'
import TokenInfo from './views/TokenInfo.vue';
import Landing from './views/Landing.vue';
import LandingTwo from './views/LandingTwo.vue';


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
        path: '/faq',
        name: 'faq',
        component: FAQ
    },
    {
        path: '/metamask',
        name: 'metamask',
        component: Metamask
    },
    {
        path: '/careers',
        name: 'careers',
        component: CareersSection
    },
    {
        path: '/hipr',
        beforeEnter() {
            location.href = 'https://s3.us-east-2.amazonaws.com/hercmedia/HIPRDocumentation.pdf'
        }
    },
    {
        path: '/tokeninfo',
        name: 'tokeninfo',
        component: TokenInfo
    },
    {
        path: '/landing',
        name: 'landing',
        component: Landing
    },
    {
        path: '/landing2',
        name: 'landing2',
        component: LandingTwo
    }
    ],
});
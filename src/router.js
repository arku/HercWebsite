import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Whitepaper from './views/Whitepaper.vue';
import Policy from './views/Policy.vue';
import Terms from './views/Terms.vue';
import FAQ from './views/FAQ.vue';
import Metamask from './views/Metamask.vue';
import CareersSection from './views/Careers.vue';
import TokenInfo from './views/TokenInfo.vue';
import Landing from './views/LandingViews/Landing.vue';
import LandingThree from './views/LandingViews/LandingThree.vue';
import LandingFour from './views/LandingViews/LandingFour.vue';
import LandingFive from './views/LandingViews/LandingFive.vue';
import LandingSix from './views/LandingViews/LandingSix.vue';
import LandingSeven from './views/LandingViews/LandingSeven.vue';
import LandingEight from './views/LandingViews/LandingEight.vue';
import LandingNine from './views/LandingViews/LandingNine.vue';
import PageNotFound from './views/PageNotFound.vue';
import ContactSectionBig from './views/Contact.vue';
import DevSourcesSection from './views/DevSources.vue';
import UtilitySection from './views/UtilityResources.vue';
import NewsSection from './views/News.vue';
import GetStartedSection from './views/GetStarted/GetStarted.vue';
import DisclaimerOneSection from './views/GetStarted/DisclaimerOne.vue';
import DisclaimerTwoSection from './views/GetStarted/DisclaimerTwo.vue';
import CalculatorSection from './views/Calculator.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    hash: false,
    base: '/',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/whitepaper',
        name: 'whitepaper',
        component: Whitepaper
    },
    {
        path: '/policy',
        name: 'policy',
        component: Policy
    },
    {
        path: '/terms',
        name: 'terms',
        component: Terms
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
        path: '/landing3',
        name: 'landing3',
        component: LandingThree
    },
    {
        path: '/landing4',
        name: 'landing4',
        component: LandingFour
    },
    {
        path: '/landing5',
        name: 'landing5',
        component: LandingFive
    },
    {
        path: '/landing6',
        name: 'landing6',
        component: LandingSix
    },
    {
        path: '/landing7',
        name: 'landing7',
        component: LandingSeven
    },
    {
        path: '/landing8',
        name: 'landing8',
        component: LandingEight
    },
    {
        path: '/landing9',
        name: 'landing9',
        component: LandingNine
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound,
    },
    {
        path: '/contact',
        name: 'ContactSectionBig',
        component: ContactSectionBig
    },
    {
        path: '/developer-resources',
        name: 'DevSourcesSection',
        component: DevSourcesSection
    },
    {
        path: '/utilities',
        name: 'UtilitySection',
        component: UtilitySection
    },
    {
        path: '/news',
        name: 'NewsSection',
        component: NewsSection
    },
    {
        path: '/platform',
        beforeEnter() {
            location.href = 'https://github.com/hercone/herc-edge-login/releases'
        }
    },
    {
        path: '/get-started',
        name: 'GetStarted',
        component: GetStartedSection
    },
    {
        path: '/disclaimer-one',
        name: 'DisclaimerOne',
        component: DisclaimerOneSection
    },
    {
        path: '/disclaimer-two',
        name: 'DisclaimerTwo',
        component: DisclaimerTwoSection
    },
    {
        path: '/calculator',
        name: 'CalculatorSection',
        component: CalculatorSection
    }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});
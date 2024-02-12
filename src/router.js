import { createRouter, createWebHashHistory } from 'vue-router';

import GameHome from './components/views/GameHome.vue';
import AnagramHunt from './components/main/AnagramHunt.vue';
import MathFacts from './components/main/MathFacts.vue';
import LoginGuest from './components/static/LoginGuest.vue';
import SignupGuest from './components/static/SignupGuest.vue';
import AboutUs from './components/static/AboutUs.vue';
import ContactUs from './components/static/ContactUs.vue';


const routes = [
    {path:'/Home', component: GameHome},
    {path:'/AnagramHunt', component: AnagramHunt},
    {path:'/MathFacts', component: MathFacts},
    {path:'/LoginGuest', component:LoginGuest},
    {path:'/SignupGuest', component:SignupGuest},
    {path:'/AboutPage',component:AboutUs},
    {path:'/contact-us', component:ContactUs},
]

export default () =>
  createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  });


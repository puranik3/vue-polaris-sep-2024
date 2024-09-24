import Router from 'vue-router';
import AppHome from './components/views/Home.vue';
import AppWorkshopsList from './components/views/WorkshopsList.vue';

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: AppHome
        },
        {
            path: '/workshops',
            component: AppWorkshopsList
        },
    ]
});

export default router;
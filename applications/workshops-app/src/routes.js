import Router from 'vue-router';
import AppHome from './components/views/Home.vue';
import AppWorkshopsList from './components/views/WorkshopsList.vue';
import WorkshopDetails from './components/views/WorkshopDetails.vue';

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/workshops',
            name: 'workshops-list',
            component: AppWorkshopsList
        },
        {
            path: '/workshops/:id',
            name: 'workshop-details',
            component: WorkshopDetails
        }
    ]
});

export default router;
import Router from 'vue-router';
import AppHome from './components/views/home/Home.vue';
import AppWorkshopsList from './components/views/workshops-list/WorkshopsList.vue';
import WorkshopDetails from './components/views/workshop-details/WorkshopDetails.vue';

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
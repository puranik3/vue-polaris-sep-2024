import Router from 'vue-router';
import AppHome from './components/views/home/Home.vue';
import AppWorkshopsList from './components/views/workshops-list/WorkshopsList.vue';
import WorkshopDetails from './components/views/workshop-details/WorkshopDetails.vue';
import SessionsList from './components/workshops/sessions-list/SessionsList.vue';
import RequestSession from './components/workshops/request-sessions/RequestSession.vue';

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
            component: WorkshopDetails,
            children: [
                {
                    path: '',
                    name: 'sessions-list',
                    component: SessionsList
                },
                {
                    path: 'add',
                    name: 'request-session',
                    component: RequestSession
                },

            ]
        }
    ]
});

export default router;
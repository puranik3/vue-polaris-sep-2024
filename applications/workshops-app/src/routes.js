import Router from 'vue-router';
import AppHome from './components/views/home/Home.vue';
import AppWorkshopsList from './components/views/workshops-list/WorkshopsList.vue';
import WorkshopDetails from './components/views/workshop-details/WorkshopDetails.vue';
import SessionsList from './components/workshops/sessions-list/SessionsList.vue';
import RequestSession from './components/workshops/request-sessions/RequestSession.vue';
import PageNotFound from './components/common/PageNotFound.vue';

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
                    component: SessionsList,
                    props: true // the dynamic parameter - id, will be sent as a prop by the router itself
                },
                {
                    path: 'add',
                    name: 'request-session',
                    component: RequestSession
                },

            ]
        },

        // should be the last route
        {
            path: '*',
            name: 'page-not-found',
            component: PageNotFound
            // redirect: '/'
        }
    ]
});

export default router;
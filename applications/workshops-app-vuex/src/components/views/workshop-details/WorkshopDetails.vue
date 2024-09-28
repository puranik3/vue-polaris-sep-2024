<template lang="">
    <div>
        <!-- EXERCISE: Refactor to create custom components for spinner, error -->
        <div v-if="loading">
            <div class="d-flex justify-content-center mb-3">
                <b-spinner label="Loading..."></b-spinner>
            </div>
        </div>

        <div v-else-if="error !== null">
            <b-alert variant="danger" show>
                {{ error.message }}
            </b-alert>
        </div>

        <div v-else>
            <h1>{{ workshop.name }}</h1>
            <hr />

            <div class="row">
                <div class="col-12 col-md-4">
                    <b-img fluid :src="workshop.imageUrl" :alt="workshop.name"></b-img>
                </div>
                <div class="col-12 col-md-8">
                    <div v-html="workshop.description">
                    </div>
                    <div class="my-3">
                        {{ workshop.startDate | date('indian') }} - {{ workshop.endDate | date('indian') }}
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5 mb-3">
            <b-button size="sm" variant="primary" class="mr-2" :to="{ name: 'sessions-list', params: { id: id } }" exact>
                List of sessions
            </b-button>
            <b-button size="sm" variant="primary" :to="{ name: 'request-session', params: { id: id } }">
                Request new session
            </b-button>
        </div>

        <!-- <router-view :id="id"></router-view> -->
        <router-view
            :sessions="workshop?.sessions"
            @downvote="vote( $event, 'downvote')"
            @upvote="vote( $event, 'upvote')"
            @sessionAdd="addSession( $event )"
        ></router-view>
    </div>
</template>

<script>
// import SessionsList from '@/components/workshops/sessions-list/SessionsList.vue';
// import RequestSession from '@/components/workshops/request-sessions/RequestSession.vue';

import { getWorkshopById } from '@/services/workshops';
import { vote } from '@/services/sessions';

export default {
    name: 'WorkshopDetails',
    // components: {
    //     SessionsList,
    //     RequestSession
    // },
    data() {
        return {
            loading: true,
            error: null,
            workshop: null
        };
    },
    computed: {
        // props, data, things like this.$route are "reactive" -> we can derive computed data from these
        id() {
            return this.$route.params.id;
        }
    },
    methods: {
        async getWorkshopById() {
            this.loading = true;

            try {
                const workshop = await getWorkshopById(this.id);
                this.workshop = workshop;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
        // voteType -> 'upvote' | 'downvote'
        async vote({ id }, voteType) {
            console.log(voteType, id);
            const updatedSession = await vote(id, voteType);

            // you can also use array splice to update a particular item in the array if you know its index
            this.workshop.sessions = this.workshop.sessions.map(s => s.id === id ? updatedSession : s);
        },
        addSession({ session }) {
            // Vue cannnot detect certain changes to an array property (like session) within the reactive data (i.e. workshops)
            // Reference: https://v2.vuejs.org/v2/guide/reactivity

            // this it can detect
            this.workshop.sessions.push(session);

            // alternative approach (instead of push)
            // this.workshop.sessions = [
            //     ...this.workshop.sessions,
            //     session
            // ];
        }
    },
    mounted() {
        // router is for things like redirection etc.
        console.log(this.$router);

        // route is for getting details of the current route, dynamic path params (:id), query parameters (?q=Angular)
        console.log(this.$route);

        this.getWorkshopById(this.id)
    }
}
</script>
<style lang="">

</style>
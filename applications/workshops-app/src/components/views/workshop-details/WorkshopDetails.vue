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
            @dislike="vote( $event, 'dislike')"
            @like="vote( $event, 'like')"
        ></router-view>
    </div>
</template>

<script>
// import SessionsList from '@/components/workshops/sessions-list/SessionsList.vue';
// import RequestSession from '@/components/workshops/request-sessions/RequestSession.vue';

import { getWorkshopById } from '@/services/workshops';

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
        // voteType -> 'like' | 'dislike'
        vote({ id }, voteType) {
            console.log(voteType, id);
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
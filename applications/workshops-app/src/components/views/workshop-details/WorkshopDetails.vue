<template lang="">
    <div>
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

        <div>
            <h1>{{ workshop.name }}</h1>
            <hr />

            <div class="row">
                <div class="col-12 col-md-4">
                    <b-img fluid :src="workshop.imageUrl" :alt="workshop.name"></b-img>
                </div>
                <div class="col-12 col-md-8" v-html="workshop.description">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getWorkshopById } from '@/services/workshops';

export default {
    name: 'WorkshopDetails',
    data() {
        return {
            loading: true,
            error: null,
            workshop: null
        };
    },
    computed: {
        // props, data, things like this.$rute are "reactive" -> we can derive computed data from these
        id() {
            return this.$route.params.id;
        }
    },
    methods: {
        async getWorkshopById() {
            try {
                const workshop = await getWorkshopById(this.id);
                this.workshop = workshop;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
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
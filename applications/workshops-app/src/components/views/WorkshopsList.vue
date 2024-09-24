<template lang="html">
    <div class="container my-5">
        <h1>List of workshops</h1>
        <hr />

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

        <div class="row" v-else>
            <div class="col-12">
                <div class="my-3">
                    You are viewing page {{ page }}
                </div>
                <div>
                    <button class="btn btn-sm btn-primary mr-2" @click="--page">Previous</button>
                    <button class="btn btn-sm btn-primary" @click="++page">Next</button>
                </div>
            </div>

            <!-- "key" should be unique among the items in that array, and should be stable (cannot be updated) -->

            <div class="col-12 col-md-4 d-flex my-3" v-for="workshop of workshops" :key="workshop.id">
                <div class="card p-3 w-100">
                    <img :src="workshop.imageUrl" :alt="workshop.name" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{{ workshop.name }}</h5>
                        <div class="card-text" v-html="workshop.description"></div>
                        <a href="#" class="btn btn-primary">Know more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getWorkshops } from '@/services/workshops';

export default {
    name: 'AppWorkshopsList',
    data() {
        return {
            loading: true,
            error: null,
            workshops: [],
            page: 1,
        };
    },
    methods: {
        async getWorkshops() {
            try {
                const workshops = await getWorkshops(this.page);
                this.workshops = workshops;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    },
    // watch is used to monitor change on some data item and run some logic (not to compute derived data from existing data - for that we have computed. computed is for deriving data synchronously. watch is for doing something asynchronously - like making call to the backend.)
    watch: {
        // when page changes, we want to fetch fresh workshops and set the workshops data property
        page(newPage, oldPage) {
            console.log(oldPage, newPage);

            this.getWorkshops();

            // nothing returned unlike computed property's method
        },
    },
    // Lifecyle hooks - https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-hooks
    // before UI is shown
    created() {
        console.log("created");
    },
    mounted() {
        this.getWorkshops();
    },
}
</script>

<style lang="scss"></style>
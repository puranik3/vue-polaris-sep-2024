<template lang="html">
    <div class="container my-5">
        <h1>List of workshops</h1>
        <hr />

        <div v-if="loading">
            <app-spinner theme="primary"></app-spinner>
        </div>

        <div v-else-if="error !== null">
            <app-alert theme="danger" :message="error.message" />
        </div>

        <div class="row" v-else>
            <div class="col-12">
                <app-pagination @pageChange="page = $event.newPage">
                    <!-- v-slot:page-number-display="{ page }" -> you have accepted to use the child component's page variable, not the local one -->
                    <template v-slot:page-number-display="{ page }">
                        You are viewing page {{ page }}
                    </template>
                </app-pagination>
            </div>

            <div class="col-12 my-3">
                <input type="search" placeholder="Filter by name of the workshop" class="form-control"
                    v-model="filterKey" />
            </div>

            <!-- "key" should be unique among the items in that array, and should be stable (cannot be updated) -->

            <div class="col-12 col-md-4 d-flex my-3" v-for="workshop of filteredWorkshops" :key="workshop.id">
                <app-workshops-list-item :workshop="workshop"></app-workshops-list-item>
            </div>
        </div>
    </div>
</template>

<script>
import AppPagination from '@/components/utils/Pagination';
import AppWorkshopsListItem from '../../workshops/workshops-list-item/WorkshopsListItem';

import { getWorkshops } from '@/services/workshops';

export default {
    name: 'AppWorkshopsList',
    components: {
        AppPagination,
        AppWorkshopsListItem
    },
    data() {
        return {
            loading: true,
            error: null,
            workshops: [],

            page: 1,

            filterKey: ''
        };
    },
    computed: {
        filteredWorkshops() {
            return this.workshops.filter(w => w.name.toUpperCase().includes(this.filterKey.trim().toUpperCase()))
        }
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

            this.loading = true;
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
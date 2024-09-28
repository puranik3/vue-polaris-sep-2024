<template lang="html">
    <div>
        <b-jumbotron header="Workshops App"
            lead="The Workshops application serves details of (fictitious) technical workshops happening in various cities. Every workshop has a broad topic (eg. JavaScript), and a workshop has many sessions (each session covers a sub-topic, eg. Closures in JavaScript)."
            :bg-variant="theme" :text-variant="contrastTheme">
            <p>
                You can view a list of workshops, details of every workshop, sessions in a workshop, and also add a new
                session for a workshop.
            </p>
            <b-button tovariant="primary" to="/workshops">Check out nearby workshops</b-button>
        </b-jumbotron>

        <div>
            <button @click="totalItems += 50" class="btn btn-sm btn-primary mr-2">
                Get more items
            </button>

            <div class="my-2">
                <button @click="pageSize -= 10" class="btn btn-sm btn-primary mr-2">
                    Decrease size by 10
                </button>
                <button @click="pageSize += 10" class="btn btn-sm btn-primary mr-2">
                    Increase page size by 10
                </button>
            </div>

            <div class="my-2">
                <button @click="currentPage--" class="btn btn-sm btn-primary mr-2">
                    Previous page
                </button>
                <button @click="currentPage++" class="btn btn-sm btn-primary mr-2">
                    Next page
                </button>
            </div>

            <polaris-pagination :currentPage="currentPage" :pageSize="pageSize" :totalItems="totalItems"
                showingCopy="YES"></polaris-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHome',
    inject: ['theme', 'contrastTheme'],
    data() {
        return {
            currentPage: 1,
            totalItems: 55,
            pageSize: 10
        };
    },
}
</script>

<style lang="scss"></style>
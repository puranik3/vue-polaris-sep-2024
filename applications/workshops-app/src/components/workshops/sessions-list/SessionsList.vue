<template lang="">
    <div>
        <h2>List of sessions</h2>
        <hr />

        <!-- <div>
            idFromRoute = {{ idFromRoute }}, id = {{ id }}

            <div>Number of topics in this workshop = {{ sessions.length }}</div>
        </div> -->

        <b-list-group>
            <b-list-group-item v-for="session of sessions" :key="session.id">
                <sessions-list-item
                :session="session"
                @downvote="$emit( 'downvote', $event)"
                @upvote="$emit( 'upvote', $event)"
            ></sessions-list-item>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import SessionsListItem from './sessions-list-item/SessionsListItem.vue';

export default {
    name: 'SessionsList',
    components: {
        SessionsListItem
    },
    props: {
        id: String,
        sessions: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        idFromRoute() {
            return this.$route.params.id;
        }
    }
}
</script>

<style lang="">

</style>
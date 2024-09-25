<template lang="">
    <div>
        idFromRoute = {{ idFromRoute }}, id = {{ id }}

        <div>Number of topics in this workshop = {{ sessions.length }}</div>
    </div>
</template>

<script>
export default {
    name: 'SessionsList',
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
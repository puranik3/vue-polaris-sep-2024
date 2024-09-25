<template lang="">
    <div>
        Workshop Details works!
        <div>id is {{ id }}</div>
    </div>
</template>
<script>
export default {
    name: 'WorkshopDetails',
    computed: {
        // props, data, things like this.$rute are "reactive" -> we can derive computed data from these
        id() {
            return this.$route.params.id;
        }
    },
    created() {
        console.log(this.$router);
        console.log(this.$route);
    }
}
</script>
<style lang="">

</style>
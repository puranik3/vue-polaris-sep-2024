<template lang="html">
    <div class="card p-3 w-100">
        <img :src="workshop.imageUrl" :alt="workshop.name" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">{{ workshop.name }}</h5>
            <div class="card-text" v-html="workshop.description"></div>
            <!-- <router-link :to="'/workshops/' + workshop.id" class="btn btn-primary">Know more</router-link> -->
            <router-link :to="{ name: 'sessions-list', params: { id: workshop.id } }" class="btn btn-primary">Know
                more</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkshopsListItem',
    props: ["workshop"]
}
</script>

<style lang="scss"></style>
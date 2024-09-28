<template lang="">
    <div>
        <b-dislike @click="$emit( 'downvote' )"></b-dislike>
        {{ votes }}
        <b-like @click="$emit( 'upvote' )"></b-like>
    </div>
</template>

<script>
export default {
    name: 'AppVotingWidget',
    props: {
        votes: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.b-icon {
    cursor: pointer;
}
</style>
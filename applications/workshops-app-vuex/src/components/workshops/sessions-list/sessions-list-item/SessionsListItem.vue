<template lang="">
    <div>
        <h3 class="mb-2">{{ session.name }}</h3>
        <div>{{ session.abstract }}</div>
        <div class="my-3">{{ session.speaker }}</div>
        <div>{{ session.level }}</div>
        <div class="mt-2">
            <app-voting-widget
                :votes="session.upvoteCount" @downvote="$emit( 'downvote', { id: session.id } )"
                @upvote="$emit( 'upvote', { id: session.id } )"
            >
            </app-voting-widget>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SessionsListItem',
    props: ['session']
}
</script>

<style lang="">

</style>
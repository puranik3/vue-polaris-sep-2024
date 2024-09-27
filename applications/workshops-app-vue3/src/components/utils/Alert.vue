<template lang="">
    <b-alert :variant="theme" show>
        {{ message }}
    </b-alert>
</template>

<script>
import ThemeMixin from '@/mixins/ThemeMixin';

export default {
    name: 'AppAlert',
    // the ThemeMixin will bring in the theme prop
    mixins: [ThemeMixin],
    props: {
        message: String
    }
}
</script>

<style lang="">

</style>
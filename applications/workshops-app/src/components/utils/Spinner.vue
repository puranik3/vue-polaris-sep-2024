<template lang="">
    <div class="d-flex justify-content-center mb-3">
        <b-spinner :variant="theme" label="Loading..."></b-spinner>
    </div>
</template>

<script>
import ThemeMixin from '@/mixins/ThemeMixin';

export default {
    name: 'AppSpinner',
    // the ThemeMixin will bring in the theme prop
    mixins: [ThemeMixin]
}
</script>

<style lang="">

</style>
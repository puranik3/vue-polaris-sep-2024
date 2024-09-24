<template lang="html">
    <div>
        WorkshopsList component works!
    </div>
</template>

<script>
import { getWorkshops } from '@/services/workshops';

export default {
    name: 'AppWorkshopsList',
    mounted() {
        getWorkshops();
    }
}
</script>

<style lang="scss"></style>
<template lang="js">
    <div>
        <div class="my-3">
            <slot name="page-number-display" :page="page"></slot>
        </div>
        <div>
            <!-- default slot -->
            <!-- <slot :page="page" :$emit="$emit"></slot> -->
            <slot>
                <button class="btn btn-sm btn-primary mr-2"
                    @click="$emit('pageChange', { oldPage: page, newPage: page - 1 })">
                    Previous
                </button>
                <button class="btn btn-sm btn-primary mr-2"
                    @click="$emit('pageChange', { oldPage: page, newPage: page + 1 })">
                    Next
                </button>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppPagination',
    props: {
        page: {
            type: Number,
            default: 1,
            validator(value) {
                return value > 0 && parseInt(value) === value;
            }
        },
    }
}
</script>

<style lang="scss"></style>
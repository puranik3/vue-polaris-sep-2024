<template lang="html">
    <div>
        <div class="my-3">
            You are viewing page {{ page }}
        </div>

        <div>
            <button class="btn btn-sm btn-primary mr-2"
                @click="$emit('pageChange', { oldPage: page, newPage: page - 1 })">
                Previous
            </button>
            <button class="btn btn-sm btn-primary mr-2"
                @click="$emit('pageChange', { oldPage: page, newPage: page + 1 })">
                Next
            </button>
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
    },
}
</script>

<style lang="scss"></style>
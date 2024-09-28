<template>
    <div>
        <div>
            Current page = {{ currentPage }}
        </div>
        <div>
            Total number of pages = {{ totalPages }}
        </div>
        <div>
            {{ pageSize }} items displayed
        </div>
        <div>
            Page size is {{ pageSize }}
        </div>
        <div>
            Total items = {{ totalItems }}
        </div>
        <div>
            Viewing items {{ firstItem }} - {{ lastItem }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PolarisPagination',
    props: {
        currentPage: {
            type: Number,
            required: true,
            default: 1
        },
        pageSize: {
            type: Number,
            required: true,
            default: 10
        },
        totalItems: {
            type: Number,
            required: true
        },
        showingCopy: {
            type: String,
            required: true,
            default: ' '
        }
    },
    data: function () {
        var totalPages = (this.totalItems / this.pageSize).toFixed(2);
        return {
            totalPages: Math.ceil(totalPages),
            isExpanded: false
        }
    },
    methods: {
        getFirstItem: function () {
            // If first page don't calculate a thing
            if (this.currentPage === 1) return 1;
            return ((this.currentPage - 1) * this.pageSize) + 1;
        },
        getLastItem: function () {
            // If first page
            if (this.currentPage === 1 && this.totalPages <= 1) return this.totalItems;
            if (this.currentPage === 1) return this.pageSize;
            // If this is the last page, return total items
            if (this.currentPage === this.totalPages) return this.totalItems;
            return this.currentPage * this.pageSize;
        }
    },
    computed: {
        firstItem: {
            get: function () {
                return this.getFirstItem();
            },
            set: function (value) {
                return value;
            }
        },
        lastItem: {
            get: function () {
                return this.getLastItem();
            },
            set: function (value) {
                return value;
            }
        }
    },
    watch: {
        totalItems: function (value) {
            this.totalPages = Math.round(this.totalItems / this.pageSize);
            this.firstItem = this.getFirstItem();
            this.lastItem = this.getLastItem();

            return value;
        }
    },
};
</script>

<style></style>
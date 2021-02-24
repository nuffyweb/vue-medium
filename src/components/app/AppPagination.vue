<template>
    <nav>
        <ul class="pagination">
            <li
                class="page-item"
                :class="{active: currentPage === page}"
                v-for="page in pagesCount"
                :key="page"
            >
                <router-link :to="{path: url, query: {page: page}}" class="page-link">{{page}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import {rangeArray} from '@/utils/rangeArray';
    export default {
        name: 'AppPagination',
        props: {
            // user: {
            //     type: Object,
            //     required: true,
            //     // default() {
            //     //     return {
            //     //         name: 'Bob',
            //     //         age: 22,
            //     //     };
            //     // },
            // },
            total: {
                type: Number,
                required: true,
            },
            limit: {
                type: Number,
                required: true,
            },
            currentPage: {
                type: Number,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        computed: {
            pagesCount() {
                const count = Math.ceil(this.total / this.limit);
                return rangeArray(1, count);
            },
        },
    };
</script>

<style scoped>

</style>

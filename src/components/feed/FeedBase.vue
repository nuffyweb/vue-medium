<template>
    <fragment>
        <div v-if="isLoading">isLoading...</div>
        <div class="cards" v-if="feed">
            <FeedBaseItem
                v-for="(article, index) in feed.articles"
                :key="index"
                :feed-item-data="article"
            />
            <AppPagination
                :total="feed.articlesCount"
                :limit="feed.articles.length"
                :currentPage="actualPage"
                :url="basePath"/>
        </div>

    </fragment>
</template>

<script>
    import {mapState} from 'vuex';
    import FeedBaseItem from '@/components/feed/FeedBaseItem';
    import AppPagination from '@/components/app/AppPagination';
    import {stringify, parseUrl} from 'query-string';
    export default {
        name: 'FeedBase',
        components: {
            FeedBaseItem,
            AppPagination,
        },
        props: {
            apiUrl: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                limit: 20,
                // paginations: {
                //     total: 500,
                //     limit: 10,
                //     currentPage: 1,
                //     url: this.basePath(),
                // },
            };
        },
        computed: {
            ...mapState({
                feed: (state) => state.feed.data,
                isLoading: (state) => state.feed.isLoading,
                error: (state) => state.feed.error,
            }),
            actualPage() {
                return Number(this.$route.query.page || '1');
            },
            basePath() {
                return this.$route.path;
            },
            pageOffset() {
                return this.actualPage * this.limit - this.limit;
            },
        },
        watch: {
            actualPage() {
                this.getFeed();
            },
        },
        mounted() {
            this.getFeed();
        },
        methods: {
            getFeed() {
                // eslint-disable-next-line no-use-before-define
                const parsedUrl = parseUrl(this.apiUrl);
                const stringifyParams = stringify({
                    limit: this.limit,
                    offset: this.pageOffset,
                    ...parsedUrl.query,
                });
                const apiUrlWithParams = `${parsedUrl.url}?${stringifyParams}`;

                this.$store.dispatch('feed/getFeed', {apiUrl: apiUrlWithParams});
            },
        },
    };
</script>

<style scoped>

</style>

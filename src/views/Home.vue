<template>
    <div class="home-page ng-scope">
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <FeedGlobal />
                </div>
                <div class="col-md-3">
                    <AppPopularTags />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FeedGlobal from '@/components/feed/FeedGlobal';
    import AppPopularTags from '@/components/app/AppPopularTags';
    export default {
        name: 'Home',
        components: {
            FeedGlobal,
            AppPopularTags,
        },
        data() {
            return {};
        },
        methods: {},
    };
</script>
<style scoped>
.container.page {
    margin-top: 1.5rem;
}
</style>

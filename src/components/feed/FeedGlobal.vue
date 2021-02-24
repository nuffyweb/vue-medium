<template>
    <div>
        <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                    <a href="" class="nav-link">
                        Global Feed
                    </a>
                </li>
            </ul>
        </div>
        <FeedBase :api-url="apiUrl"/>
    </div>
</template>

<script>
    import {feedUrl} from '@/constants';
    import FeedBase from '@/components/feed/FeedBase';
    export default {
        name: 'FeedGlobal',
        components: {
            FeedBase,
        },
        data() {
            return {
                apiUrl: feedUrl.base,
            };
        },
        methods: {},
    };
</script>

<style scoped>

</style>

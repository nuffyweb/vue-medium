<template>
    <div class="sidebar">

        <p>
            <b-icon icon="tags"></b-icon>
            Popular Tags</p>
        <div class="tag-list">
            <a
                class="tag-default tag-pill ng-binding ng-scope"
                v-for="(tag, index) in tags"
                :key="index"
            >{{tag}}</a>
        </div>

        <div v-if="isLoading" class="ng-hide">
            Loading tags...
        </div>

        <div class="post-preview ng-hide" v-if="tags && tags.length === 0">
            No tags are here... yet.
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'AppPopularTags',
        computed: {
            ...mapState({
                tags: (state) => state.tags.data,
                isLoading: (state) => state.tags.isLoading,
                error: (state) => state.tags.error,
            }),

        },
        mounted() {
            this.$store.dispatch('tags/getTags');
        },
    };
</script>

<style scoped>
.home-page .sidebar p {
    margin-bottom: 0.2rem;
}
.tag-default {
    background-color: #818a91;
    color: #fff !important;
    font-size: 0.8rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    white-space: nowrap;
    margin-right: 3px;
    margin-bottom: 0.2rem;
    display: inline-block;
}
.tag-pill {
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
}
.tag-default:focus, .tag-default:hover {
    background-color: #687077;
}
.tag-default:hover {
    text-decoration: none;
    cursor: pointer;
}
</style>

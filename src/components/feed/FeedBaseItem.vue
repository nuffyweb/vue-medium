<template>
    <div class="article-preview">
        <div class="article-meta">
            <router-link
                :to="{name: 'UserProfile', params: {slug: feedItemData.author.username}}"
                class="card-img-top"
            >
                <img  :src="getImage()">
            </router-link>
            <div class="info">
                <router-link
                    :to="{name: 'UserProfile', params: {slug: feedItemData.author.username}}"
                    class="author"
                    href="">{{ feedItemData.author.username }}</router-link>
                <!--                * TODO: форматирование даты-->
                <span class="date text-muted">{{ feedItemData.createdAt | date }}</span>
            </div>
        </div>

        <router-link :to="{name:'Article', params:{slug:feedItemData.slug}}" class="preview-link">
            <h1 class="card-title">{{ feedItemData.title }}</h1>
            <p class="card-text">{{ feedItemData.description }}</p>
            <span>Read more...</span>
        </router-link>
    </div>
</template>

<script>
    //import {timeAgo} from '@/filters/time';
    export default {
        name: 'FeedBaseItem',
        props: {
            feedItemData: {
                type: Object,
                required: true,
            },
        },
        methods: {
            getImage() {
                return this.feedItemData.author.image ? this.feedItemData.author.image : 'https://static.productionready.io/images/smiley-cyrus.jpg';
            },
        },
    };
</script>

<style scoped>
.article-preview {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
}
.article-meta {
    display: block;
    position: relative;
    font-weight: 300;
}
.article-preview .article-meta {
    margin: 0 0 1rem 0;
}
.article-meta img {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    width: 32px;
    border-radius: 30px;
}
.article-meta .info {
    margin: 0 1.5rem 0 0.3rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 1rem;
}
.article-meta .info .author {
    display: block;
    font-weight: 500 !important;
}
.article-meta .info .date {
    color: #bbb;
    font-size: 0.8rem;
    display: block;
}
.preview-link {
    color: inherit !important;
    text-decoration: none;
}
.preview-link:hover {
    color: inherit !important;
    text-decoration: none;
}
.article-preview .preview-link h1 {
    font-weight: 600 !important;
    font-size: 1.5rem !important;
    margin-bottom: 3px;
}
.article-preview .preview-link p {
    font-weight: 300;
    color: #999;
    margin-bottom: 15px;
    font-size: 1rem;
    line-height: 1.3rem;
}
</style>

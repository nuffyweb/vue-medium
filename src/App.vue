<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>
    import MainLayout from '@/layouts/MainLayout';
    import EmptyLayout from '@/layouts/EmptyLayout';

    export default {
        computed: {
            layout() {
                return `${this.$route.meta.layout || 'empty'}-layout`;
            },
        },
        components: {
            EmptyLayout,
            MainLayout,
        },
        mounted() {
            this.$store.dispatch('auth/getCurrentUser');
        },
    };
</script>

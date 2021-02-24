<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>
    import MainLayout from '@/layouts/MainLayout';
    import EmptyLayout from '@/layouts/EmptyLayout';

    export default {
        data() {
            return {
                ready: false,
            };
        },
        computed: {
            layout() {
                return `${this.$route.meta.layout || 'empty'}-layout`;
            },
        },
        components: {
            EmptyLayout,
            MainLayout,
        },
        beforeCreate() {
            this.$store.dispatch('auth/getCurrentUser');
        },
    // created() {
    //     this.$store.dispatch("auth/getCurrentUser").then(() => {
    //         this.ready = true;
    //     });
    // },
    };
</script>

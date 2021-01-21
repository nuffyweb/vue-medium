<template>
    <fragment>
        <TheNavbar />
        <div class="app-main-layout">
            <main class="app-content">
                <div class="app-page">
                    <router-view> </router-view>
                </div>
            </main>
        </div>
    </fragment>
</template>
<script>
    import TheNavbar from '@/components/common/TheNavbar';
    export default {
        name: 'main-layout',
        data() {
            return {};
        },
        components: {TheNavbar},
    };
</script>

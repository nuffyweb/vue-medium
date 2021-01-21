<template>
    <fragment>
        <TheNavbarEmpty />
        <div class="empty-layout">
            <router-view> </router-view>
        </div>
    </fragment>
</template>
<script>
// import messages from './../utils/messages.js';
    import TheNavbarEmpty from '@/components/common/TheNavbarEmpty';
    export default {
        name: 'empty-layout',
        components: {TheNavbarEmpty},
    };
</script>

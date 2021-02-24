<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">MediumVue</a>
        </div>
    </nav>
</template>
<script>
    export default {
        data() {
            return {};
        },
        name: 'TheNavbar',
        computed: {
        // name() {
        //     return this.$store.getters.info.name;
        // },
        },
        mounted() {
        // this.interval = setInterval(() => {
        //     this.date = new Date();
        // }, 1000);
        // this.droppdown = M.Dropdown.init(this.$refs.dropdown, {
        //     constrainWidth: true,
        // });
        },
        methods: {
            async logout() {
            // await this.$store.dispatch("logout");
            // this.$router.push("/login?message=logout");
            },
        },
        beforeDestroy() {
        // clearInterval(this.interval);
        // if (this.droppdown && this.droppdown.destroy) {
        //     this.droppdown.destroy();
        // }
        },
    };
</script>

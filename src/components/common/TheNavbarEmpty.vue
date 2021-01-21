<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">MediumVue</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'Home' }"
                            class="nav-link"
                        >go Home</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'TheSignin' }"
                            class="nav-link"
                        >Sign in</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'TheSignup' }"
                            class="nav-link"
                        >Sign up</router-link
                        >
                    </li>
                </ul>
            </div>
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

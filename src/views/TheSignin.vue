<template>
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Sign in</h1>
                <p class="text-xs-center">
                    <a href="#/register" class="ng-hide"> Have an account? </a>
                </p>
                <!-- TODO сделать отдельный компонент -->
                <div
                    class="invalid-feedback"
                    v-bind:class="{ active: hasErrors }"
                    v-if="hasErrors"
                >
                    {{ getMessage(hasErrors) }}
                </div>

                <form @submit.prevent="onSubmitSignup">
                    <fieldset>
                        <fieldset class="form-group has-validation">
                            <input
                                class="form-control form-control-lg"
                                type="email"
                                v-model="oFormData.email"
                                placeholder="Email"
                            />
                        </fieldset>

                        <fieldset class="form-group has-validation">
                            <input
                                class="form-control form-control-lg"
                                type="password"
                                v-model="oFormData.password"
                                placeholder="Password"
                            />
                        </fieldset>

                        <button
                            class="btn btn-lg btn-primary pull-xs-right"
                            :disabled="isSubmitting"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import stringifyArr from '@/mixins/stringifyArr.js';
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                oFormData: {
                    email: '',
                    password: '',
                },
            };
        },
        name: 'TheSignin',
        mixins: [stringifyArr],
        computed: {
            ...mapState({
                isSubmitting: (state) => state.auth.isSubmitting,
                hasErrors: (state) => state.auth.validationErrors,
            }),
        },
        mounted() {},
        methods: {
            //valid user
            // jomfru@jomfru.en
            // jomfru123
            // jomfru
            onSubmitSignup() {
                this.$store.dispatch('auth/login', this.oFormData).then(() => {
                    this.$router.push({name: 'Home'});
                });
            },
            // TODO сделать отдельный компонент
            getMessage(errors) {
                return Object.keys(errors).map((name) => {
                    const message = errors[name].join(', ');
                    return `${name} ${message}`;
                })[0];
            },
        },
    };
</script>

<template>
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Sign up</h1>
                <p class="text-xs-center">
                    <a href="#/register" class="ng-hide"> Have an account? </a>
                </p>

                <form @submit.prevent="onSubmitSignup">
                    <fieldset>
                        <fieldset class="form-group has-validation">
                            <input
                                class="form-control form-control-lg"
                                type="text"
                                v-model="oFormData.username"
                                placeholder="Username"
                            />
                            <div
                                class="invalid-feedback"
                                v-bind:class="{ active: hasErrors.username }"
                                v-if="hasErrors && hasErrors.username"
                            >
                                {{ StringifyArr(hasErrors.username) }}
                            </div>
                        </fieldset>

                        <fieldset class="form-group has-validation">
                            <input
                                class="form-control form-control-lg"
                                type="email"
                                v-model="oFormData.email"
                                placeholder="Email"
                            />
                            <div
                                class="invalid-feedback"
                                v-bind:class="{ active: hasErrors.email }"
                                v-if="hasErrors && hasErrors.email"
                            >
                                {{ StringifyArr(hasErrors.email) }}
                            </div>
                        </fieldset>

                        <fieldset class="form-group has-validation">
                            <input
                                class="form-control form-control-lg"
                                type="password"
                                v-model="oFormData.password"
                                placeholder="Password"
                            />
                            <div
                                class="invalid-feedback"
                                v-bind:class="{ active: hasErrors.password }"
                                v-if="hasErrors && hasErrors.password"
                            >
                                {{ StringifyArr(hasErrors.password) }}
                            </div>
                        </fieldset>

                        <button
                            class="btn btn-lg btn-primary pull-xs-right"
                            :disabled="isSubmitting"
                            type="submit"
                        >
                            Sign up
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
                    username: '',
                },
            };
        },
        name: 'TheSignup',
        mixins: [stringifyArr],
        computed: {
            ...mapState({
                isSubmitting: state => state.auth.isSubmitting,
                hasErrors: state => state.auth.validationErrors,
            }),
        },
        mounted() {},
        methods: {
            //valid user
            // jomfru@jomfru.en
            // jomfru123
            // jomfru
            onSubmitSignup() {
                this.$store.dispatch('auth/register', this.oFormData).then(() => {
                    this.$router.push({name: 'Home'});
                });
            },
        },
    };
</script>

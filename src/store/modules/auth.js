import authService from '@/services/auth.service.js';
import userService from '@/services/user.service.js';
import {setItem} from '@/services/storage.service.js';
import {Promise} from 'core-js';
const state = {
    accessTokenExpDate: '',
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null,
    isLoading: false,
};
const getters = {
    isLoggedIn: state => {
        return Boolean(state.isLoggedIn);
    },
    isAnonymous: state => {
        return state.isLoggedIn === false;
    },
};
const actions = {
    register(context, credentials) {
        return new Promise((resolve) => {
            context.commit('REGISTER_START');
            authService.register(credentials)
                .then(response => {
                    console.log(response);
                    context.commit('REGISTER_SECCESS', response.data.user);
                    setItem('accessToken', response.data.user.token);
                    resolve(response.data.user);
                })
                .catch((err) => {
                    console.log('err');
                    context.commit('REGISTER_FAIL', err.response.data.errors);
                    console.log(err);
                });
        });
    },
    login(context, credentials) {
        return new Promise((resolve) => {
            context.commit('LOGIN_START');
            authService.login(credentials)
                .then(response => {
                    console.log(response);
                    context.commit('LOGIN_SECCESS', response.data.user);
                    setItem('accessToken', response.data.user.token);
                    resolve(response.data.user);
                })
                .catch((err) => {
                    console.log('err');
                    context.commit('LOGIN_FAIL', err.response.data.errors);
                    console.log(err);
                });
        });
    },
    // TODO вынести user в отдельный модуль
    getCurrentUser(context) {
        return new Promise((resolve) => {
            context.commit('GET_CURRENT_USER_START');
            userService.getCurrentUser()
                .then(response => {
                    console.log(response);
                    context.commit('GET_CURRENT_USER_SECCESS', response.data.user);
                    resolve(response.data.user);
                })
                .catch((err) => {
                    console.log('err');
                    context.commit('GET_CURRENT_USER_FAIL', err.response.data.errors);
                    console.log(err);
                });
        });
    },

};
const mutations = {
    REGISTER_START(state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },
    REGISTER_SECCESS(state, payload) {
        state.isSubmitting = false;
        state.currentUser = payload;
        state.isLoggedIn = true;
    },
    REGISTER_FAIL(state, payload) {
        state.isSubmitting = false;
        state.validationErrors = payload;
    },
    LOGIN_START(state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },
    LOGIN_SECCESS(state, payload) {
        state.isSubmitting = false;
        state.currentUser = payload;
        state.isLoggedIn = true;
    },
    LOGIN_FAIL(state, payload) {
        state.isSubmitting = false;
        state.validationErrors = payload;
    },
    SET_ATOKEN_EXP_DATE(state, expDate) {
        state.accessTokenExpDate = expDate;
    },

    GET_CURRENT_USER_START(state) {
        state.isLoading = true;
    },
    GET_CURRENT_USER_SECCESS(state, payload) {
        state.isLoading = false;
        state.currentUser = payload;
        state.isLoggedIn = true;
    },
    GET_CURRENT_USER_FAIL(state) {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.currentUser = null;
    },
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

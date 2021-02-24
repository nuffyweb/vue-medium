import feedService from '@/services/feed.service.js';
import {Promise} from 'core-js';
const state = {
    data: null,
    isLoading: false,
    error: null,
};
const getters = {

};
const actions = {
    getFeed(context, {apiUrl}) {
        return new Promise((resolve) => {
            context.commit('GET_FEED_START');
            feedService.getFeed(apiUrl)
                .then(response => {
                    console.log(response);
                    context.commit('GET_FEED_SUCCESS', response.data);
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log('err');
                    context.commit('GET_FEED_FAIL', err.response.data.errors);
                    console.log(err);
                });
        });
    },
};
const mutations = {
    GET_FEED_START(state) {
        state.isLoading = true;
        state.data = null;
    },
    GET_FEED_SUCCESS(state, payload) {
        state.isLoading = false;
        state.data = payload;
    },
    GET_FEED_FAIL(state, payload) {
        state.isLoading = false;
        state.error = payload;
    },
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

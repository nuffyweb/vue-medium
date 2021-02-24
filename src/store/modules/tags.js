import TagsService from '@/services/tags.service.js';
import {Promise} from 'core-js';
const state = {
    data: null,
    isLoading: false,
    error: null,
};
const getters = {

};
const actions = {
    getTags(context) {
        return new Promise((resolve) => {
            context.commit('GET_TAGS_START');
            TagsService.getTags()
                .then(response => {
                    console.log(response);
                    context.commit('GET_TAGS_SUCCESS', response.data.tags);
                    resolve(response.data);
                })
                .catch((err) => {
                    console.log('err');
                    context.commit('GET_TAGS_FAIL', err.response.data.errors);
                    console.log(err);
                });
        });
    },
};
const mutations = {
    GET_TAGS_START(state) {
        state.isLoading = true;
        state.data = null;
    },
    GET_TAGS_SUCCESS(state, payload) {
        state.isLoading = false;
        state.data = payload;
    },
    GET_TAGS_FAIL(state, payload) {
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

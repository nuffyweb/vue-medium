import Vue from 'vue';
import '@/plugins/axios';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';
import DateFilter from '@/filters/date.filter';
import '@/config';

Vue.config.productionTip = false;
Vue.filter('date', DateFilter);
new Vue({
    router,
    store,
    i18n,
    mounted() {
        store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth);
        window.addEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth));
    },

    beforeDestroy() {
        window.removeEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth));
    },
    render: (h) => h(App),
}).$mount('#app');

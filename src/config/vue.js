import Vue from 'vue';
import dateFilter from '@/filters/date.filter.js';
// import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
// /* eslint-disable import/no-extraneous-dependencies */
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// /* eslint-enable import/no-extraneous-dependencies */
import '@/assets/scss/app.scss';

import MainLayout from '@/layouts/MainLayout';
import EmptyLayout from '@/layouts/EmptyLayout';

//import '@/plugins/axios';
import currentUser from '@/mixins/currentUser';
Vue.mixin(currentUser);
import {currency} from '@/filters/currency';

import Fragment from 'vue-fragment';

Vue.config.productionTip = false;

Vue.filter('date', dateFilter);

// import notifyPlugin from '@/utils/notify.plugin.js';
// Vue.use(notifyPlugin)
Vue.component('default-layout', MainLayout);
Vue.component('base-layout', EmptyLayout);

// import '@/registerServiceWorker';
Vue.filter('currency', currency);
Vue.use(Fragment.Plugin);

import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const configAxios = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
    baseURL: 'https://conduit.productionready.io/api/',
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(configAxios);

_axios.interceptors.request.use(
    (configAxios) => configAxios,

    (error) => Promise.reject(error),
);

// Add a response interceptor
_axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

Plugin.install = function Axios(Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            },
        },
        $axios: {
            get() {
                return _axios;
            },
        },
    });
};

Vue.use(Plugin);

export default Plugin;

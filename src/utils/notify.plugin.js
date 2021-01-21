export default {
    install(Vue) {
        Vue.prototype.$message = function message(html) {
            console.log({html});
        };

        Vue.prototype.$error = function error(html) {
            console.log({html: `[Ошибка]: ${html}`});
        };
    },
};

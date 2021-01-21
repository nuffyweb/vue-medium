const state = {
    windowWidth: 0,
    /**
     * breakpoint constants
     */
    widthExtraSmall: 320,
    widthSmall: 640,
    widthTablet: 1024,
};
const getters = {
    isExtraSmall: (state) => state.windowWidth <= state.widthExtraSmall,
    isSmall: (state) => state.windowWidth <= state.widthSmall,
    isTablet: (state) => state.windowWidth <= state.widthTablet,
    isDesktop: (state) => state.windowWidth > state.widthTablet,
};
const mutations = {
    SET_WINDOW_WIDTH(state, value) {
        state.windowWidth = value;
    },
};
export default {
    namespaced: true,
    state,
    mutations,
    getters,
};

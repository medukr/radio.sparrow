export default {
    namespaced: true,
    state: {
        scrollTop: 0
    },
    getters: {
        scrollTop(state){
            return state.scrollTop;
        }
    },
    mutations:{
        setScrollTop(state, data){
            state.scrollTop = data;
        }
    },
    actions:{
        setScrollTop(store, data){
            store.commit('setScrollTop', data)
        }
    }
}
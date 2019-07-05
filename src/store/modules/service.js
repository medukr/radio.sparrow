export default {
    namespaced: true,
    state: {
        scrollTop: window.pageYOffset + window.innerHeight
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
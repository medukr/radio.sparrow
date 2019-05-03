import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        current: null,
        paused: true,
    },
    getters: {
        current(state){
            return state.current
        }
    },
    mutations:{
        setCurrent(state, payLoad){
            state.current = payLoad;
        }
    },
    actions: {
        setCurrent(store, payLoad){

            store.commit('setCurrent', payLoad);
        }
    }

}
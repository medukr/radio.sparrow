import Vue from 'vue';
export default {
    namespaced: true,
    state:{
        status: '',
        paused: true,
        domAudio: Element
    },
    getters: {
        status(state) {
            return state.status;
        },
        paused(state) {
            return state.paused;
        },
        domAudio(state) {
            return state.domAudio;
        }
    },
    mutations: {
        setStatus(state, payLoad){
            state.status = payLoad;
        },
        setPaused(state, payLoad){
            state.paused = payLoad;
        },
        setDomAudio(state, payLoad){
            state.domAudio = payLoad
        }
    },
    actions: {
        setStatus(store, payLoad){
            store.commit('setStatus', payLoad)
        },
        setPaused(store, payLoad) {
            store.commit('setPaused', payLoad)
        },
        setDomAudio(store, payLoad){
            store.commit('setDomAudio', payLoad)
        }
    }


}
import Vue from 'vue';
export default {
    namespaced: true,
    state:{
        status: '',
        paused: true,
        domAudio: null,
        station: null,
        songHistory: null,
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
        },
        station(state){
            return state.station;
        },
        songHistory(state){
            return state.songHistory;
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
        },
        setStation(state, payLoad){
            state.station = payLoad;
        },
        setSongHistory(state, payLoad){
            state.songHistory = payLoad;
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
        },
        setStation(store, payLoad){
            store.commit('setStation', payLoad);
        },
        loadCurrentStation(store, payLoad){
            Vue.http.get('getCurrent.php', {
                params: {
                    id: payLoad
                }
            })
                .then(response => response.json())
                .then(data => {
                    store.commit('setStation', data);
                    store.dispatch('loadSongHistory');
                }).catch((res) => {
                    console.log('--->ERROR---> loadCurrentStation', res);
                }
            )
        },
        loadSongHistory(store, payLoad){
            Vue.http.get('getSongHistory.php', {
                params: {
                    id: payLoad
                }
            })
                .then(response => response.json())
                .then(data => {
                    store.commit('setSongHistory', data);
                }).catch((res) => {
                    console.log('--->ERROR---> loadSongHistory', res);
                }
            )
        }
    }


}
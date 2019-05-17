import Vue from 'vue';
export default {
    namespaced: true,
    state:{
        status: '',
        paused: true,
        domAudio: null,
        station: null,
        songHistory: null,
        similarStations: null,
        service: {
            updateSongHistoryTimer: null
        }
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
        },
        similarStations(state){
            return state.similarStations;
        },
        service(state){
          return state.service;
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
        },
        setSimilarStations(state, payLoad){
            state.similarStations = payLoad
        },
        setUpdateSongHistoryTimer(state, payLoad){
            state.service.updateSongHistoryTimer = payLoad;
        },
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
            Vue.http.get('stations/specific', {
                params: {
                    id: payLoad,
                    token: '85ba37970e24fb1017669c536535211695f5805c27ec640f2028527d573892bd',
                }
            })
                .then(response => response.json())
                .then(data => {
                    store.commit('setStation', data);
                    store.dispatch('loadSongHistory', payLoad);
                    store.dispatch('loadSimilarStations', payLoad);
                }).catch((res) => {
                    console.log('--->ERROR---> loadCurrentStation', res);
                }
            )
        },
        loadSongHistory(store, payLoad){
            Vue.http.get('stations/song_history', {
                params: {
                    id: payLoad,
                    page: 1,
                    per_page: 20,
                    token: '85ba37970e24fb1017669c536535211695f5805c27ec640f2028527d573892bd',
                }
            })
                .then(response => response.json())
                .then(data => {
                    store.commit('setSongHistory', data);
                }).catch((res) => {
                    console.log('--->ERROR---> loadSongHistory', res);
                }
            )
        },
        loadSimilarStations(store, payLoad) {
            Vue.http.get('stations/similar', {
                params: {
                    id: payLoad,
                    page: 1,
                    per_page: 20,
                    token: '85ba37970e24fb1017669c536535211695f5805c27ec640f2028527d573892bd',
                }
            })
                .then(response => response.json())
                .then(data => {
                    store.commit('setSimilarStations', data);
                }).catch((res) => {
                    console.log('--->ERROR---> loadSimilarStations', res);
                }
            )
        },
        setUpdateSongHistoryTimer(store, payLoad){
            store.commit('setUpdateSongHistoryTimer', payLoad)
        },
        changeStation(store, id){
                if (store.state.station === null || id !== store.state.station.id)
                    store.dispatch('loadCurrentStation', id);
        }
    }


}
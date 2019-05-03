import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        currentRadio:{
            id:'',
            radioName: 'No Radio',
            radioSrc: '',
            radioImage: '/src/assets/images/radio_logo/noimage.png',
            trackName: 'no track',
            trackImage: '/src/assets/images/radio_logo/noimage.png',
            category: 'no category'
        },
        paused: true,
        stations : {}
    },
    getters: {
        radioSrc(state){
            return state.currentRadio.radioSrc;
        },
        radioName(state){
            return state.currentRadio.radioName;
        },
        radioImage(state){
            return state.currentRadio.radioImage;
        },
        trackName(state){
            return state.currentRadio.trackName;
        },
        trackImage(state){
            return state.currentRadio.trackImage;
        },
        category(state){
            return state.currentRadio.category;
        },
        stations(state){
            return state.stations;
        }

    },
    mutations:{
        loadStations(state, data){
            state.stations = data;
        },
        setCurrent(state, id){
            let cur = state.stations.filter((el)=>{
                return el.id === id
            });

            state.currentRadio = cur[0];

        }
    },
    actions: {
        loadStations(store){
            Vue.http.get('index.php')
                .then(response => response.json())
                .then(data => {
                    store.commit('loadStations', data)
                }).catch((res) => {
                    console.log('--->ERROR', res);
                }
            )
        },
        setCurrent(store, id){
            store.commit('setCurrent', id);
        }
    }

}
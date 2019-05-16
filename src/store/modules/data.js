import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        popular: null,
        recent: null,
        countries: null,
        primaryCategories: null,
        allCategories: null,
        stationsFromCategory: null,
        popStations: null,
        danceStations: null,
        speechStations: null,
        electronicStations: null,
        decadesStations: null,
    },
    getters: {
        popular(state){
            return state.popular;
        },
        recent(state){
            return state.recent;
        },
        countries(state){
            return state.countries;
        },
        primaryCategories(state){
            return state.primaryCategories
        },
        allCategories(state){
            return state.allCategories
        },
        stationsFromCategory(state){
            return state.stationsFromCategory;
        },
        popStations(state){
            return state.popStations;
        },
        danceStations(state){
            return state.danceStations;
        },
        speechStations(state){
            return state.speechStations;
        },
        electronicStations(state){
            return state.electronicStations;
        },
        decadesStations(state) {
            return state.decadesStations;
        },
    },
    mutations: {
        loadPopular(state, data){
            state.popular = data;
        },
        loadRecent(state, data){
            state.recent = data;
        },
        loadCountries(state, data){
            state.countries = data;
        },
        loadPrimaryCategories(state, data){
            state.primaryCategories = data;
        },
        loadAllCategories(state, data){
            state.allCategories = data;
        },
        loadStationsFromCategory(state, data){
            state.stationsFromCategory = data;
        },
        loadSpecialStations(state, payload){
            state[payload.title] = payload.data;
        }
    },
    actions: {
        loadPopular(store){
            Vue.http.get('getPopular.php')
                .then(response => response.json())
                .then(data => {
                    store.commit('loadPopular', data)
                }).catch((res) => {
                    console.log('--->ERROR---> load popular', res);
                }
            )
        },
        loadRecent(store){
            Vue.http.get('getRecent.php')
                .then(response => response.json())
                .then(data => {
                    store.commit('loadRecent', data)
                }).catch((res) => {
                    console.log('--->ERROR---> load loadRecent', res);
                }
            )
        },
        loadCountries(store){

            if (store.state.countries === null) {
                console.log('--->', 'loadCountries');
                Vue.http.get('getCountries.php')
                    .then(response => response.json())
                    .then(data => {
                        store.commit('loadCountries', data)
                    }).catch((res) => {
                        console.log('--->ERROR---> load Countries', res);
                    }
                )
            }

        },
        loadPrimaryCategories(store){
            Vue.http.get('getPrimaryCategories.php')
                .then(response => response.json())
                .then(data => {
                    store.commit('loadPrimaryCategories', data)
                }).catch((res) => {
                    console.log('--->ERROR---> load PrimaryCategories', res);
                }
            )
        },
        loadAllCategories(store){
            Vue.http.get('getAllCategories.php')
            // Vue.http.get('getPrimaryCategories.php')

                .then(response => response.json())
                .then(data => {
                    store.commit('loadAllCategories', data)
                }).catch((res) => {
                    console.log('--->ERROR---> load AllCategories', res);
                }
            )
        },
        loadStationsFromCategory(store, payLoad){
            /* payLoad: {
                     title: String,
                        id: Number
             }*/
            Vue.http.get('getStationsFromCategory.php', {
                params: {
                    id: payLoad.id
                }
            })
                .then(response => response.json())
                .then(data => {
                    switch (payLoad.title) {
                        case 'pop': store.commit('loadSpecialStations',  {
                            title: 'popStations',
                            data: data
                        });
                        break;
                        case 'dance': store.commit('loadSpecialStations',  {
                            title: 'danceStations',
                            data: data
                        });
                        break;
                        case 'electronic': store.commit('loadSpecialStations',  {
                            title: 'electronicStations',
                            data: data
                        });
                        break;
                        case 'speech': store.commit('loadSpecialStations',  {
                            title: 'speechStations',
                            data: data
                        });
                        break;
                        case 'decades': store.commit('loadSpecialStations', {
                                title: 'decadesStations',
                                data: data
                            });
                        break;
                        default: store.commit('loadStationsFromCategory', data)
                    }
                }).catch((res) => {
                    console.log('--->ERROR---> loadStationsFromCategory', res);
                }
            )
        },


        // getCountryName(store, code){
        //     let country = code;
        //
        //     if (store.state.countries !== null) {
        //         country = store.state.countries.filter((element)=>{
        //             return (element.country_code === code) ? true : false
        //         })
        //     }
        //
        //     if (country[0].name !== undefined){
        //         return  country[0].name;
        //     }
        //
        //     return code;
        // }

    }
}
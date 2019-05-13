import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        popular: null,
        recent: null,
        countries: null,
        primaryCategories: null,
        allCategories: null
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
        }
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
            Vue.http.get('getCountries.php')
                .then(response => response.json())
                .then(data => {
                    store.commit('loadCountries', data)
                }).catch((res) => {
                    console.log('--->ERROR---> load Countries', res);
                }
            )
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
                .then(response => response.json())
                .then(data => {
                    store.commit('loadAllCategories', data)
                }).catch((res) => {
                    console.log('--->ERROR---> load AllCategories', res);
                }
            )
        }
    }
}
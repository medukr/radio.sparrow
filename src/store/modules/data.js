import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        popular: null
    },
    getters: {
        popular(state){
            return state.popular;
        }
    },
    mutations: {
        loadPopular(state, data){
            state.popular = data;
        }
    },
    actions: {
        loadPopular(store){
            Vue.http.get('index.php')
                .then(response => response.json())
                .then(data => {
                    store.commit('loadPopular', data)
                }).catch((res) => {
                    console.log('--->ERROR---> load popular', res);
                }
            )
        }
    }
}
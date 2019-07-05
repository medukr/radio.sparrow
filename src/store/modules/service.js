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
        },
        animateScrollToTop(state, data) {
            if (window.scrollY > 0)
                setTimeout(() => {
                    window.scrollTo(0, window.scrollY - data.step);
                    this.commit('service/animateScrollToTop', {interval: data.interval, step:  data.step});
                }, data.interval)
        },
    },
    actions:{
        setScrollTop(store, data){
            store.commit('setScrollTop', data)
        },
        scrollToTop(store, data = {timeout: 1000, step: 20, time: 100}){
            if (window.scrollY > 0) {
                setTimeout(() => {
                    let scrollBegin = window.scrollY;

                    let iterations = Math.floor(scrollBegin / data.step);
                    let intervalTime = data.time / iterations; //ms
                    let sharpStep = scrollBegin / iterations; //px

                    store.commit('animateScrollToTop', {interval: intervalTime, step: sharpStep});

                }, data.timeout);
            }
        }
    }
}
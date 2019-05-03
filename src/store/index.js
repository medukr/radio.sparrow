import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import current from './modules/current';
import player from './modules/player'

export const store = new Vuex.Store({
    modules: {
        current,
        player
    },
    strict: process.env.NODE_ENV != 'production',
});
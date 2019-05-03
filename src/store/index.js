import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import current from './modules/current';
import player from './modules/player';
import data from './modules/data';

export const store = new Vuex.Store({
    modules: {
        current,
        player,
        data
    },
    strict: process.env.NODE_ENV != 'production',
});
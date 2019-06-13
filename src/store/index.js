import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import player from './modules/player';
import data from './modules/data';
import service from './modules/service'

export const store = new Vuex.Store({
    modules: {
        player,
        data,
        service
    },
    strict: process.env.NODE_ENV != 'production',
});
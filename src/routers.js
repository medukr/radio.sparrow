import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import AppPlay from './components/play'
import AppList from './components/list'
import AppError from './components/error404'
import AppAddNewRadio from './components/addNewRadio'
import AppSearch from './components/search'

// import {store} from './store';

const routes = [

    {
        name: 'play',
        path: '/play',
        component: AppPlay
    },
    {

        path: '',
        component: AppList
    },
    {
        name: 'playlist_add',
        path: '/playlist_add',
        component: AppAddNewRadio
    },
    {
        name: 'search',
        path: '/search',
        component: AppSearch
    },
    // {
    //     name: 'list',
    //     path: '/list',
    //     component: AppStationList,
    //     beforeEnter(from, to, next){
    //         store.dispatch('products/loadItems');
    //         next();
    //     }
    // },
    // {
    //     name: 'products',
    //     path: '/products/:id',
    //     component: Product
    // },

    // {
    //     path: '/checkout',
    //     component: Checkout
    // },
    {
        path: '*',
        component: AppError
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});
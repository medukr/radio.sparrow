import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import AppPlay from './components/play'
import AppList from './components/list'
import AppError from './components/error404'
import AppHistory from './components/history'
import AppAddNewRadio from './components/addNewRadio'
import AppFavorites from './components/favorites'
import AppCategories from './components/categories'
import AppSearch from './components/search'

// import {store} from './store';

const routes = [
    {
        path: '',
        redirect: {name: 'list'}
    },
    {
        name: 'play',
        path: '/play',
        component: AppPlay
    },
    {
        name: 'list',
        path: '/list',
        component: AppList
    },
    {
        name: 'history',
        path: '/history',
        component: AppHistory
    },
    {
        name: 'playlist_add',
        path: '/playlist_add',
        component: AppAddNewRadio
    },
    {
        name: 'favorites',
        path: '/favorites',
        component: AppFavorites
    },
    {
        name: 'categories',
        path: '/categories',
        component: AppCategories
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
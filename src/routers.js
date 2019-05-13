import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import AppPlay from './components/play'
import AppList from './components/list'
import AppError from './components/error404'
import AppSearch from './components/search'
import AppListFromCategory from './components/listFromCategory'

// import {store} from './store';

const routes = [

    {
        name: 'play',
        path: '/play/:id',
        component: AppPlay
    },
    {
        name: 'home',
        path: '',
        component: AppList
    },
    {
        name: 'listFromCategory',
        path: '/category/:slug',
        component: AppListFromCategory
    },
    {
        name: 'search',
        path: '/search',
        component: AppSearch
    },
    {
        path: '*',
        component: AppError
    }
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

];

export const router = new VueRouter({
    routes,
    mode: 'history'
});
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// import cart from './modules/cart';
// import products from './modules/products';
// import menu from './modules/menu';
// import orderForm from './modules/orderForm';

export const store = new Vuex.Store({
    modules: {
        // menu,
        // products,
        // cart,
        // orderForm
    },
    strict: process.env.NODE_ENV != 'production',
});
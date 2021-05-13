import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import {  vendorGetters, commoditiyGetters } from './getters';
import {  cartMutations, vendorMutations, commoditiyMutations } from './mutations';
import {  vendorActions, commoditiyActions } from './actions';

const API_BASE = 'http://localhost:3000/api/v1';


Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected commoditiy
    commoditiy: {},
    // all commodities
    commodities: [],
    // all vendors
    vendors: [],
  },
  mutations: {
    ...cartMutations,
    ...commoditiyMutations,
    ...vendorMutations,
  },
  getters: {
    ...vendorGetters,
    ...commoditiyGetters,
  },
  actions: {
    ...commoditiyActions,
    ...vendorActions,
  }
});

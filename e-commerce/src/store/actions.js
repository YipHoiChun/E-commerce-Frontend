import axios from 'axios';
import {
  add_commoditiy,
  add_commoditiy_success,
  commoditiy_by_id,
  commoditiy_by_id_success,
  update_commoditiy,
  update_commoditiy_success,
  remove_commoditiy,
  remove_commoditiy_success,
  all_commodities,
  all_commodities_success,
  all_vendors,
  all_vendors_success,
  add_vendor,
  add_vendor_success,
  vendor_by_id,
  vendor_by_id_success,
  update_vendor,
  update_vendor_success,
  remove_vendor,
  remove_vendor_success,
  } from './mutation-types';
  


const API_BASE = 'http://localhost:3000/api/v1';

//commodities commodity
export const commoditiyActions = {
  allCommodities({ commit }) {
    commit(all_commodities)

    axios.get(`${API_BASE}/commodities`).then(response => {
      commit(all_commodities_success, {
        commodities: response.data,
      });
    })
  },
  commoditiyById({ commit }, payload) {
    commit(commoditiy_by_id);

    const { commoditiyId } = payload;
    axios.get(`${API_BASE}/commodities/${commoditiyId}`).then(response => {
      commit(commoditiy_by_id_success, {
        commoditiy: response.data,
      });
    })
  },
  removeCommoditiy({ commit }, payload) {
    commit(remove_commoditiy);

    const { commoditiyId } = payload;
    axios.delete(`${API_BASE}/commodities/${commoditiyId}`).then(() => {
      commit(remove_commoditiy_success, {
        commoditiyId,
      });
    })
  },
  updateCommoditiy({ commit }, payload) {
    commit(update_commoditiy);

    const { commoditiy } = payload;
    axios.put(`${API_BASE}/commodities/${commoditiy._id}`, commoditiy).then(() => {
      commit(update_commoditiy_success, {
        commoditiy,
      });
    })
  },
  addCommoditiy({ commit }, payload) {
    commit(add_commoditiy);

    const { commoditiy } = payload;
    axios.post(`${API_BASE}/commodities`, commoditiy).then(response => {
      commit(add_commoditiy_success, {
        commoditiy: response.data,
      })
    })
  }
};
//vendor vendors Vendor
export const vendorActions = {
  allVendors({ commit }) {
    commit(all_vendors);

    axios.get(`${API_BASE}/vendors`).then(response => {
      commit(all_vendors_success, {
        vendors: response.data,
      });
    })
  },
  vendorById({ commit }, payload) {
    commit(vendor_by_id);

    const { vendorId } = payload;
    axios.get(`${API_BASE}/vendors/${vendorId}`).then(response => {
      commit(vendor_by_id_success, {
        vendor: response.data,
      });
    })
  },
  removeVendor({ commit }, payload) {
    commit(remove_vendor);

    const { vendorId } = payload;
    axios.delete(`${API_BASE}/vendors/${vendorId}`).then(() => {
      commit(remove_vendor_success, {
        vendorId,
      });
    })
  },
  updateVendor({ commit }, payload) {
    commit(update_vendor);

    const { vendor } = payload;
    axios.put(`${API_BASE}/vendors/${vendor._id}`, vendor).then(() => {
      commit(update_vendor_success, {
        vendor,
      });
    })
  },
  addVendor({ commit }, payload) {
    commit(add_vendor);

    const { vendor } = payload;
    axios.post(`${API_BASE}/vendors`, vendor).then(response => {
      commit(add_vendor_success, {
        vendor: response.data,
      })
    })
  }
};
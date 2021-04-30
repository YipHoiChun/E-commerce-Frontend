import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
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



export const commoditiyMutations = {
  [all_commodities](state) {
    state.showLoader = true;
  },
  [all_commodities_success](state, payload) {
    const { commodities } = payload;

    state.showLoader = false;
    state.commodities = commodities;
  },
  [commoditiy_by_id](state) {
    state.showLoader = true;
  },
  [commoditiy_by_id_success](state, payload) {
    state.showLoader = false;

    const { commoditiy } = payload;
    state.commoditiy = commoditiy;
  },
  [remove_commoditiy](state) {
    state.showLoader = true;
  },
  [remove_commoditiy_success](state, payload) {
    state.showLoader = false;

    const { commoditiyId } = payload;
    state.commodities = state.commodities.filter(commoditiy => commoditiy._id !== commoditiyId);
  },
  [update_commoditiy](state) {
    state.showLoader = true;
  },
  [update_commoditiy_success](state, payload) {
    state.showLoader = false;

    const { commoditiy: newCommoditiy } = payload;
    state.commoditiy = newCommoditiy;
    state.commodities = state.commodities.map(commoditiy => {
      if (commoditiy._id === newCommoditiy._id) {
        return newCommoditiy;
      }

      return commoditiy;
    })
  },
  [add_commoditiy](state) {
    state.showLoader = true;
  },
  [add_commoditiy_success](state, payload) {
    state.showLoader = false;

    const { commoditiy } = payload;
    state.commodities = state.commodities.concat(commoditiy);
  }
};

export const cartMutations = {
  [ADD_TO_CART](state, payload) {
    const { commoditiy } = payload;
    state.cart.push(commoditiy)
  },
  [REMOVE_FROM_CART](state, payload) {
    const { commoditiyId } = payload
    state.cart = state.cart.filter(commoditiy => commoditiy._id !== commoditiyId)
  },
}

export const vendorMutations = {
  [all_vendors](state) {
    state.showLoader = true;
  },
  [all_vendors_success](state, payload) {
    const { vendors } = payload;

    state.showLoader = false;
    state.vendors = vendors;
  },
  [vendor_by_id](state) {
    state.showLoader = true;
  },
  [vendor_by_id_success](state, payload) {
    state.showLoader = false;

    const { vendor } = payload;
    state.vendor = vendor;
  },
  [remove_vendor](state) {
    state.showLoader = true;
  },
  [remove_vendor_success](state, payload) {
    state.showLoader = false;

    const { vendorId } = payload;
    state.vendors = state.vendors.filter(vendor => vendor._id !== vendorId);
  },
  [update_vendor](state) {
    state.showLoader = true;
  },
  [update_vendor_success](state, payload) {
    state.showLoader = false;

    const { vendor: newVendor } = payload;
    state.vendors = state.vendors.map(vendor => {
      if (vendor._id === newVendor._id) {
        return newVendor;
      }

      return vendor;
    })
  },
  [add_vendor](state) {
    state.showLoader = true;
  },
  [add_vendor_success](state, payload) {
    state.showLoader = false;

    const { vendor } = payload;
    state.vendors = state.vendors.concat(vendor);
  }
};
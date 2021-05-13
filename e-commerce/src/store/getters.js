export const commoditiyGetters = {
  allCommodities(state) {
    return state.commodities
  },
  commoditiyById: (state, getters) => id => {
    if (getters.allCommodities.length > 0) {
      return getters.allCommodities.filter(commoditiy => commoditiy._id === id)[0]
    } else {
      return state.commoditiy;
    }
  }
}

export const vendorGetters = {
  allVendors(state) {
    return state.vendors;
  },
  vendorById: (state, getters) => id => {
    if (getters.allVendors.length > 0) {
      return getters.allVendors.filter(vendor => vendor._id === id)[0]
    } else {
      return state.vendor;
    }
  }
}
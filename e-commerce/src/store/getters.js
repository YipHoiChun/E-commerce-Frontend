export const productGetters = {
  allProducts(state) {
    return state.products
  },
  productById: (state, getters) => id => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filter(product => product._id === id)[0]
    } else {
      return state.product;
    }
  }
}

export const manufacturerGetters = {
  allManufacturers(state) {
    return state.manufacturers;
  },
  manufacturerById: (state, getters) => id => {
    if (getters.allManufacturers.length > 0) {
      return getters.allManufacturers.filter(manufacturer => manufacturer._id === id)[0]
    } else {
      return state.manufacturer;
    }
  }
}

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
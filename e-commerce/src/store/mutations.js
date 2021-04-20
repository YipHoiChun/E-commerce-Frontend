import {
  add_product,
  add_product_success,
  product_by_id,
  product_by_id_success,
  update_product,
  update_product_success,
  remove_product,
  remove_product_success,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  all_products,
  all_products_success,
  all_manufacturers,
  all_manufacturers_success,
  manufacturer_by_id,
  manufacturer_by_id_success,
  add_manufacturer,
  add_manufacturer_success,
  update_manufacturer,
  update_manufacturer_success,
  remove_manufacturer,
  remove_manufacturer_success,
} from './mutation-types';

export const productMutations = {
    [all_products](state) {
      state.showLoader = true;
    },
    [all_products_success](state, payload) {
      const { products } = payload;
  
      state.showLoader = false;
      state.products = products;
    },
    [product_by_id](state) {
      state.showLoader = true;
    },
    [product_by_id_success](state, payload) {
      state.showLoader = false;
  
      const { product } = payload;
      state.product = product;
    },
    [remove_product](state) {
      state.showLoader = true;
    },
    [remove_product_success](state, payload) {
      state.showLoader = false;
  
      const { productId } = payload;
      state.products = state.products.filter(product => product._id !== productId);
    },
    [update_product](state) {
        state.showLoader = true;
      },
      [update_product_success](state, payload) {
        state.showLoader = false;
    
        const { product: newProduct } = payload;
        state.product = newProduct;
        state.products = state.products.map(product => {
          if (product._id === newProduct._id) {
            return newProduct;
          }
    
          return product;
        })
      },
      [add_product](state) {
        state.showLoader = true;
      },
      [add_product_success](state, payload) {
        state.showLoader = false;
    
        const { product } = payload;
        state.products = state.products.concat(product);
      }
  };
  
  export const cartMutations = {
    [ADD_TO_CART](state, payload) {
      const { product } = payload;
      state.cart.push(product)
    },
    [REMOVE_FROM_CART](state, payload) {
      const { productId } = payload
      state.cart = state.cart.filter(product => product._id !== productId)
    },
  }
  
  export const manufacturerMutations = {
    [all_manufacturers](state) {
      state.showLoader = true;
    },
    [all_manufacturers_success](state, payload) {
      const { manufacturers } = payload;
  
      state.showLoader = false;
      state.manufacturers = manufacturers;
    },
    [manufacturer_by_id](state) {
      state.showLoader = true;
    },
    [manufacturer_by_id_success](state, payload) {
      state.showLoader = false;
  
      const { manufacturer } = payload;
      state.manufacturer = manufacturer;
    },
    [remove_manufacturer](state) {
      state.showLoader = true;
    },
    [remove_manufacturer_success](state, payload) {
      state.showLoader = false;
  
      const { manufacturerId } = payload;
      state.manufacturers = state.manufacturers.filter(manufacturer => manufacturer._id !== manufacturerId);
    },
    [update_manufacturer](state) {
      state.showLoader = true;
    },
    [update_manufacturer_success](state, payload) {
      state.showLoader = false;
  
      const { manufacturer: newManufacturer } = payload;
      state.manufacturers = state.manufacturers.map(manufacturer => {
        if (manufacturer._id === newManufacturer._id) {
          return newManufacturer;
        }
  
        return manufacturer;
      })
    },
    [add_manufacturer](state) {
      state.showLoader = true;
    },
    [add_manufacturer_success](state, payload) {
      state.showLoader = false;
  
      const { manufacturer } = payload;
      state.manufacturers = state.manufacturers.concat(manufacturer);
    }
  }
  
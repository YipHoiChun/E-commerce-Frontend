import axios from 'axios';
import {
  add_product,
  add_product_success,
  product_by_id,
  product_by_id_success,
  update_product,
  update_product_success,
  remove_product,
  remove_product_success,
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
  


const API_BASE = 'http://localhost:3000/api/v1';

export const productActions = {
  allProducts({ commit }) {
    commit(all_products)

    axios.get(`${API_BASE}/products`).then(response => {
      commit(all_products_success, {
        products: response.data,
      });
    })
  },
  productById({ commit }, payload) {
    commit(product_by_id);

    const { productId } = payload;
    axios.get(`${API_BASE}/products/${productId}`).then(response => {
      commit(product_by_id_success, {
        product: response.data,
      });
    })
  },
  removeProduct({ commit }, payload) {
    commit(remove_product);

    const { productId } = payload;
    axios.delete(`${API_BASE}/products/${productId}`).then(() => {
      commit(remove_product_success, {
        productId,
      });
    })
  },
  updateProduct({ commit }, payload) {
    commit(update_product);

    const { product } = payload;
    axios.put(`${API_BASE}/products/${product._id}`, product).then(() => {
      commit(update_product_success, {
        product,
      });
    })
  },
  addProduct({ commit }, payload) {
    commit(add_product);

    const { product } = payload;
    axios.post(`${API_BASE}/products`, product).then(response => {
      commit(add_product_success, {
        product: response.data,
      })
    })
  }
};

export const manufacturerActions = {
  allManufacturers({ commit }) {
    commit(all_manufacturers);

    axios.get(`${API_BASE}/manufacturers`).then(response => {
      commit(all_manufacturers_success, {
        manufacturers: response.data,
      });
    })
  },
  manufacturerById({ commit }, payload) {
    commit(manufacturer_by_id);

    const { manufacturerId } = payload;
    axios.get(`${API_BASE}/manufacturers/${manufacturerId}`).then(response => {
      commit(manufacturer_by_id_success, {
        manufacturer: response.data,
      });
    })
  },
  removeManufacturer({ commit }, payload) {
    commit(remove_manufacturer);

    const { manufacturerId } = payload;
    axios.delete(`${API_BASE}/manufacturers/${manufacturerId}`).then(() => {
      commit(remove_manufacturer_success, {
        manufacturerId,
      });
    })
  },
  updateManufacturer({ commit }, payload) {
    commit(update_manufacturer);

    const { manufacturer } = payload;
    axios.put(`${API_BASE}/manufacturers/${manufacturer._id}`, manufacturer).then(() => {
      commit(update_manufacturer_success, {
        manufacturer,
      });
    })
  },
  addManufacturer({ commit }, payload) {
    commit(add_manufacturer);

    const { manufacturer } = payload;
    axios.post(`${API_BASE}/manufacturers`, manufacturer).then(response => {
      commit(add_manufacturer_success, {
        manufacturer: response.data,
      })
    })
  }
}

<template>
  <div>
    <div class="title">
      <h1>In Stock</h1>
    </div>
    <commoditiy-list></commoditiy-list>
  </div>
</template>

<script>
// import ProductList from '@/components/products/ProductList.vue';
//   export default {
//     name: 'home',
//     data () {
//       return {
//         msg: 'Welcome to Your Vue.js App'
//       };
//     },
//     components: {
//       'product-list': ProductList
//     }
//   }
import CommoditiyList from '@/components/commodities/CommoditiyList.vue';
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },
    components: {
      'commoditiy-list': CommoditiyList
    }
  }
</script>
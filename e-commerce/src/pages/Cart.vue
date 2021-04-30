<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <template v-for="commoditiy in cart">
      <commoditiy-item :commoditiy="commoditiy" :key="commoditiy._id"></commoditiy-item>
    </template>
  </div>
</template>

<style>
/* commoditiy */
.commoditiy {
  border-bottom: 1px solid black;
}

.commoditiy__image  {
  width: 100px;
  height: 100px;
}
/* .product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
} */
</style>

<script>
import CommoditiyItem from "@/components/commodities/CommoditiyItem.vue";
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to the Cart Page",
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  components: {
    "commoditiy-item": CommoditiyItem,
  },
  methods: {
    removeFromCart(commoditiyId) {
      this.$store.commit("REMOVE_FROM_CART", {
        commoditiyId,
      });
    },
  },
};
// import ProductItem from "@/components/products/ProductItem.vue";
// export default {
//   name: "home",
//   data() {
//     return {
//       msg: "Welcome to the Cart Page",
//     };
//   },
//   computed: {
//     cart() {
//       return this.$store.state.cart;
//     },
//   },
//   components: {
//     "product-item": ProductItem,
//   },
//   methods: {
//     removeFromCart(productId) {
//       this.$store.commit("REMOVE_FROM_CART", {
//         productId,
//       });
//     },
//   },
// };
</script>
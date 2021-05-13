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
</script>
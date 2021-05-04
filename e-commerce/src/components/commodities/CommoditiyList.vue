<template>
  <div>
    <div class="commodities">
      <!-- This is CommoditiyList -->
      <div class="container">
        <h1>Welcome to the online store</h1>
      </div>
      <template v-for="commoditiy in commodities">
        <commoditiy-item
          :commoditiy="commoditiy"
          :key="commoditiy._id"
        ></commoditiy-item>
      </template>
    </div>
  </div>
</template>

<style>
</style>

<script>
import CommoditiyItem from "./CommoditiyItem.vue";
export default {
  name: "commoditiy-list",
  created() {
    if (this.commodities.length === 0) {
      this.$store.dispatch("allCommodities");
    }
  },
  computed: {
    // a computed getter
    commodities() {
      return this.$store.getters.allCommodities;
    },
  },
  components: {
    "commoditiy-item": CommoditiyItem,
  },
  methods: {
    addToCart(commoditiy) {
      this.$store.commit("ADD_TO_CART", {
        commoditiy,
      });
    },
  },
};
// import CommoditiyItem from "./CommoditiyItem.vue";
// export default {
//   name: "commoditiy-list",
//   created() {
//     if (this.commodities.length === 0) {
//       this.$store.dispatch("allCommodities");
//     }
//   },
//   computed: {
//     // a computed getter
//     commodities() {
//       return this.$store.getters.allCommodities;
//     },
//   },
//   components: {
//     "commoditiy-item": CommoditiyItem,
//   },
//   methods: {
//     addToCart(commoditiy) {
//       this.$store.commit("ADD_TO_CART", {
//         commoditiy,
//       });
//     },
//   },
// };
</script>
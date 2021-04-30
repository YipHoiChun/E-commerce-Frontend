<template>
  <div>
    <commoditiy-detail :commoditiy="commoditiy"></commoditiy-detail>
    <!-- <product-detail :product="product"></product-detail> -->
  </div>
</template>

<script>
//git
// import ProductDetail from '@/components/products/ProductDetail.vue';
// export default {
//   created() {
//     const { name } = this.product;
//     if (!name) {
//       this.$store.dispatch('productById', {
//         productId: this.$route.params['id']
//       });
//     }
//   },
//   computed: {
//     product() {
//       return this.$store.getters.productById(this.$route.params['id']);
//     }
//   },
//   components: {
//     'product-detail': ProductDetail,
//   }
// }
import CommoditiyDetail from "@/components/commodities/CommoditiyDetail.vue";
export default {
  created() {
    const { name } = this.commoditiy;
    if (!name) {
      this.$store.dispatch("commoditiyById", {
        commoditiyId: this.$route.params["id"],
      });
    }
  },
  computed: {
    commoditiy() {
      return this.$store.getters.commoditiyById(this.$route.params["id"]);
    },
  },
  components: {
    "commoditiy-detail": CommoditiyDetail,
  },
};
</script>

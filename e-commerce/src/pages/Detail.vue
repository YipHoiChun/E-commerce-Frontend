<template>
  <div>
    <commoditiy-detail :commoditiy="commoditiy"></commoditiy-detail>
  </div>
</template>

<script>

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

<template>
  <commoditiy-form
    @save-commoditiy="addCommoditiy"
    :model="model"
    :vendors="vendors"
  >
  </commoditiy-form>
</template>

<script>
import CommoditiyForm from '@/components/commodities/CommoditiyForm.vue';
export default {
  created() {
    if (this.vendors.length === 0) {
      this.$store.dispatch('allVendors');
    }
  },
  computed: {
    vendors() {
      return this.$store.getters.allVendors;
    },
    model() {
      return {};
    }
  },
  methods: {
    addCommoditiy(model) {
      this.$store.dispatch('addCommoditiy', {
        commoditiy: model,
      })
    },
  },
  components: {
  'commoditiy-form': CommoditiyForm
  }
}
</script>

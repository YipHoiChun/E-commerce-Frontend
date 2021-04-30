<template>
  <vendor-form
    @save-vendor="addVendor"
    :model="model"
  >
  </vendor-form>
</template>

<script>
import VendorForm from '@/components/VendorForm.vue';
export default {
  computed: {
    model() {
      return {};
    }
  },
  methods: {
    addVendor(model) {
      this.$store.dispatch('addVendor', {
        vendor: model,
      })
    },
  },
  components: {
  'vendor-form': VendorForm
  }
}
</script>

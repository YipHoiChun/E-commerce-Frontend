<template>
  <vendor-form @save-vendor="addVendor" :model="model" :isEditing="true">
  </vendor-form>
</template>

<script>
import VendorForm from "@/components/VendorForm.vue";
export default {
  created() {
    this.$store.dispatch("vendorById", {
      vendorId: this.$route.params["id"],
    });
  },
  computed: {
    model() {
      const vendor = this.$store.getters.vendorById(
        this.$route.params["id"]
      );
      return { ...vendor };
    },
  },
  methods: {
    addVendor(model) {
      this.$store.dispatch("updateVendor", {
        vendor: model,
      });
    },
  },
  components: {
    "vendor-form": VendorForm,
  },
};
</script>

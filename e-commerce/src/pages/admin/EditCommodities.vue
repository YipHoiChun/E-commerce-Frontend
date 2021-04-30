<template>
  <div>
    <div class="title">
      <h1>This is Admin/EditCommodities</h1>
    </div>
    <commoditiy-form
      @save-commoditiy="updateCommoditiy"
      :model="model"
      :vendors="vendors"
      :isEditing="true"
      ></commoditiy-form>
  </div>
</template>

<script>
import CommoditiyForm from '@/components/commodities/CommoditiyForm.vue';
export default {
  created() {
    const { name } = this.model;
    if (!name) {
      this.$store.dispatch('commoditiyById', {
        commoditiyId: this.$route.params['id']
      });
    }

    if (this.venders.length === 0) {
      this.$store.dispatch('allVenders');
    }
  },
  computed: {
    venders() {
      return this.$store.getters.allVenders;
    },
    model() {
      const commoditiy = this.$store.getters.commoditiyById(this.$route.params['id']);
      return { ...commoditiy, vender: { ...commoditiy.vender } };
    }
  },
  methods: {
    updateCommoditiy(commoditiy) {
      this.$store.dispatch('updateCommoditiy', {
        commoditiy,
      })
    }
  },
  components: {
    'commoditiy-form': CommoditiyForm
  }
}
</script>

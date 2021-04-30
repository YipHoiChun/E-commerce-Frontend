<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Nmae</th>
          <th>Price</th>
          <th>Vendor</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="commoditiy in commodities" :key="commoditiy._id">
          <td>{{commoditiy.name}}</td>
          <td>{{commoditiy.price}}</td>
          <td>{{commoditiy.vendor.name}}</td>
          <td class="modify"><router-link :to="'/admin/Edit/' + commoditiy._id">Edit</router-link></td>
          <td class="remove"><a @click="removeCommoditiy(commoditiy._id)" href="#">Remove</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>

<style>
table {
  margin: 0 auto;
}

.modify {
  color: blue;
}

.remove a {
  color: red;
}
</style>

<script>
export default {
  created() {
    if (this.commodities.length === 0) {
      this.$store.dispatch('allCommodities');
    }
  },
  computed: {
    commodities() {
      return this.$store.getters.allCommodities
    }
  },
  methods: {
    removeCommoditiy(commoditiyId) {
      const res = confirm('Do you want to delete this commoditiy?');

      if (res) {
        this.$store.dispatch('removeCommoditiy', {
          commoditiyId,
        })
      }
    }
  }
}
</script>
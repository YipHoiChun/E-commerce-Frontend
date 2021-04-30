<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Vendors</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vendor in vendors" :key="vendor._id">
          <td>{{vendor.name}}</td>
          <td class="modify"><router-link :to="'/admin/vendors/edit/' + vendor._id">edit</router-link></td>
          <td class="remove"><a @click="removeVendor(vendor._id)" href="#">remove</a></td>
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
    if (this.vendors.length === 0) {
      this.$store.dispatch('allVendors');
    }
  },
  computed: {
    vendors() {
      return this.$store.getters.allVendors
    }
  },
  methods: {
    removeVendor(vendorId) {
      ///Use the confirmation method of JavaScript BOM to ask the user whether to delete this vendor
      const res = confirm('Do you want to delete this vendor?');

      //If the user agrees, then delete the vendor
      if (res) {
        this.$store.dispatch('removeVendor', {
          vendorId,
        })
      }
    }
  }
}
</script>

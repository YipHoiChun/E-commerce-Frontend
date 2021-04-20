<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="manufacturer in manufacturers" :key="manufacturer._id">
          <td>{{manufacturer.name}}</td>
          <td class="modify"><router-link :to="'/admin/manufacturers/edit/' + manufacturer._id">edit</router-link></td>
          <td class="remove"><a @click="removeManufacturer(manufacturer._id)" href="#">remove</a></td>
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
    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers');
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers
    }
  },
  methods: {
    removeManufacturer(manufacturerId) {
      ///Use the confirmation method of JavaScript BOM to ask the user whether to delete this manufacturer
      const res = confirm('Do you want to delete this manufacturer?');

      //If the user agrees, then delete the manufacturer
      if (res) {
        this.$store.dispatch('removeManufacturer', {
          manufacturerId,
        })
      }
    }
  }
}
</script>

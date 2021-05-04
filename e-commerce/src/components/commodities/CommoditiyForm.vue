<template>
  <form @submit.prevent="saveCommoditiy">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          v-model="model.name"
          name="name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
          v-model="model.price"
          name="price"
        />
      </div>
      <div class="form-group">
        <label>Vendor</label>
        <select
          type="text"
          class="form-control"
          v-model="model.vendor"
          name="vendor"
        >
          <template v-for="vendor in vendors">
            <option
              :key="vendor._id"
              :value="vendor._id"
              :selected="vendor._id == (model.vendor && model.vendor._id)"
            >
              {{ vendor.name }}
            </option>
          </template>
        </select>
      </div>
    </div>

    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          lass="form-control"
          placeholder="Image"
          v-model="model.image"
          name="image"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="model.description"
          name="description"
        ></textarea>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <!-- Conditional rendering for input text -->
          <span v-if="isEditing">Update Commoditiy</span>
          <span v-else>Add Commoditiy</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["model", "vendors", "isEditing"],
  methods: {
    saveCommoditiy() {
      this.$emit("save-commoditiy", this.model);
    },
  },
};
</script>
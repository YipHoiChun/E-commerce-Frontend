<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart">Add to shopping cart</button>
    <button v-else class="button" @click="removeFromCart(commoditiy._id)">Remove from shopping cart</button>
  </div>
</template>

<script>
export default {
  props: ['commoditiy'],
  computed: {
    isAdding() {
      let isAdding = true;
      this.cart.map(commoditiy => {
        if (commoditiy._id === this.commoditiy._id) {
          isAdding = false;
        }
      });

      return isAdding;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('ADD_TO_CART', {
        commoditiy: this.commoditiy,
      })
    },
    removeFromCart(commoditiyId) {
      this.$store.commit('REMOVE_FROM_CART', {
        commoditiyId,
      })
    }
  }
}
</script>

<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart">Add to shopping cart</button>
    <button v-else class="button" @click="removeFromCart(product._id)">Remove from shopping cart</button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    isAdding() {
      let isAdding = true;
      this.cart.map(product => {
        if (product._id === this.product._id) {
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
        product: this.product,
      })
    },
    removeFromCart(productId) {
      this.$store.commit('REMOVE_FROM_CART', {
        productId,
      })
    }
  }
}
</script>

<template>
  <div>
    <div class="product">
      <router-link :to="'/detail/' + product._id" class="product-link">
        <p class="product__name">Name：{{product.name}}</p>
        <p class="product__description">Description：{{product.description}}</p>
        <p class="product__price">Price：{{product.price}}</p>
        <p class="product.manufacturer">Manufacturer：{{product.manufacturer.name}}</p>
        <img :src="product.image" alt="" class="product__image">
      </router-link>
      <product-button :product="product"></product-button>
    </div>
  </div>
</template>

<style>
.product {
  border-bottom: 1px solid black;
  float: inline-start 
}

.product__image {
  width: 125px;
  height: 125px;
}
</style>

<script>
import ProductButton from './ProductButton';
export default {
  name: 'product-item',
  props: ['product'],
  components: {
    'product-button': ProductButton,
  }
}
</script>

<template>
  <div>
    <div class="commoditiy">
      <router-link :to="'/detail/' + commoditiy._id" class="commoditiy-link">
        <p class="commoditiy__name">Name：{{commoditiy.name}}</p>
        <p class="commoditiy__description">Description{{commoditiy.description}}</p>
        <p class="commoditiy__price">Price{{commoditiy.price}}</p>
        <p class="commoditiy.vendor">Vendor{{commoditiy.vendor.name}}</p>
        <img :src="commoditiy.image" alt="" class="commoditiy__image">
      </router-link>
      <commoditiy-button :commoditiy="commodity"></commoditiy-button>
    </div>
  </div>
</template>

<style>
.commoditiy {
  border-bottom: 1px solid black;
  float: inline-start 
}

.commoditiy__image {
  width: 100px;
  height: 100px;
}
</style>

<script>
import CommoditiyButton from './CommoditiyButton';
export default {
  name: 'commoditiy-item',
  props: ['commoditiy'],
  components: {
    'commoditiy-button': CommoditiyButton,
  }
}
</script>
<template>
  <div class="commoditiy-details">
    <div class="commoditiy-details__image">
      <img :src="commoditiy.image" alt="" class="image" />
    </div>
    <div class="commoditiy-details__info">
      <div class="commoditiy-details__description">
        <small>{{ commoditiy.vendor.name }}</small>
        <h3>{{ commoditiy.name }}</h3>
        <p>
          {{ commoditiy.description }}
        </p>
      </div>
      <div class="commoditiy-details__price-cart">
        <p>{{ commoditiy.price }}</p>
        <commoditiy-button :commoditiy="commoditiy"></commoditiy-button>
      </div>
    </div>
  </div>
</template>

<style>
.commoditiy-details__image .image {
  width: 100px;
  height: 100px;
}
</style>

<script>
import CommoditiyButton from "./CommoditiyButton";
export default {
  props: ["commoditiy"],
  components: {
    "commoditiy-button": CommoditiyButton,
  },
};
</script>
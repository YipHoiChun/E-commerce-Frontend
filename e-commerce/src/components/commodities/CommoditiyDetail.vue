<template>
  <div class="commoditiy-details">
    <div class="commoditiy-details__image">
      <img :src="commoditiy.image" alt="" class="image" />
    </div>
    <div class="commoditiy-details__info">
      <div class="commoditiy-details__description">
        <h4>Vendor: {{ commoditiy.vendor.name }}</h4>
        <h3>Name: {{ commoditiy.name }}</h3>
        <p>
          Description: {{ commoditiy.description }}
        </p>
      </div>
      <div class="commoditiy-details__price-cart">
        <h4>Price: ${{ commoditiy.price }}</h4>
        <commoditiy-button :commoditiy="commoditiy"></commoditiy-button>
      </div>
    </div>
  </div>
</template>

<style>
.commoditiy-details__image .image {
  width: 50%;
  height: 50%;
}
.commoditiy__description {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
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
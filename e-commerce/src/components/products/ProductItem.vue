<template>
  <div>
    <div class="product">
      <p class="product__name">Name：{{ product.name }}</p>
      <img :src="product.image" alt="" class="product__image" />
      <router-link :to="'/detail/' + product._id" class="product-link">
        <!-- <p class="product__name">Name：{{ product.name }}</p> -->
        <p class="product__description">
          Description：{{ product.description }}
        </p>
        <p class="product__price">Price：{{ product.price }}</p>
        <p class="product.manufacturer">
          Manufacturer：{{ product.manufacturer.name }}
        </p>
        <!-- <b-img :src="product.image" fluid alt="Responsive image"></b-img> -->
      </router-link>
      <product-button :product="product"></product-button>
    </div>
  </div>
</template>

<style>
.product {
  padding: 20px;
  border-bottom: 1px solid black;
}
.product__name{
  font-size: 30px;
}

.product__description {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.product__image {
  width: 50%;
  height: 50%;
}

@media screen and (min-width: 601px) {
  .product {
    font-size: 30px;
  }
  .product__name{
  font-size: 50px;
}
}

@media screen and (max-width: 600px) {
  .product {
    font-size: 30px;
  }
}
</style>

<script>
import ProductButton from "./ProductButton";
export default {
  name: "product-item",
  props: ["product"],
  components: {
    "product-button": ProductButton,
  },
};
</script>

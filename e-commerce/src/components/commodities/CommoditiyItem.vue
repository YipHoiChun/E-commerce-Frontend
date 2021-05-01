<template>
  <div>
    <div class="commoditiy">
      <p class="commoditiy__name">Name：{{ commoditiy.name }}</p>
      <p class="commoditiy__description">
        Description:{{ commoditiy.description }}
      </p>
      <p class="commoditiy__price">Price : {{ commoditiy.price }}</p>
      <p class="commoditiy.vendor">Vendor : {{ commoditiy.vendor.name }}</p>
      <img :src="commoditiy.image" alt="" class="commoditiy__image" />
      <router-link :to="'/detail/' + commoditiy._id" class="commoditiy-link">
        <p>
          Detail
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </p>
      </router-link>
    </div>
  </div>
</template>

<style>
.commoditiy {
  float: inline-start;
  border: 5px #000 solid;
}

.commoditiy__name {
  font-size: 30px;
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

.commoditiy__image {
  width: 50%;
  height: 50%;
}

@media screen and (min-width: 601px) {
  .commoditiy {
    font-size: 30px;
  }
  .commoditiy__name {
    font-size: 50px;
  }
}

@media screen and (max-width: 600px) {
  .commoditiy {
    font-size: 30px;
  }
}
</style>

<script>
import CommoditiyButton from "./CommoditiyButton";
export default {
  name: "commoditiy-item",
  props: ["commoditiy"],
  components: {
    "commoditiy-button": CommoditiyButton,
  },
};
</script>
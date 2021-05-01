<template>
  <div>
    <div class="title">
      <h1>Home</h1>
    </div>
    <commoditiy-list></commoditiy-list>
  </div>
</template>

<script>
import CommoditiyList from '@/components/commodities/CommoditiyList.vue';
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },
    components: {
      'commoditiy-list': CommoditiyList
    }
  }
</script>
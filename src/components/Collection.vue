<template>
  <div>
    <img class="header-image-collection full-width-img" src="/static/img/Collection.jpg" alt="New collection">
    <product-list :filters="true" ></product-list>
    <so-me></so-me>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import SoMe from '@/components/SoMe'
export default {
  name: 'collection',
  components: {
    'product-list': ProductList,
    'so-me': SoMe
  }
}
</script>

<style lang="scss" scoped>

.header-image-collection{
  
}

</style>

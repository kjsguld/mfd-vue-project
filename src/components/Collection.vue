<template>
  <div>
    <product-list></product-list>
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

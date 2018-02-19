<template>
  <div>
    <top-stories></top-stories>
    <product-list></product-list> 
    <so-me></so-me>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import TopStories from '@/components/TopStories'
import SoMe from '@/components/SoMe'
export default {
  name: 'home',
  components: {
    'product-list': ProductList,
    'top-stories': TopStories,
    'so-me': SoMe
  }
}
</script>

<template>
  <div>
    <top-stories></top-stories>
    <top-brands></top-brands>    
    <offers></offers>
    <product-list></product-list> 
    <so-me></so-me>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import TopStories from '@/components/TopStories'
import TopBrands from '@/components/TopBrands'
import Offers from '@/components/Offers'
import SoMe from '@/components/SoMe'
export default {
  name: 'home',
  components: {
    'product-list': ProductList,
    'top-stories': TopStories,
    'top-brands': TopBrands,
    'offers': Offers,
    'so-me': SoMe
  }
}
</script>

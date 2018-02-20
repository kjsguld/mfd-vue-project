<template>
  <div>
    <home-carousel></home-carousel>
    <top-stories></top-stories>
    <top-brands></top-brands>    
    <offers></offers>
    <product-list :limit="4"></product-list> 
    <section class="banner">
      <img class="banner__img" src="/static/img/25-off.jpg" alt="25% off">
    </section>
    <section class="testimonial">
      <div class="container">
        <img src="../assets/img/home/jane.png" alt="jane smith">
        <h3>Jane Smith</h3>
        <p class="testimonial__text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      </div>
    </section>
    <so-me></so-me>
  </div>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel'
import ProductList from '@/components/ProductList'
import TopStories from '@/components/TopStories'
import TopBrands from '@/components/TopBrands'
import Offers from '@/components/Offers'
import SoMe from '@/components/SoMe'
export default {
  name: 'home',
  components: {
    'home-carousel': HomeCarousel,
    'product-list': ProductList,
    'top-stories': TopStories,
    'top-brands': TopBrands,
    'offers': Offers,
    'so-me': SoMe
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/master';

section.banner{
  margin-bottom: 0;
  img.banner__img{
    width: 100%;
    margin-bottom: -3px;
  }
}

.testimonial{
  background-color: $lightblue;
  color: $white;
  padding: 5rem 0;
  margin: 0;
  text-align: center;
  .container{
    grid-template-columns: 1fr;
    grid-template-areas: 
    " img "
    " heading "
    " body ";
  }
  
  img{
    align-self: center;
    justify-self: center;
    grid-area: img;
  }
  h3{
    grid-area: heading;
  }
  .testimonial__text{
    grid-area: body;
    width: 80%;
    margin: 0 auto;
    line-height: 1.4rem;
  }
}

</style>


<template>
  <div>
    <img class="header-image-collection full-width-img" src="/static/img/Collection.jpg" alt="New collection">
    <product-list :filters="true" ></product-list>
    <section class="collection__newsletter">
      <form class="newsletter-form" action="">
        <input class="newsletter-form__email btn--outline-blue" type="email" placeholder="your email">
        <button class="newsletter-form__btn btn--grey" type="submit">Subscripe to our newsletter</button>
      </form>
    </section>
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

@import '../assets/styles/master';

.collection__newsletter{
  background-color: $lightblue;
  margin: 5rem auto;
  padding: 4rem 0;

  form.newsletter-form{
    max-width: 1170px;  
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 270px 270px 1fr;
    grid-gap: 30px;
    grid-template-areas: " . email btn . "; 
    .newsletter-form__email{
      grid-area: email;
      text-transform: none;
      cursor: default;
      &::placeholder{
        text-transform: uppercase;
      }
    }
    .newsletter-form__btn{
      grid-area: btn;
      background-color: $white;
      color: $text-color;
    }
    .newsletter-form__btn, .newsletter-form__email{
      font-size: .85rem;
      padding-top: .8rem;
      padding-bottom: .8rem;
    }
  }
}
</style>

<template>
  <article itemscope class="container">
    <div class="grid-col-6">
      <img itemprop="image" class="product__img" v-bind:src="'/static/img/products/' +  product.img " alt="">

    </div>
    <div class="grid-col-6">
      <h1 itemprop="name">{{ product.title }}</h1>
      <span itemprop="price">{{ product.price }}</span>
      <span>Free Shipping Worldwide</span>
      <form action="">
        <select name="color" id="">
          <option value=""></option>
        </select>
        <select name="size" id="">
          <option value=""></option>
        </select>
        <a href="#">Size Guide</a>
        <input type="button" value="Add to bag">
        <input type="button" value="Save for later">
        <a href="#">Share this product</a>
      </form>

      <p itemprop="description">{{ product.description }}</p>
    </div>
  </article>
</template>

<script>
import axios from 'axios'
import SoMe from '@/components/SoMe'
export default {
  name: 'product',
  data: function() {
      return {
          product: ''
      }
  },
  created: function(){
      let id = this.$route.params.id;
      this.getProductById(id);
  }, 
  methods: {
      getProductById: function(id){
          axios
          .get("./static/products.json")
          .then(response => {
              this.product = response.data.filter(product => product.id == id)[0]
          })
          .catch(error => {
              console.log(error);
          })
      }
  }
}
</script>
<style lang="sass" scoped>

</style>


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
        <v-select :options="colors">

        </v-select>

        <v-select :options="sizes">

        </v-select>
        <a href="#">Size Guide</a>
        <input type="button" value="Add to bag">
        <input type="button" value="Save for later">
        <a href="#">Share this product</a>
      </form>

      <vue-tabs>
        <v-tab title="Description">
          <p itemprop="description">{{ product.description }}</p>
        </v-tab>
        <v-tab title="Brand">
          <p>test</p>
        </v-tab>
        <v-tab title="Info">
          <p>test</p>
        </v-tab>
      </vue-tabs>

    </div>
  </article>
</template>

<script>
import axios from 'axios'
import SoMe from '@/components/SoMe'
// vue component required by select
import Vue from 'vue'
import vSelect from 'vue-select'
import {VueTabs, VTab} from 'vue-nav-tabs'

export default {
  name: 'product',
  components:{
    'v-select': vSelect,
    'vue-tabs': VueTabs,
    'v-tab': VTab
  },
  data: function() {
      return {
          product: '',
          colors: [
            'red',
            'green',
            'blue'
          ],
          sizes: [
            'small',
            'medium',
            'large'
          ]
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
<style lang="scss" scoped>


</style>


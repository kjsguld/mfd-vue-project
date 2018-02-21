<template>
<div>
  <img class="full-width-img" src="/static/img/50-off-collection.jpg" alt="Big discounts">  

  <article itemscope class="container product-view">
    <div class="grid-col-5 product-img__wrapper">
      <img itemprop="image" class="product-img" v-bind:src="'/static/img/products/' +  product.img " alt="">
    </div>
    <div class="grid-col-5 product-info__wrapper">
      <h1 itemprop="name">{{ product.title }}</h1>
      <div class="product-info__price-wrapper">
        <span class="product-info__price" itemprop="price">{{ product.price }}</span>
        <span class="product-info__shipping" >Free Shipping Worldwide</span>
      </div>
      <form class="product-form" action="">
        <v-select class="product__select product__select--color" :options="colors">

        </v-select>

        <v-select class="product__select product__select--size" :options="sizes">

        </v-select>
        <a href="#" class="product__btn--size btn--grey">Size Guide</a>
        <a class="product__btn--add btn--blue">add to bag</a> 
        <input type="button" value="Save for later" class="product__btn--save btn--grey">
        <a href="#" class="product__btn--share">Share this product</a>
      </form>
      
      <vue-tabs>
        <v-tab title="Description">
          <p itemprop="description">{{ product.description }}</p>
        </v-tab>
        <v-tab title="Brand">
          <p>Brand info</p>
        </v-tab>
        <v-tab title="Info">
          <p>More info of some sort</p>
        </v-tab>
      </vue-tabs>

    </div>
  </article>

  <sharpen-look></sharpen-look>
  <img class="full-width-img" src="/static/img/big-discounts.jpg" alt="Big discounts">  
  <so-me></so-me>
</div>
  
</template>

<script>
import axios from 'axios'
import SoMe from '@/components/SoMe'
import SharpenLook from '@/components/SharpenLook'
// vue component required by select
import Vue from 'vue'
import vSelect from 'vue-select'
import {VueTabs, VTab} from 'vue-nav-tabs'

export default {
  name: 'product',
  components:{
    'v-select': vSelect,
    'vue-tabs': VueTabs,
    'v-tab': VTab,
    'so-me': SoMe,
    'sharpen-look': SharpenLook
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

<style lang="scss">

@import '../assets/styles/master';

.container.product-view{
  grid-template-areas: " . prodImg prodImg prodImg prodImg prodImg . prodInfo prodInfo prodInfo prodInfo prodInfo";
  margin-top: 5rem;
  
  .product-img__wrapper{
    grid-area: prodImg;
  }
}

.product-info__wrapper{
  grid-area: prodInfo;
  h1{
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  .product-info__price-wrapper{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: "price shipping shipping . . ";
    grid-column-gap: 30px;
    margin-bottom: 2rem;

    .product-info__price{
      grid-area: price;
      font-size: 1.2rem;
      font-weight: 700;
    }
    .product-info__shipping{
      grid-area: shipping;
      font-size: .78rem;
      &::before{
        content: url('../assets/img/product/ShippingLogo.png');
        padding-right: 0.5rem;
      }
    }
    
  }


}

.vue-tabs{

  .nav-tabs-navigation{
    .nav-tabs-wrapper{
      .nav.nav-tabs{
        display: flex;
        flex-direction: row;
        position: relative;
        
        .tab{
          padding: 1rem;
          border-bottom: 0;

          a{
            color: $text-color;
            text-decoration: none;
            font-size: .85rem;
          }

          &.active{
            border-top: 1px $newslettergrey solid;
            border-left: 1px $newslettergrey solid;
            border-right: 1px $newslettergrey solid;
            border-bottom: 1px $white solid;
            margin-bottom: -1px;
          }
        }
      }
    }
  }

  .tab-content{
    section.tab-container{
      margin: 0;
      padding-top: 1rem;
      border-top: 1px $newslettergrey solid;
      color: $form-border-color;
      font-size: .85rem;
      line-height: 2em;
      min-height: 210px;
    }
  }
}

.product-form{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem 30px;
  grid-template-areas: 
  "selCol selCol selCol . ."
  "selSize selSize selSize btnSize btnSize"
  "btnAdd btnAdd btnAdd . ."
  "btnSave btnSave btnSave btnShare btnShare";
  margin-bottom: 3rem;

  .product__select.product__select--color{
    grid-area: selCol;
  }
  .product__select.product__select--size{
    grid-area: selSize;
  }
  .product__btn--size{
    grid-area: btnSize;
    font-size: .85rem;
    text-transform: capitalize;

    &::before{
      content: url('../assets/img/product/SizeGuideLogo.png');
      padding-right: .7rem;
    }
  }
  .product__btn--add{
    grid-area: btnAdd;
    padding: 1rem;
    &::before{
      content: url('../assets/img/product/shopping-bag.png');
      padding-right: .7rem;
    }
  }
  .product__btn--save{
    grid-area: btnSave;
    padding-top: .6rem;
    padding-bottom: .6rem;
  }
  .product__btn--share{
    grid-area: btnShare;
    text-decoration: none;
    color: $text-color;
    font-size: .85rem;
    margin-top: .6rem;

    &::before{
      content: url('../assets/img/product/ShareProductLogo.png');
      padding-right: .7rem;
    }
  }

}

</style>


<template>
  <section class="brands">
      <div class="container">
          <h2 class="brands__title grid-col-12 heading--line">top brands</h2>
          <div class="brands__selection grid-col-12">
            <ul >
                <li v-for="brand in brands" v-bind:key="brand.id" class="brands__item">
                    <img v-bind:src="'/static/img/brands/' +  brand.img " v-bind:alt="brand.name">
                </li>
            </ul>
          </div>
          
      </div>
      
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'top-brands',
    data: function(){
        return {
            brands: []
        }
    },
    created: function(){
        this.getBrands();
    },
    methods: {
        getBrands: function(){
            axios
            .get("./static/brands.json")
            .then(response => {this.brands = response.data})
            .catch(error => {console.log(error)})
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/master';

.brands{
    background-color: $top-brands-bg;
    padding: 3rem 0 2rem 0;

}

div.brands__selection.grid-col-12{
    display: flex;
    justify-content: space-around;
    ul{
        display: flex;
        align-items: center;
        @include mobile {
            flex-wrap: wrap;
            justify-content: space-around;
        }
        @include tablet {
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .brands__item img{
            display: inline;
            margin: 1rem;
        }
    }
}
</style>

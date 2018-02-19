<template>
    <section class="products" >
        <ul class="container">
            <li v-for="product in products" v-bind:key="product.id" class="product">
                
                    <div class="">
                        <div class="product__flag product__flag--sale">
                            <span>sale</span>
                        </div>
                        <img class="product__img" v-bind:src="'/static/img/products/' +  product.img " alt="">
                        <div class="product__overlay">
                            <router-link :to="'/product/' + product.id">
                                Quick view
                            </router-link>
                            <a href="#">Save</a>
                        </div>
                    </div>
                    <div class="product__info">
                        <h4 class="product__title">{{ product.title }}</h4>
                        <span class="product__price">{{ product.price }}</span>
                        <button class="product__button btn--blue" type="button" name="button">add to bag</button>
                    </div>
                
            </li>
        </ul>
        
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'product-list',
    data: function(){
        return {
            products: []
        }
    },
    created: function(){
        this.getProducts();
    },
    methods: {
        getProducts: function(){
            axios
            .get("./static/products.json")
            .then(response => {this.products = response.data})
            .catch(error => {console.log(error)})
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/master';

.product{
    grid-column: span 3;
    color: $white;

    .product__price{
        color: $black;
    }
}

</style>

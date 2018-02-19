<template>
    <section class="products" >
        <ul class="container">
            <li v-for="product in products" v-bind:key="product.id" class="product">
                <router-link :to="'/product/' + product.id">
                    <div class="">
                        <div class="product__flag product__flag--sale">
                            <span>sale</span>
                        </div>
                        <img class="product__img" src="" alt="">
                        <div class="product__overlay">
                            <a href="">Quick view</a>
                            <a href="">Save</a>
                        </div>
                    </div>
                    <div class="product__info">
                        <h4 class="product__title">{{ product.title }}</h4>
                        <span class="product__price">{{ product.price }}</span>
                        <button class="product__button btn--blue" type="button" name="button">add to bag</button>
                    </div>
                </router-link>
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

.product{
    grid-column: span 3;
    color: #fff;
}

</style>

<template>
    <section class="products" >
        <div v-if="filters == true" class="container">
            <div  class="products__filters grid-col-6">
                <span>New Collection ({{ products.length }} of {{ products.length }})</span>
                
            </div>
        </div>
        <ul class="container">
            <li itemscope v-for="product in products" v-bind:key="product.id" class="product">
                
                    <div class="product__wrapper">
                        <div v-if="product.sale == 'true'" class="product__flag product__flag--sale">
                            <span>sale</span>
                        </div>
                        <div class="product__overlay-wrapper">
                            <img itemprop="image" class="product__img" v-bind:src="'/static/img/products/' +  product.img " v-bind:alt=" product.title">
                            <div class="product__overlay">
                                <router-link :to="'/product/' + product.id">
                                    <img src="../assets/img/product/quick-view.png" alt="quick view">
                                    <span>Quick view</span>
                                </router-link>
                                <a href="#">
                                    <img src="../assets/img/product/save-icon.png" alt="save for later">
                                    <span>Save</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="product__info">
                        <h4 itemprop="name" class="product__title">{{ product.title }}</h4>
                        <div class="product__info-wrapper">
                            <span itemprop="price" class="product__price">{{ product.price }}</span>
                            <button class="product__button btn--outline" type="button" name="button">add to bag</button>
                        </div>
                    </div>
                
            </li>
        </ul>
        
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'product-list',
    props: ['limit', 'filters'],
    componenets:{

    },
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
            .then(response => {
                if(this.limit){
                    let reduction = response.data.length - this.limit
                    this.products = response.data.slice(reduction)
                } else {
                    this.products = response.data
                }
            })
            .catch(error => {console.log(error)})
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/master';

.products{
    .products__filters{
        margin-bottom: 2rem;
    }
}

.product{
    grid-column: span 3;
    color: $white;

    .product__wrapper{
        position: relative;
    }

    .product__flag.product__flag--sale{
        padding: 0.5rem;
        background-color: $lightblue;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .product__price{
        color: $black;
    }

    .product__overlay-wrapper{
        position: relative;

        .product__img{
            margin-bottom: -3px;
        }

        .product__overlay{
            position: absolute;
            width: 100%;
            bottom: -1px;
            visibility: hidden;
            opacity: 0;
            transition: 400ms;
            background-color: rgba(255, 255, 255, 0.85);
            padding: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        &:hover .product__overlay{
            visibility: visible;
            opacity: 1;
        }

        a{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: $text-color;
            text-decoration: none;

            span{
                font-size: 0.9rem;
                margin-top: 0.2rem;
            }
        }
    }
    
    .product__info{
        padding: .8rem 0;
        h4{
            color: $text-color;
            text-align: center;
            margin-bottom: .8rem;
        }

        .product__info-wrapper{
            display: flex;
            justify-content: space-between;
        }
    }

}

</style>

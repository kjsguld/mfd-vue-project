<template>
    <div class="product-sharpen">
        <section class="product-sharpen__look">
            <h2>Sharpen Your Look</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </section>
        <img class="dress-cut-1 full-width-img" src="/static/img/products/AdeliaDressCut1.jpg" alt="Dress cut front">
        <section class="product-sharpen__design--grey">
            <div>
                <h3>Extraordinary Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <div class="product-sharpen__icon-wrapper">
                    <div class="product-icon__wrapper">
                        <div class="product__glasses">
                            <img src="../assets/img/product/ElegantStyleGlasses.png" alt="Elegant Glasses">        
                        </div>
                    </div>
                    <div class="product-icon__wrapper">
                        <div class="product__hanger">
                            <img src="../assets/img/product/ElegantStyleHanger.png" alt="Elegant Hanger">        
                        </div>
                    </div>
                    <div class="product-icon__wrapper">
                        <div class="product__butterfly">
                            <img src="../assets/img/product/ElegantStyleButterfly.png" alt="Elegant Butterfly">                    
                        </div>
                    </div>
                </div>
                <a href="#" class="btn--outline-grey">Read more</a>
            </div>
        </section>
        <img class="dress-cut-2 full-width-img" src="/static/img/products/AdeliaDressCut2.jpg" alt="Dress cut side">
        <section class="product-sharpen__design--blue">
            <div>
                <h3>Extraordinary Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <div class="product-sharpen__icon-wrapper">
                    <div class="product-icon__wrapper">
                        <div class="product__glasses">
                            <img src="../assets/img/product/ElegantStyleGlasses.png" alt="Elegant Glasses">        
                        </div>
                    </div>
                    <div class="product-icon__wrapper">
                        <div class="product__hanger">
                            <img src="../assets/img/product/ElegantStyleHanger.png" alt="Elegant Hanger">        
                        </div>
                    </div>
                    <div class="product-icon__wrapper">
                        <div class="product__butterfly">
                            <img src="../assets/img/product/ElegantStyleButterfly.png" alt="Elegant Butterfly">                    
                        </div>
                    </div>
                </div>
                <a href="#" class="btn--outline-blue">Read more</a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'sharpen-look'
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/master';

.product-sharpen{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    "look look"
    "dress-1 design-grey"
    "design-blue dress-2";
    
    margin: 0 auto;

    .product-sharpen__look{
        grid-area: look;
        max-width: 970px;
        margin: 5rem auto;
        text-align: center;
        
        h2{
            font-size: 2.5rem;
            font-weight: 800;
            letter-spacing: 20px;
            color: $darkgrey;
            margin-bottom: 2.5rem;
            &::after{
                content:' ';
                position: absolute;
                display:block;
                width: 80px;
                margin: 0.8rem auto;
                left: calc(50% - 40px);
                border: 4px solid $lightblue;
            }
        }
        p{
            line-height: 1.8rem;
            color: $form-border-color;
        }

    }

    .dress-cut-1{
        grid-area: dress-1;
        
    }

    .product-sharpen__design--grey{
        grid-area: design-grey;
        background-color: $darkgrey;
        color: $white;
        margin: 0;
        >div{
            margin-left: 115px;
        }
    }

    .dress-cut-2{
        grid-area: dress-2;
    }

    .product-sharpen__design--blue{
        grid-area: design-blue;
        background-color: $lightblue;
        color: $white;
        margin: 0;
        justify-content: flex-end;
        >div{
            margin-right: 115px;
        }
    }

    .product-sharpen__icon-wrapper{
        margin: 2rem 0;
        display: flex;
        .product-icon__wrapper{
            margin-right: 2rem;
            >div{
                width: 80px;
                height: 80px;
                border-radius: 100%;
                border: 2px solid $white;
                display: grid;
                img{
                    align-self: center;
                    justify-self: center;
                }
            }
        }
    }

    .product-sharpen__design--blue, .product-sharpen__design--grey{
        display: flex;
        h3{
            font-weight: 400;
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        p{
            line-height: 1.8rem;
        }
        
        >div{
            margin-top: 5rem;
            margin-bottom: 5rem;
            max-width: 470px;
            
        }

        .btn--outline-blue, .btn--outline-grey{
            display: inline-block;
            margin-top: 1rem;
        }        
    }
}
</style>

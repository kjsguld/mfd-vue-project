<template>
  <section class="container top-stories" id="top-stories">
      <article class="mens-lookbook">
        <img src="../assets/img/home/MensLookbook.jpg" alt="Mens lookbook">
        <h3><span>Men's</span><br> lookbook</h3>
      </article>
      <article class="newsletter">
          <div class="newsletter__border">
              <img src="../assets/img/home/newsletter.png" alt="newsletter">
              <h3>Get our newsletter</h3>
              <p>Join our maillist to recive special discounts</p>
              <form action="">
                <input class="newsletter__text-input" type="text" placeholder="Enter your email">
                <input class="btn--outline" type="button" value="Subscripe">
              </form>
          </div>  
      </article>
      <article class="womens-lookbook">
        <img src="../assets/img/home/WomensLookbook.jpg" alt="Womens lookbook">          
        <h3><span>Women's</span><br> lookbook</h3>
      </article>
    </section>
</template>

<script>
export default {
    name: 'top-stories'
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/master';

.top-stories{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;

    @include tablet {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        article.newsletter{
            order: 3;
            margin-top: 0;
            width: 400px;
        }
    }
    @include mobile {
        flex-direction: column;
        article.newsletter{
            margin-top: 0;
            width: 100%;
        }
    }

    article.mens-lookbook, article.womens-lookbook{
        position: relative;

        h3 {
            color: $white;
            border: solid $white 2px;
            display: inline-block;
            padding: 1.3rem;
            position: absolute;
            z-index: 1;
            top: 35%;
            left: 25%;
            font-size: 2rem;
            text-align: center;

            span:first-child{
                text-transform: uppercase;
                font-weight: 900;
            }
        }
    }

    .newsletter{
        background-color: #f8f8f8;
        height: 410px;
        width: 40%;
        margin-top: 10px;
        text-align: center;
        padding-bottom: 1rem;
        box-shadow: 0 8px 12px 4px rgba(0,0,0,.10);
        z-index: 1;

        .newsletter__border{
            display: flex;
            flex-direction: column;
            height: 100%;
            margin: .5rem;
            border: 2px solid $newslettergrey;

            img{
                align-self: center;
                margin: 1.5rem 1rem 1rem 1rem;
            }

            h3{
                font-weight: 800;
                font-size: 1.7rem;
                text-transform: uppercase;
            }

            p{
                margin: 0.5rem auto;
                width: 60%;
                text-transform: uppercase;
                color: #aeaeae;
                line-height: 1.3rem;

            }

            form{
                display: flex;
                flex-direction: column;

                input{
                    align-self: center;
                    width: 85%;
                    text-align: center;
                    font-weight: 600;
                    padding: 1rem;
                    margin-bottom: 1rem;

                    &::placeholder{
                        color: $text-color;
                        text-transform: uppercase;
                    }
                
                    &.btn---outline{
                        margin-bottom: 5rem;
                    }
                }
            }
        }
    }

    .newsletter__text-input{
        border: 0;
        outline: 0;
        background: transparent;
        border-bottom: 2px solid $black;
        margin-top: 1.5rem;
    }
}

</style>


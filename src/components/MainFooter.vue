<template>
    <footer class="footer">
      <div class="container">
        <div class="footer__links footer__links--help">
          <h3>Questions?</h3>
          <ul>
            <li class="footer__link"><a href="#">Help</a></li>
            <li class="footer__link"><a href="#">Track order</a></li>
            <li class="footer__link"><a href="#">Returns</a></li>
          </ul>
        </div>
        <div class="footer__links footer__links--store">
          <h3>Where to buy</h3>
          <ul>
            <li class="footer__link"><a href="#">Store Locator</a></li>
            <li class="footer__link"><a href="#">Wishlist</a></li>
            <li class="footer__link"><a href="#">Gift Cards</a></li>
          </ul>
        </div>
        <div class="footer__links footer__links--us">
          <h3>About us</h3>
          <ul>
            <li class="footer__link"><a href="#">Our Story</a></li>
            <li class="footer__link"><a href="#">Careers</a></li>
            <li class="footer__link"><a href="#">Affiliates</a></li>
          </ul>
        </div>
        <div class="footer__payment">
          <img src="../assets/img/footer/Creditcards.png" alt="Payment methods">
        </div>
        <div class="footer__logo">
          <img src="../assets/img/classyLogo.png" alt="classy logo">
          <q cite="">
            Ecommerce PSD Theme
          </q>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'main-footer'
}
</script>

<style lang="scss" scoped>

@import '../assets/styles/master';

.footer{
  background-color: $footer-grey;
  color: $footer-text;
  
  .container{
  grid-template-areas: "help help store store us us payment payment payment payment logo logo";
  }

  ul{
    display: flex;
    flex-direction: column;
  }

  h3{
    color: $white;
  }

  .footer__link a{
    color: $footer-text;
    text-decoration: none;
  }

  .footer__links--help{
    grid-area: help;
  }
  .footer__links--store{
    grid-area: store;
  }
  .footer__links--us{
    grid-area: us;
  }
  .footer__payment{
    grid-area: payment;
  }
  .footer__logo{
    grid-area: logo;
    q{
      font-size: 0.7rem;
    }
  }
}
</style>

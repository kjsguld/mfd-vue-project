<template>
<footer class="footer container">
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
        <img src="" alt="Payment methods">
      </div>
      <div class="footer__logo">
        <img src="" alt="classy logo">
        <q cite="">
          Ecommerce PSD Theme
        </q>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'main-footer'
}
</script>

<style lang="scss" scoped>
footer.footer{
  grid-template-areas: "help help store store us us payment payment payment payment logo logo";

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
  }
}
</style>

<template>
  <section class="so-me container">
      <h3 class="so-me__title grid-col-12">get us on</h3>
      <div class="so-me__selection grid-col-12">
        <ul>
          <li class="so-me__link"><a href="#"><img src="" alt="twitter"></a></li>
          <li class="so-me__link"><a href="#"><img src="" alt="pinterest"></a></li>
          <li class="so-me__link"><a href="#"><img src="" alt="facebook"></a></li>
          <li class="so-me__link"><a href="#"><img src="" alt="google plus"></a></li>
          <li class="so-me__link"><a href="#"><img src="" alt="youtube"></a></li>
          <li class="so-me__link"><a href="#"><img src="" alt="tumblr"></a></li>
        </ul>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
div.so-me__title{
  justify-self: center;
}

div.so-me__selection.grid-col-12{
  display: flex; 
  justify-content: space-around;
  .so-me__link{
    display: inline;
  }
}
</style>

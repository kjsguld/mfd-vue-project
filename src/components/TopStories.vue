<template>
  <section class="container top-stories">
      <article class="mens-lookbook">
        <img src="../assets/img/home/MensLookbook.jpg" alt="Mens lookbook">
        <h3><span>Men's</span> lookbook</h3>
      </article>
      <article class="newsletter">
        <img src="../assets/img/home/newsletter.png" alt="newsletter">
        <h3>Get our newsletter</h3>
        <p>Join our maillist to recive special discounts</p>
        <form action="">
          <input class="newsletter__text-input" type="text" placeholder="Enter your email">
          <input class="btn--outline" type="button" value="Subscripe">
        </form>
      </article>
      <article class="womens-lookbook">
        <img src="../assets/img/home/WomensLookbook.jpg" alt="Womens lookbook">          
        <h3><span>Women's</span> lookbook</h3>
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
    grid-template-areas: "mens mens mens mens newsletter newsletter newsletter newsletter womens womens womens womens";

    article > h3 {
        color: $white;
    }
    article.mens-lookbook{
        grid-area: mens;
    }
    article.newsletter{
        grid-area: newsletter;
        background-color: #f8f8f8;
    }
    article.womens-lookbook{
        grid-area: womens;
    }

    .newsletter__text-input{
        border: 0;
        outline: 0;
        background: transparent;
        border-bottom: 2px solid $black;
    }
}

</style>


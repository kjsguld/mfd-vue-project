<template>
  <section class="container top-stories">
      <article class="mens-lookbook">
        <h3>Men's lookbook</h3>
      </article>
      <article class="newsletter">
        <img src="" alt="newsletter">
        <h3>Get our newsletter</h3>
        <p>Join our maillist to recive special discounts</p>
        <form action="">
          <input type="text" placeholder="Enter your email">
          <input class="btn--outline" type="button" value="Subscripe">
        </form>
      </article>
      <article class="womens-lookbook">
        <h3>Women's lookbook</h3>
      </article>
    </section>
</template>

<script>
export default {
    name: 'top-stories'
}
</script>

<style lang="scss" scoped>

.top-stories{
    grid-template-areas: "mens mens mens mens newsletter newsletter newsletter newsletter womens womens womens womens";

    article.mens-lookbook{
        grid-area: mens;
    }
    article.newsletter{
        grid-area: newsletter;
    }
    article.womens-lookbook{
        grid-area: womens;
    }
}
</style>


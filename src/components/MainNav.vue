<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <img src="../assets/img/classyLogo.png" alt="classy logo">
      </div>
      <nav class="nav header__nav">
        <ul>
          <li class="nav__item nav__item--login"><a href="#">login</a></li>
          <li class="nav__item nav__item--items"><a href="#">items</a></li>
          <li class="nav__item nav__item--search"><a href="#">search</a></li>
          <li class="nav__item nav__item--burger"><a href="#">burger</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'main-nav'
  
}

</script>

<style lang="scss" scoped>

@import '../assets/styles/master';

.header{
  position: fixed;
  z-index: 1;
  width: 100%;
  margin-top: 2rem;

  .container{
    grid-template-areas: "logo logo . . . . . . nav nav nav nav";

    .header__logo{
      grid-area: logo;

    }
    .header__nav{
      grid-area: nav;
      ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: flex-end;
      }

      .nav__item{
        &::before{
          padding-right: 0.6rem; 
        }
        a{
          color: $white;
          text-decoration: none;
        }
      }
      .nav__item--login::before{
        content: url('../assets/img/LoginSymbol.png');
      }
      .nav__item--items::before{
        content: url('../assets/img/ShoppingBagSymbol.png');
      }
      .nav__item--search::before{
        content: url('../assets/img/MagGlassSymbol.png');
      }
      .nav__item--burger::before{
        content: url('../assets/img/BurgerMenuIcon.png');
      }
    }
  }
} 
</style>


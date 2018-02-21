<template>
  <div>
    <header class="header" id="nav-bar">
    <div class="container">
      <div class="header__logo">
        <a href="/#/">
          <img src="../assets/img/classyLogo.png" alt="classy logo">
        </a>
      </div>
      <nav class="nav header__nav">
        <ul>
          <li class="nav__item nav__item--login"><a href="#">login</a></li>
          <li class="nav__item nav__item--items"><a href="#">items</a></li>
          <li class="nav__item nav__item--search"><a href="#"></a></li>
          <li v-on:click="toggleMenu" class="nav__item nav__item--burger"><a href="#"></a></li>
        </ul>
      </nav>
    </div>
  </header>
  <div v-bind:class="{ active: isActive }" class="nav-offcanvas__wrapper">
    <img v-on:click="toggleMenu" class="dismiss-cross" src="../assets/img/cross.png" alt="close">
    <nav class="nav-offcanvas">
      <ul>
        <li>
          <router-link to="/" v-on:click.native="toggleMenu">Home</router-link>
        </li>
        <li>
          <router-link to="/collection" v-on:click.native="toggleMenu">Collection</router-link>      
        </li>
        <li>
          <router-link to="/contact" v-on:click.native="toggleMenu">Contact</router-link>      
        </li>
      </ul>
    </nav>
  </div>
  </div>    
</template>

<script>
export default {
  name: 'main-nav',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu: function (event){
      this.isActive = this.isActive == false ? true : false;
    }
  }
}

window.onscroll = function() {
    let vw = window.innerWidth
    const nav = document.getElementById('nav-bar')
    let breakpoint = vw >= 768 ? 550 : 200

    if ( window.pageYOffset > breakpoint) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
}

</script>

<style lang="scss" scoped>

@import '../assets/styles/master';

.header{
  position: fixed;
  z-index: 10;
  width: 100%;
  padding-top: 2rem;
  transition: 300ms;

  .page-Product &{
    background-color: rgba(0, 0, 0, 0.5);
    padding-bottom: 1rem;
  }

  &.active{
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.8rem 0 0.6rem 0;
    @include mobile {
      padding-bottom: 0;
    }
  }

  .container{
    grid-template-areas: "logo logo . . . . . . . nav nav nav";

    @include tablet {
      grid-template-areas: "logo logo . . . . . . nav nav nav nav";
    }
    @include mobile {
      grid-template-areas: "logo logo logo logo logo . nav nav nav nav nav nav";

    }

    .header__logo{
      grid-area: logo;
      @include mobile{
        img{
          width: 100%;
        }
      }

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
      .nav__item--login, .nav__item--items{
        @include mobile{
          width: 20px;
          visibility: hidden;
          a{
            width: 20px;
          }
          &::before{
            visibility: visible;
          }
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

.nav-offcanvas__wrapper{
  overflow: hidden;
  position: fixed;
  z-index: 10;
  height: 100%;
  width: 25%;
  min-width: 230px;
  right: -500px;
  background-color: $lightblue;
  transition: 400ms;
  &.active{
    right: 0;
  }

  @include mobile {
    nav.nav-offcanvas{
      padding: 5rem 2rem;
    }
  }

  .nav-offcanvas{
    padding: 5rem;
    text-align: center;
    li{
      margin-bottom: 1rem;
      a{
        font-size: 1.5rem;
        color: $white;
        text-decoration: none;
        &.router-link-exact-active{
          border-bottom: 2px solid $white;
        }
      }
    }
  }
  .dismiss-cross{
    width: 1.2rem;
    margin: 1rem;
  }
}
</style>


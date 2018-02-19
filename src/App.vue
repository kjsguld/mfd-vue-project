<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view/>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav'
import MainFooter from '@/components/MainFooter'
export default {
  name: 'App',
  components: {
    'main-nav': MainNav,
    'main-footer': MainFooter
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

@import './assets/styles/master';

</style>

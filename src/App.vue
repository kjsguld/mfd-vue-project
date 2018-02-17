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

@import './assets/styles/master';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

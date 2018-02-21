<template>
  <div id="app" :class="'page-' + routeName">
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
  data () {
    return{
      routeName: ''
    }
  },
  components: {
    'main-nav': MainNav,
    'main-footer': MainFooter
  },
  created () {
      this.routeName = this.$route.name    
  },
  watch:{
    $route (to, from){
      this.routeName = this.$route.name
    }
  } 
}

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');

@import './assets/styles/master';

</style>

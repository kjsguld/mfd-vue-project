import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Product from '@/components/Product'
import Collection from '@/components/Collection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    }
  ]
})

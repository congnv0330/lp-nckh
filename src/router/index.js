import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/c1',
    name: 'c1',
    component: () => import(/* webpackChunkName: "c1" */ '../views/c1/Index.vue')
  },
  {
    path: '/c2',
    name: 'c2',
    component: () => import(/* webpackChunkName: "c2" */ '../views/c2/Index.vue')
  },
  {
    path: '/c3',
    name: 'c3',
    component: () => import(/* webpackChunkName: "c3" */ '../views/c3/Index.vue')
  },
  {
    path: '/c4',
    name: 'c4',
    component: () => import(/* webpackChunkName: "c4" */ '../views/c4/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import detail from '@/views/detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/detail',
    name: 'detail',
    component: detail
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

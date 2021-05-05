import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index'),
    meta: { title: '首页',  auth: false }
  },
  {
    path: '/detail/:msGoodsId',
    name: 'detail',
    title: '宝贝详情',
    component: () => import('@/views/detail/index'),
    meta: { ttile: '宝贝详情', auth: false }
  },
  {
    path: '/login',
    name: 'login',
    title: '用户登录',
    component: () => import('@/views/login/index'),
    meta: { title: '登录', auth: false }
  },
  {
    path: '/buy/:msGoodsId',
    name: 'buy',
    title: '确认订单',
    component: () => import('@/views/order/buy'),
    meta: { title: '确认订单', auth: true }
  },
  {
    path: '/pay/:orderId',
    name: 'pay',
    title: '支付',
    component: () => import('@/views/order/pay'),
    meta: { title: '支付', auth: true }
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: () => import('@/views/order/myOrder'),
    meta: { title: '我的订单', auth: true }
  },
  {
    path: '/paysuccess',
    name: 'paySuccess',
    component: () => import('@/views/order/paySuccess'),
    meta: { title: '支付成功', auth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/index'),
    meta: { title: '注册', auth: false }
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404'),
    meta: { title: '404', auth: false }
  }
  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router

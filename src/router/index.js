import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/img-src',
    name: 'Img',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Img.vue')
  },
  {
    path: '/script-src',
    name: 'Script',
    component: () => import('../views/Script.vue')
  },
  {
    path: '/connect-src',
    name: 'Connect',
    component: () => import('../views/Connect.vue')
  },
  {
    path: '/frame-src',
    name: 'Frame',
    component: () => import('../views/Frame.vue')
  },
  {
    path: '/manifest-src',
    name: 'Manifest',
    component: () => import('../views/Manifest.vue')
  },
  {
    path: '/media-src',
    name: 'Media',
    component: () => import('../views/Media.vue')
  },
  {
    path: '/style-src',
    name: 'Style',
    component: () => import('../views/Style.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

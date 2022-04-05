import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import SecureView from '../views/SecureView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      postion: 'main'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      postion: 'main'
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
    meta: {
      postion: 'main'
    }
  },
  {
    path: '/secure',
    name: 'secure',
    component: SecureView,
    meta: {
      postion: 'bottom'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

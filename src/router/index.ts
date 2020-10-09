import Vue from 'vue';
import VueRouter, {
  RouteConfig
} from 'vue-router';
import Home from '../views/home/Home.vue';
import User from '../views/user/User.vue';
import UserCenter from '../views/user/UserCenter.vue';
import tabBar from '../components/TabBar.vue';
import Picdetail from '../views/Pic-detail.vue';
import Login from '../views/Login.vue';
import ZhDetail from '../views/ZhDetail.vue';
import Component from 'vue-class-component';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      tabbar: tabBar
    }
  },

  {
    path: '/search',
    name: 'search',
    component: ()=>import('@/views/home/search/Search.vue')
  },
  // user
  {
    path: '/user',
    name: 'user',
    components: {
      default: User,
      tabbar: tabBar
    }
  },
  {
    path: '/user/user-center',
    name: 'user-center',
    component: UserCenter
  },

  {
    path: '/user/change-name',
    name: 'change-name',
    component: () => import('@/views/user/ChangeName.vue')
  },
  {
    path: '/user/my-favorite',
    name: 'my-favorite',
    component: () => import('@/views/user/MyFavorite.vue')
  },

  {
    path: '/pdetail',
    name: 'pdetail',
    component: Picdetail
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/add/Add.vue')
  },
  {
    path: '/zhdetail/:id',
    name: 'zhdetail',
    component: ZhDetail
  },
  {
    path: '/comment/:id',
    name: 'comment',
    component: () => import('../views/Comment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'l-active',

  linkExactActiveClass: 'exactActive'
})

export default router
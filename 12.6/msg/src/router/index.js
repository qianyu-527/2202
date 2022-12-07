import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
		redirect: '/login',  // 重定向:重新指向其它path,会改变网址 显示登录页面
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('../views/AboutView.vue')
  },
	// 登录
	{
    path: '/login',
    name: 'login',
    component: () =>
      import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

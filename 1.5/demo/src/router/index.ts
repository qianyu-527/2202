import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
		children:[
/**首页页面 */
{
	path: '/dashboard',
	name: 'dashboard',
	component: () => import('../views/Dashboard.vue')
},
	/**公司设置 */
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/settings/index.vue')
  },
	/**权限设置 */
  {
    path: '/permissions',
    name: 'permissions',
    component: () => import('../views/permissions/Index.vue')
  }
		]
  },
  /**登录页面 */
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

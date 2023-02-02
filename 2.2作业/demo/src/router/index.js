import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    // component: HomeView
		redirect: '/login',  // 重定向:重新指向其它path,会改变网址
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('../views/AboutView.vue')
  },
	/**登录 */
	{
    path: '/login',
    name: 'login',
    component: () =>
      import('../views/Login/Login.vue')
  },
		/**首页 */
		{
			path: '/index',
			name: 'index',
			component: () =>
				import('../views/Index.vue'),
				/**子路由 */
				children:[
					/**首页 */
					{
						path: '/dashboard',
						name: 'dashboard',
						component: () =>
							import('../views/dashboard/Index.vue')
					},
						/**组织架构 */
						{
							path: '/departments',
							name: 'departments',
							component: () =>
								import('../views/departments/index.vue')
						},
							/**员工*/
							{
								path: '/employees',
								name: 'employees',
								component: () =>
									import('../views/employees/index.vue')
							},
								/**公司设置 */
						{
							path: '/setting',
							name: 'setting',
							component: () =>
								import('../views/setting/index.vue')
						},
								/**查看 */
								{
									path: '/detail',
									name: 'detail',
									component: () =>
										import('../views/employees/detail.vue')
								},
				]
		},
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
		redirect: '/login',  // 重定向:重新指向其它path,会改变网址
    // name: 'home',
    // component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('../views/AboutView.vue'),
			children:[
				/**首页 */
				{
					path: '/dashboard',
					name: 'dashboard',
					component: () =>
						import('../views/dashboard/index.vue')
				},
				/**员工*/
				{
					path: '/employees',
					name: 'employees',
					component: () =>
						import('../views/employees/index.vue')
				},
					/**员工跳转*/
					{
						path: '/detail',
						name: 'detail',
						component: () =>
							import('../views/employees/detail.vue')
					},
						/**设置*/
				{
					path: '/setting',
					name: 'setting',
					component: () =>
						import('../views/setting/index.vue')
				},
						/**权限管理*/
						{
							path: '/permission',
							name: 'permission',
							component: () =>
								import('../views/permission/index.vue')
						},
							/**审批*/
							{
								path: '/approvals',
								name: 'approvals',
								component: () =>
									import('../views/approvals/index.vue')
							},
								/**社保*/
								{
									path: '/social_securitys',
									name: 'social_securitys',
									component: () =>
										import('../views/social_securitys/index.vue')
								},
									/**考勤*/
									{
										path: '/attendances',
										name: 'attendances',
										component: () =>
											import('../views/attendances/index.vue')
									},
			]
  },
	/**登录 */
	{
    path: '/login',
    name: 'login',
    component: () =>
      import('../views/Login.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router

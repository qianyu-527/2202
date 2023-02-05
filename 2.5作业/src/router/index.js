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
						import('../views/dashboard/index.vue')
				},
					/**组织架构*/
					{
						path: '/departments',
						name: 'departments',
						component: () =>
							import('../views/departments/index.vue')
					},
					/**员工 */
					{
						path: '/employees',
						name: 'employees',
						component: () =>
							import('../views/employees/index.vue')
					},
						/**员工查看 */
						{
							path: '/detail/:id',
							name: 'detail',
							component: () =>
								import('../views/employees/detail.vue')
						},
							/**公司设置 */
							{
								path: '/setting',
								name: 'setting',
								component: () =>
									import('../views/setting/index.vue')
							},
								/**权限管理 */
								{
									path: '/permission',
									name: 'permission',
									component: () =>
										import('../views/permission/index.vue')
								},
							/**社保 */
							{
								path: '/social_securitys',
								name: 'social_securitys',
								component: () =>
									import('../views/social_securitys/index.vue')
							},
								/**社保 */
								{
									path: '/month',
									name: 'month',
									component: () =>
										import('../views/social_securitys/month.vue')
								},

								/**审批 */
								{
									path: '/approvals',
									name: 'approvals',
									component: () =>
										import('../views/approvals/index.vue')
								},
										/**审批设置 */
										{
											path: '/securitySetting',
											name: 'securitySetting',
											component: () =>
												import('../views/approvals/securitySetting.vue')
										},
											/**申请请假 */
											{
												path: '/leaveApproval/:id',
												name: 'leaveApproval',
												component: () =>
													import('../views/approvals/leaveApproval.vue')
											},
												/**考勤 */
							{
								path: '/attendances',
								name: 'attendances',
								component: () =>
									import('../views/social_securitys/attendances.vue')
							},
										/**考勤导入 */
										{
											path: '/import',
											name: 'import',
											component: () =>
												import('../views/social_securitys/import.vue')
										},
											/**考勤历史归档	 */
											{
												path: '/archiving',
												name: 'archiving',
												component: () =>
													import('../views/social_securitys/archiving.vue')
											},
											/**考勤报表 */
											{
												path: '/report',
												name: 'report',
												component: () =>
													import('../views/social_securitys/report.vue')
											},
													/**工资 */
													{
														path: '/salarys',
														name: 'salarys',
														component: () =>
															import('../views/salarys/index.vue')
													},
														/**工资 */
														{
															path: '/details/:id',
															name: 'details',
															component: () =>
																import('../views/salarys/details.vue')
														},
															/**工资报表 */
															{
																path: '/year',
																name: 'year',
																component: () =>
																	import('../views/salarys/year.vue')
															},
			]
  },
]

const router = new VueRouter({
  routes
})

export default router

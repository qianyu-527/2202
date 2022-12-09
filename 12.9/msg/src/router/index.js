import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/login', // 重定向:重新指向其它path,会改变网址 显示登录页面
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
	},
	// 首页
	{
		path: '/index',
		name: 'index',
		component: () =>
			import('../views/Index.vue'),
		// 子路由
		children: [

			{
				path: '/users',
				name: 'users',
				component: () =>
					import('../views/User.vue')
			},
			{
				path: '/app',
				name: 'app',
				component: () =>
					import('../views/Add.vue')
			},
			// 权限管理 的权限列表
			{
				path: '/rights',
				name: 'rights',
				component: () =>
					import('../views/ro/Rights.vue')
			},
			// 权限管理 的角色列表
			{
				path: '/roles',
				name: 'roles',
				component: () =>
					import('../views/ro/Roles.vue')
			},
			// 商品列表
			{
				path: '/goods',
				name: 'goods',
				component: () =>
					import('../views/shop/Goods.vue')
			},
			//商品管理的商品分类
			{
				path: '/categories',
				name: 'categories',
				component: () =>
					import('../views/shop/Categories.vue')
			},
			//订单列表
			{
				path: '/orders',
				name: 'orders',
				component: () =>
					import('../views/Orders.vue')
			},
			//数据统计
			{
				path: '/reports',
				name: 'reports',
				component: () =>
					import('../views/Reports.vue')
			},
			// 分类参数
			{
				path: '/params',
				name: 'params',
				component: () =>
					import('../views/shop/Params.vue')
			},
		],

	},
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router

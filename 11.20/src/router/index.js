import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',  // 重定向:重新指向index,会改变网址
  },
  // 首页
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    children:[
      // 首页
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue'),
      },
      // 用户列表
      {
        path: '/en',
        name: 'en',
        component: () => import('../views/en.vue'),
        meta:{title:["数据管理","用户列表"]}
      },
      //管理员列表
      {
        path: '/lb',
        name: 'lb',
        component: () => import('../views/lb.vue'),
        meta:{title:["数据管理","管理员列表"]}
      },
      //订单列表
      {
        path: '/dingdan',
        name: 'dingdan',
        component: () => import('../views/dingdan.vue'),
        meta:{title:["数据管理","订单列表"]}
      },
      //食品
      {
        path: '/ship',
        name: 'ship',
        component: () => import('../views/ship.vue'),
        meta:{title:["数据管理","食品列表"]}
      },
       //商品列表
       {
        path: '/shang',
        name: 'shang',
        component: () => import('../views/shang.vue'),
        meta:{title:["数据管理","商品列表"]}
      },
      //添加商铺
      {
        path: '/cate',
        name: 'cate',
        component: () => import('../views/cate.vue'),
        meta:{title:["添加数据","添加商铺 "]}
      },
      //添加商铺
      {
        path: '/push',
        name: 'push',
        component: () => import('../views/push.vue'),
        meta:{title:["添加数据","添加商品 "]}
      },
        //图表
        {
          path: '/tu',
          name: 'tu',
          component: () => import('../views/tu.vue'),
          meta:{title:["图表","用户分布 "]}
        },
        //设置
        {
          path: '/she',
          name: 'she',
          component: () => import('../views/she.vue'),
          meta:{title:["设置","管理员设置 "]}
        },
         //说明
         {
          path: '/suo',
          name: 'suo',
          component: () => import('../views/suo.vue'),
          meta:{title:["说明","说明 "]}
        },
           //编辑
           {
            path: '/bian',
            name: 'bian',
            component: () => import('../views/bian.vue'),
            meta:{title:["编辑","文本编辑 "]}
          },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

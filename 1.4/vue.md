# vue 总结
# 1.vue 生命周期
vue的生命周期就是vue从创建到销毁的过程中，到了某一个特定的时间节点会自动触发的钩子函数 
beforeCreate 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。
created 在实例创建完成后被立即同步调用。
beforeMount 在挂载开始之前被调用
mounted 实例被挂载后调用
beforeUpdate 在数据发生改变后，DOM 被更新之前被调用。
updated 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
activated 被 keep-alive 缓存的组件激活时调用。
deactivated 被 keep-alive 缓存的组件失活时调用。
beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。
destroyed 实例销毁后调用。
### 1.2 在项目开发过程中哪些钩子函数用的比较多
在写代码的过程中，我用的比较多的钩子函数有 cretaed 和 mounted
在 created 中经常调用 axios 请求数据 或者获取本地存储数据
在 mounted 中我经常用来获取 dom 节点
## 1.2⽗⼦组件⽣命周期执⾏的顺序
页面—beforeCreate
页面—created
页面—beforeMount
组件—beforeCreate
组件—created
组件—beforeMount
组件—mounted
页面—mounted
# nextTick
在 dom 更新之后执行的延迟回调 ，在vue中dom的更新是异步的，我理解的 nextTick 是把本身同步的代码变成异步执行，排在 dom 更新之后，所以能拿到 dom 节点
## vuex 
vuex 的执行机制
在项⽬当中如果要改变 state 的状态,我们⼀般是在组件⾥⾯调⽤ this.$store.dispatch ⽅式来触发 actions ⾥⾯的⽅法,在actions⾥⾯的⽅法通过 commit 来调⽤ mutations ⾥⾯定义的⽅法来改变 state,同时这也是 vuex 的执⾏机制
vuex 的理解
vuex 是 vue 的状态管理工具 管理项目中的公共数据 能够在所有的组件中使用
一共有五大核心：
state 存放公共数据的地方 通过 this.$store.state.xxx调用
mutations 修改 state 的地方 只有这里能修改 通过this.$store.commit 调用
getters 相当于是之前的计算属性 通过 this.$store.getters 调用
actions 执行异步操作的地方 通过 this.$store.dispatch 调用
modules 模块化
vuex 缺点就是刷新数据会丢失 我们可以保存本地存储 或者 安装 vuex 持久化插件 vuex-persist 去实现自动本地存储
## vue 常⽤的指令
v-if ：判断是否显示隐藏
v-for：数据循环
v-bind：绑定属性，可以简写为：
v-model: 实现数据双向绑定
v-show:判断隐藏显示
v-on: 事件绑定指令,可以简写为@
内容渲染指令：
v-text：
作用：将对应的值渲染到元素内部
缺点：会覆盖元素内部原有的内容
v-html：
可以把包含HTML标签的字符串渲染为页面的HTML元素。
## v-if 与 v-show 的区别
v-if：动态创建或移除元素，实现元素的显示与隐藏
v-show：动态为元素添加和移除 display: none 样式，实现元素的显示与隐藏
性能区别：
如果要频繁的显示和隐藏，v-show的性能更好，因为动态创建和移除元素浏览器会出现重绘等机制，所以会消耗更多的性能。
如果刚进入页面的时候，某些元素默认不需要被展示，而且后期这个元素很可能也不需要被展示出来，此时v-if性能更好。
## vue双向数据绑定原理
当把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。这些getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。每个组件实例都对应一个watcher 实例，它会在组件渲染的过程中把“接触"过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。
## vue 中 key 的作⽤
避免 dom 元素重复渲染.我们⼀般在设置 key 的时候⾸先尽量会设置为 id,或者 index 下表.key的值是唯一的
## keep-alive
当组件进行切换的时候，一般默认会把页面进行销毁，而keep-alive是vue的一个内置组件，作用就是保存组件的状态，让他不被销毁，
组件使用keep-alive之后会新增两个生命周期activated，和deactivated，activated是激活，deactivated是失活。
当遇到有些组件不需要缓存时，这个时候就可以用到keep-alive标签的两个属性，include属性和exclude属性 ：
include（白名单）属性定义了要缓存谁，exclude（黑名单）属性定义了不缓存谁，要想黑白名单生效，可以通过name来让属性生效
## v-for 与 v-if 的优先级
v-for 的优先级⾼. 因为 v-for 的时候我们才开始渲染 dom 元素,这个 v-if 还⽆法进⾏判断.
v-for 和 v-if 不能同时使⽤,我们可以通过标签,⽐如 div 或者 template 标签来进⾏包裹,把 v-if 写到包裹的标签上⾯(写到 v-for 外⾯)
在 vue3 中 v-if 的优先级更高
## 插槽
插槽就是⼀个占位符,将⾃定义组件的内容展示出来
插槽分别具名插槽和匿名插槽、以及作⽤域插槽. 我们⽤的⽐较多的具名插槽和匿名插槽,
具名插槽需要所有 slot 标签上指定name 属性,⽽在对应标签上添加# 属性指定名字.
作用域插槽
是把子组件里的数据传到父组件的插槽里使用
## diff算法
Diff算法的步骤：
1.js 对象表示真实的 dom 结构，就是我们说的生成一个虚拟 dom，再用虚拟 dom 构建一个真的 dom 树，放到页面中。 
2.状态改变的时候生成一个新的虚拟 dom 跟旧的进行对比，这个对比的过程就是 diff 算法，通过 patch 对象记录差异 
3.把记录的差异用在第一个虚拟 dom 构建的真实的 dom 上，视图就更新了
Vue 的 diff 算法是平级⽐较，不考虑跨级⽐较的情况。内部采⽤深度递归的⽅式+双指针⽅式⽐较
diff 算法就是对虚拟 dom 进行对比，并返回一个 patch 对象，这个对象的作用是存储两个节点不同的地方，最后用 patch 里记录的信息去局部更新真实的 dom
## 虚拟 dom
虚拟dom就是一个普通的js对象。是一个用来描述真实dom结构的js对象，因为他不是真实dom，所以才叫虚拟dom。
虚拟dom可以很好的跟踪当前dom状态，因为他会根据当前数据生成一个描述当前dom结构的虚拟dom，然后数据发送变化时，又会生成一个新的虚拟dom，而这两个虚拟dom恰恰保存了变化前后的状态。然后通过diff算法，计算出两个前后两个虚拟dom之间的差异，得出一个更新的最优方法（哪些发生改变，就更新哪些）。可以很明显的提升渲染效率以及用户体验。
## 常用的修饰符
.trim 去除⾸尾多余的空格
.stop 阻⽌事件冒泡
.once 只渲染⼀次
.self 事件只作⽤在元素本身
.number 将值转化为 number 类型
.capter 组件之间捕获
.prevent 阻⽌元素的默认⾏为
.native 事件穿透,让我们可以在⾃定义组件上触发原生的事件
## 组件通信
父传子
在父组件中的子组件的标签上 添加自定义属性，在子组件中通过 props 来接收，在接收的时候有两种接收方式 数组形式 和 对象形式 。对象形式可以规定传来的变量的数据类型（type）默认值（default）以及是否必填（required）
子传父
首先在使用子组件的标签上定义一个自定义事件 在子组件里通过 this.$emit 去调用这个自定义事件 $emit 方法的第一个参数是自定义事件的名字 第二个参数是就是子组件要传递给父组件的变量 最后在父组件接收使用就可以了
兄弟组件
利用中央事件总线 eventbus
把一个空的 vue 实例挂载在 vue 的原型上起名叫$bus
传数据的时候用this.$bus.$emit传 
在要接受数据的子组件 在 created钩子函数中 用$on 方法接收
利用 vuex 进行组件通信 把公共的数据存在 vuex 里就可以实现组件之间都能使用这个数据了
本地存储实现
## methods computed watch
methods 就是方法 我们写的点击事件等各种事件都放在 methods 里
计算属性 computed 计算属性 有缓存功能就是当跟他有关的值发生变化的时候才会重新计算 还有一个特点就是必须要有 return 值 return 就是把计算的结果 return 出去
watch 可以用来监听 数据和路由的变化
watch 有三个参数 deep immediate handler
当我们不需要 deep 和 immediate 的时候 就可以简写为一个函数 这个函数就是 handler
# 5.路由导航守卫
### 什么是导航守卫
路由的导航守卫 又叫做路由的钩子函数 或者路由的生命周期函数 是在页面跳转的过程中到了某一个特定的时间节点会触发的钩子函数
有三种七个
全局守卫
beforeEach 全局前置守卫
beforeResolve 路由解析之前
afterEach 全局后置守卫
组件级守卫
beforeRouteEnter 路由进入之前
beforeRouteUpdate 路由更新之前
beforeRouteLeave 路由离开之前
单个路由独享的守卫
beforeEnter 路由进入之前
这些导航守卫有三个参数 to from next to 代表到哪儿去 from 代表从哪儿来 next 代表执行下一步
### 导航守卫的使用场景
在写代码的过程中我一般用导航守卫进行页面的鉴权处理，在用户登陆成功的时候，我们会把 token 和用户信息存到 vuex 或者本地存储中，代表了用户的登陆状态，在访问某个页面的时候判断是否存的有 token，就能正常访问这个页面，如果没有 token，那么就用 next 跳转到登陆页面
### 导航守卫的执行顺序
全局前置
单个路由规则的
组件前置守卫
全局解析守卫
后置守卫
### beforeEach 和 beforeResolve 的区别
这两个都是全局守卫 都是在路由跳转之前就会执行的守卫
beforeEach 比 beforeResolve 执行的时间要更早
# 什么是 mvvm 模式？
vue 是一个 mvvm 模式的框架
m 就是模型 model 在 vue 中指数据
v 就是 view 视图
vm 是 view-model 控制器 在 vue 中就是 vue 实例
视图变了数据会变 数据变了视图会变 这中间就是 vm 在控制
除了 mvvm 模式之外 还有 mvp 和 mvc 模式
MVVM 模式的优点：
1、低耦合： 视图（View）可以独⽴于 Model 变化和修改，⼀个 ViewModel 可以绑定到不同的"View"上，当 View 变化的时候 Model
可以不变，当 Model 变化的时候 View 也可以不变。
2、可重⽤性： 你可以把⼀些视图逻辑放在⼀个 ViewModel ⾥⾯，让很多 view 重⽤这段视图逻辑。
3、独⽴开发： 开发⼈员可以专注于业务逻辑和数据的开发（ViewModel），设计⼈员可以专注于⻚⾯设计。
4、可测试： 界⾯素来是⽐较难于测试的，⽽现在测试可以针对 ViewModel 来写。
MVVM 和 MVC 的区别：
mvc 和 mvvm 其实区别并不⼤。都是⼀种设计思想。
主要区别
mvc 中 Controller 演变成 mvvm 中的 viewModel，
mvvm 通过数据来显示视图层⽽不是节点操作。
mvvm 主要解决了:
mvc 中⼤量的 DOM 操作使⻚⾯渲染性能降低，加载速度变慢，影响⽤户体验。
# 说⼀下 vue 和 jquery 的区别?(50%)
⾸先呢 jquery 他是⽤ js 封装的⼀个类库,主要是为了⽅便操作 dom 元素,⽽ vue 他是⼀个框架,并且呢,他会从真实 dom 构建出⼀个
虚拟的 dom 树,通过 di!算法渲染只发⽣改变的 dom 元素,其他的相同的 dom 元素不⽤在重新渲染. ⽽使⽤ jquery 去改变 dom 元素
的时候,即使有相同的 dom 元素也会重新渲染,以上就是我对 vue 和 jquery 区别的理解.
# vue 中 data 发⽣变化,视图不更新如何解决?
给对象或者数组新添加的属性不是响应式的，是因为 vue 的双向数据绑定的原理是 Object.defineProperty，由于这个方法的限制无法检测到属性的新增和删除，不会响应到视图上
解决方法就是用 Vue.set/this.$set 在组件里就用this.$set 在 js 文件里用 Vue.set
第一个参数 目标对象，第二个参数是要添加的属性，第三个是初始值
# 为什么 vue 中 data 必须是⼀个函数?
如果 data 是⼀个函数的话，这样每复⽤⼀次组件，就会返回⼀份新的 data，类似于给每个组件实例创建⼀个私有的数据空
间，让各个组件实例维护各⾃的数据。⽽单纯的写成对象形式，就使得所有组件实例共⽤了⼀份 data，就会造成⼀个变了全
都会变的结果。
所以说 vue 组件的 data 必须是函数。这都是因为 js 的特性带来的，跟 vue 本身设计⽆关。
# axios 的封装
1. 先建一个 utils 文件夹 里面放 request.js 文件
2. 在 request.js 文件用 create 方法创建 axios 实例，并且设置基本路径和超时时间
3. 设置请求拦截和响应拦截
4. 在请求拦截的成功的回调函数里 设置 token 以及 全局的 loading
5. 在响应拦截的成功回调函数里 清除 loading 以及根据 返回的编码做一个处理
6. 在响应拦截的失败的回调里 做错误编码处理
7. 再创建一个 api.js 统一管理我们的接口
#  拦截器
⾸先呢,axios 拦截器是 axios 给我们提供的两个⽅法,通过这两个⽅法我们可以对请求发送之前以及响应之后进⾏逻辑的再次处
理(拦截). 这两个拦截器不需要⼿动触发,只要发送 http 请求的时候就会⾃动触发. 我在项⽬中经常通过拦截器发送 token, 对
token 进⾏过期处理,以及进⾏其他的⼀些操作
# vue 本地的跨域 代理跨域 proxy
本地跨域是通过在 vue.config.js ⽂件⾥⾯的 devServer 属性⾥⾯的 proxy 属性⾥⾯配置,⼀共配置三个属性,分别是代理名称 代理
地址 开启跨域 重写路径
# mixin混入
mixin 混入 把公共的选项（生命周期函数，计算属性，watch 等）提到一个 js 文件里，哪个组件用就在哪个组件引入
混入有全局混入和局部混入 局部混入是只在这个组件里能用 全局混入是这个项目的任何组件都能使用
如果混入和组件都有这个选项的时候混入里的先触发
# 路由跳转方式 路由配置 嵌套和动态区别
1. 路由跳转：
   1.1router-link 标签跳转
   1.2.编程式导航 this.$router.push()
   1.3.this.$router.replace（{path：‘/’ } ） （replace 跟 push 类似，只不过跳转之后不存历史记录）
2. 传参是传参 跳转是跳转
   传参就是我们之前背的 query params 动态路由传参
   在路由跳转的时候可以携带参数 可以在这里说我们之前背的路由的三种传参
   query 可以通过 name 和 path 都能跳转 接收通过 query 接收 就相当于是 get 传输参数 因为参数会被拼接到 url 上刷新数据不丢失
   params 只能通过 name 跳转 接收通过 params 接收 相当于是 post 传参 刷新数据丢失 解决方法：采取动态路由传参 还有存本地存储里用的时候拿
   动态路由 通过 params 接收 还可以开启 props 传参 通过 props 接收 注意路由后面要拼上:xx 参数 刷新数据不丢失
3. 路由的配置：
   在 router/index.js 中配置路由规则 路由规则中的 path 属性代表路径，name 属性是名字，component 属性代表在这个路径下加载什么组件，还可以用 children 属性配置子路由。还可以用 meta 定义路由的元信息。
4. 动态路由：
   动态路由是指路由器能够自动的建立自己的路由表，并且能够根据实际情况的变化实时地进行调整。用：开头，：后面跟的值是不确定的。这个值是我们要传递的参数
5. 嵌套路由：
   vue 项目中，界面通常由多个嵌套的组件构成，用 children 实现嵌套路由
# 多环境变量
我们在 vue 项目开发中,项目在运行时会根据启动的指令来运行不同的环境,在不同的环境中,我们配置对应所需的变量来满足我们的开发需求,称为多环境变量。
在项目根目录定义两个文件
.env.dev 里面写上 NODE_ENV="development"
.env.prod 里面写上 NODE_ENV="production"
在封装 axios 的文件里放一个 baseURL.js 里面判断环境 不同的环境 定义不同的 baseURl
再把这个文件引入 封装的 axios 文件中使用
# vue3 和 vue2 生命周期函数的对比
beforeCreate -> setup() 开始创建组件之前，创建的是 data 和 method
created -> setup()
beforeMount -> onBeforeMount 组件挂载到节点上之前执行的函数。
mounted -> onMounted 组件挂载完成后执行的函数
beforeUpdate -> onBeforeUpdate 组件更新之前执行的函数。
updated -> onUpdated 组件更新完成之后执行的函数。
beforeDestroy -> onBeforeUnmount 组件挂载到节点上之前执行的函数。
destroyed -> onUnmounted 组件卸载之前执行的函数。
activated -> onActivated 组件卸载完成后执行的函数
deactivated -> onDeactivated 组件停用

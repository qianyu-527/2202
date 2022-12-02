# vue
## 安装环境
全局安装node 环境   检查node版本
npm
淘宝镜像
全局安装vue-cli脚手架
### 创建项目
1.创建目录命令执行
vue create xxx
## 3.1 目录简介
vue.config.js ----- 配置webpack文件(包括配置跨域,请求接口,第三插件配置,rule配置)
Package.json ---
scripts:配置启动命令,打包命令,eslint校验代码命令
browserslist: 浏览器适配配置
devDependencies,dependencies: 项目node-modules大版本的限制
^: 最大兼容版本
~: 大约在这个版本上下就行package-lockgjson
约束每个node-modules版本下的其他依赖的固定版本
babel.config.js: babel插件设置
.gitignore: 忽略文件
Public: 公共入口文件和公共配置配置
src 放置组件和axios配置
Assets -- 放置图片.img,css,js
components -- 放置其他组件所需要的公共组件
router -- 配置路由表,(动态路由,静态路由,权限路由)
store -- 存放vuex的仓库
Views-- 放置页面的地方
Home
aannar
App.vue 入口的总文件
mainjs 实例化vue挂载
Utils-- 所有封装axios,封装token,封装公共方法-----工具类文件

### vue的语法
1 插值语法{{}}
2.动态绑定 v-bind:()
3.条件渲染: v-if v-else
概念:控制dom元素的创建和销毁，实现渲染和更新页面
特点:如果没有v-else的存在,会在dom元素被删除的地方添加一个标识,在下次进行重新渲染的时候,优先寻找有标识的地方，尽量减少dom的循环和查找
4.v-show  通过添加或者移出 display:none 样式进行控制dom元素的显示与隐藏
5.v-for
key作用为了防止dom元素的重复渲染，如果以index为key的话会造成页面的多次渲染和渲染不同
diff算法对比节点:同级节点对比，确定和获取每个元素节点，通过key表示来进行对比

# webpack的五大核心
1、Entry 入口 入口（Entry）指示webpack以哪个文件为入口起点开始打包，分析构建内部依赖图。
2、Output 输出 输出（Output）指示Webpack打包后的资源bundles输出到那里去，以及如何命名。
3、Loader 处理非js文件 Loader让Webpack能够取处理那些非JavaScript文件（Webpack自身子理解JavaScript）
4、Plugins 插件 插件（Plugins）可以用于执行范围更广的任务，插件的范围包括，从打包优化和压缩，一直到重新定义环境的变量等。
5、Mode 模式 模式（Mode）指示Webpack使用相应模式的配置
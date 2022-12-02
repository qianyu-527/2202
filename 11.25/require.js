// const fs=require('fs')//相当于引用node的fs模块
// const data=require('./对象的扩展.html')//.js可以省略也可以引入其他文件
// export default fs//导出fs模块
// export {data}//可以导出多个

// const fs=require('fs')
// const data=require('./1.class类的写法.html')
// export default fs
// export {data}
const fs=require('fs')
const data=require('./json')//也可以是json文件
export default fs
export {fs}
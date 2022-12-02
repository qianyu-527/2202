# 类
##  概念
ES6提供了更接近传统语言的写法 引入了class(类)这个概念，作为对象的模版
## 作用
  通过class关键字可以定义类
## 优点
新的class写法只是让对象原型的写法更加清晰，更像面向对象编程的语法
## class 的sat 和get
get可以修改对象的属性
set不要修改自身,会导致递归爆栈
因为set无法直接修改get返回值需要通过对象属性来缓存set的结果来供get调用类似于交换变量的做法
## class的static(思它退可)定义方法
**概念**类(class)通过static 关键字定义静态方法
 特点: 不能在类的实例上调用静态方法，应该通过类本身调用。通常是实用程序方法，例如创建或者克隆对象的功能
 ## 类的继承 (很重要)
 关键字: extends  来继承一个类 相当于创建子类
 关键方法super() 父类.call(this)
 super用来调用对象的父对象上的函数   也就是来引用父类
#  数值的扩展
1.Number.EPSILOW表示最小精度
EPSILOW属性的值接近于(埃铺栏)
MAth.abs绝对取值
2.十进制1,2,3,4,0.1
3 Number.isFinite检测一个数组是否为有限小数 小数和长度是有限的  无限的是无止尽的类似于3.1415926
4.Infinity无穷大
5.Number.isNaN判断一个数组是不是NAN
6.Number.isInteger 判断是否是整数
7.Number.parsetInt  Number.parseFloat
8.Math.trunc 去除小数部分
9.Math.sign判断一个数到底为正数 负数 还是零  返回值是布尔值 true和false
-是正数返回1  负数返回-1   是0的时候返回0-
## 数组的扩展
### Array.from()
 用于将两类对象转换真正数组 类似于数组的对象和可变量对象 
 (第一个括号写长度) 第二个用值填充每一个
### copyWithin()
将指定位置成员复制到其他位置(覆盖原有的成员)然后返回当前数组 会修改当前数组
三个参数 
target(必须)从该位置替换数据 如果为负值表示倒数
start(可选)从该位置开始读取数据默认为0如果为负值表示末尾开始重新计算
end(可选)到该位置前停止读取 默认数组的长度  如果负值 表示从末尾开始计算
### fill()
fill方法使用给定值填充一个数组
### flat()和floatMap()
用于嵌套的数组的拉平多维数变一堆数组
### Array()
构造函数返回的数组都是空位
## 属性名表达式
声明个obj 方法一
obj.foe=true;  
方法二
obj['a'+'qs']=123;
## 方法name属性
函数的name属性,返回函数名.对象方法也是函数 因此有name属性
## super关键字
this指向函数所在当前对象,关键字super指向对象的原型对象
## 模块导入require()
require函数用于当前模块加载别的模块在函数内写入模块的路径   (相对和绝对都行)
## exports
exports对象是当前模块的导出对象 用于导出模块的方法和属性 别的模块可以通过require函数引用别的模块时相当于得到别的模块的导出对象
import和exports有时候需要引用有时候导出
export default aa 导出单个
export  {可以导出多个}
## proxy
**概念**对象用于创建一个对象的代理从而实现基本操作的拦截
**语法** const p=new Proxy(target,handler)
应用场景 在vue3的reactive的双向绑定原理
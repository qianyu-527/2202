##  1.Promise出现原因
 1.解决回调地狱问题
2.为了解决信任问题(第三方回调函数不是只执行一次是执行多次)

3.为了解决回调执行顺序

4.为了解决捕捉错误能力(400 500)

## 2.Promise
**概念**:Promise是一个容器，里面放的是异步代码
**语法**:Promise是一个对象,可以获取异步操作信息

## 3.特点
-1.有三种状态: pedding(等待中) fulfilled(已成功)，rejected(失败)-否非得

-2.状态的变化:
2.1从等待中到成功(pedding->fulfilled)等待到成功
2.2从等待中到成功(pedding->rejected)等待到失败-
2.3一旦状态确定，不在更改，状态会凝固--->resolved,无论什么时候监听就还是这个样子.-
2.4Promise的返回值无论是不是Promise函数，最终都会被封装Promise函数进行返回需要我们用then方法
2.5导致另一个发生  链式调用
2.5.1可以一直then下去,每个then不会互相阻碍
2.5.2在其中一个then里面return一个值，下一个then可以获取当前值


## 4.和事件循环的区别

**事件循环一旦错过，便不会再被监听**

**Promise状态凝固永远都会可以被监听到**

##  5.Promise的回调参数
 *** 分为两种***
 1.resolve=>成功的回调
 2.rejet=>失败的回调
## 抽离封装Promise
1.链式调用可以调用多个函数
2.当把每一次的返回值return返回出去 下一个then将会获取到上一个then中的值
# Promise的方法
then 是接受成功的函数

 ## catch 是接受失败的函数   
 1. 在链式调用中.catch只能不做第一个then返回的错误信息      
 2.在链式调用中,如果想要单独捕捉每个then信息,需要每个then后面去跟随catch来进行捕捉

## all方法是Promise本身的方法
1.语法是:Promise.all([p1,p2,p3]).then(res=>{console.log(res)})
特点:1.接收的参数是为数组[]
2.返回值为一个数组,进行获取最终结果
3.必须等全部参数返回成功后才执行,不能单独返回函数的值
**缺点**:任何一个函数崩毁掉就不能执行

##  race
1.语法:Promise.race([p1,p2,p3]).then(res=>console.log(res))
特点:跟all方法一样参数是个数组
     返回值为一个数组进行获取最终的结果
     谁先执行成功就返回谁状态就是谁
## finally
   无论是成功或者失败都会执行
## async 和await
**概念**  
async:快速创建一个异步函数，且是基于Promise函数封装
在函数的开头添加async,就可以使其成为一个异步函数，在异步函数中，你可以在调用一个返回Promise的函数之前使用await关键字
在js中,可以通过async关键字来创建异步函数，异步函数意味着该函数执行不会堵塞后面的代码执行，async函数也是函数，平时我们直接加括号调用就可以使用.async函数返回的是一个Promise对象 获取Promise返回值用then方法。
优点:它是把异步请求变成同步执行的async放在函数外调用，返回的是Promise对象
1.方便级联调用:即调用依次发生的场景:
2.同步代码编写方式:Promise使用then函数进行链式调用，一直点点点是一种从左往右的横向写法:async/await是从上到下顺序执行向写同步代码一样符合编写习惯
缺点:没有catch错误处理需要用js原生的try.catch进行错误处理
3.调用异步函数的时候可以直接在函数前使用await关键字来对其进行调用 调用await的时候会等待Promise执行结果返回 可以通过变量进行接收结果
注意:await并不是将异步函数变成同步函数，只是改变了异步函数的调用方式。
## Map
1.使用new map()创建
2.判断长度:map.size(尺寸大小)
3.添加元素 map.set()
4.获取键值 map.get
5.判断当前对象不存在该属性map.has
6.删除当前对象属性map.delete  d 利特
7.清空所有成员map.clear
## set 
概念是创建一个新的数组且保证数组中每一个值是唯一的
1.获取元素的个数 array.size()
2.添加元素array.add()
3.删除元素array.delete()
4.检测是否存在值array.has()
5.清空  array.clear()
## Set结构的实例有四个遍历方法，可以用于遍历成员。
 // Set.prototype.keys()：返回键名的遍历器。
    // Set.prototype.values()：返回键值的遍历器。
    // Set.prototype.entries()：返回键值对的遍历器。
    // Set.prototype.forEach()：使用回调函数遍历每个成员。
    // 以上都是Set自带的方法
    let set=new Set([1,2,3,4])
    console.log(set);
    
    for(let item of set){
        console.log(item);
        //返回键值的遍历器
    }
    for(let item of set.keys()){
        console.log(item);
        // 返回键名的遍历器
    }
    for(let item of set.values()){
        console.log(item);
        //返回键值的遍历器
    }
    for(let item of set.entries()){
        console.log(item);
        //返回键值的遍历器
    }
    set.forEach((key,value)=>{
        console.log(key+':'+value);
    })
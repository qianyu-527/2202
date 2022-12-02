//先用promise 函数分班获取三个数据
//在用promise函数 实现链式调用,进行依赖关系处理
const { log } = require('console')
const fs=require('fs')
// 桃花源记
function getPeach(){
    return new Promise(function(resolve,reject){
        fs.readFile('./resource/桃花源记.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
// 出师表
function getTroops(){
    return new Promise(function(resolve,reject){
        fs.readFile('./resource/出师表.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

// 出关

function getAgent(){
    return new Promise(function(resolve,reject){
        fs.readFile('./resource/出居庸关.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
getPeach().then((res) => {
    console.log(res);
}).then((data) => {
    console.log(data,'50');
    // 出师表 又因为存在函数作用域,可以起相同的名字
    let result=getTroops().then(res=>res.toString())
    return result+data
}).then((data1)=>{
    getAgent().then(res=>{
        console.log(res.toString());
    })
})


// const fs=require('fs')
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/桃花源记.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/出师表.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// function getAgent(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/出居庸关.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// getPeach().then((res) => {
//     console.log(res);
// }).then((data) => {
    // console.log(data,'50');
//     let result=getTroops().then(res=>res.toString())
//     return result+data
// }).then((data1)=>{
//     getAgent().then(res=>{
//         console.log(res.toString());
//     })
// })

//  const fs=require('fs')
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/桃花源记.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/出师表.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// function getAgent(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/出居庸关.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// getPeach().then((res) => {
//     console.log(res);
// }).then((data) => {
//      console.log(data,'40');
//     let result=getTroops().then(res=>res.toString())
//     return result+data
// }).then((data1)=>{
//     getAgent().then(res=>{
//         console.log(res.toString());
//     })
// })




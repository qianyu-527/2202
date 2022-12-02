// catch方法接受失败的函数
const { log } = require('console')
const fs=require('fs')
const { get } = require('http')
// 桃花源记的错误信息
function getPeach(){
    return new Promise(function(resolve,reject){
        fs.readFile('./resource/桃花源记.md',(err,data)=>{
            reject('桃花源记的错误信息')
        })
    })
}
// 出师表的错误信息
function getTroops(){
    return new Promise(function(resolve,reject){
        fs.readFile('./resource/出师表.md',(err,data)=>{
            reject('出师表错误信息')
        })
    })
}   
// 出居庸关的错误信息   
function getAgent(){
    return new Promise(function(resolve,reject){
        fs.readFile('./resource/出居庸关.md',(err,data)=>{
            reject('出居庸关的错误信息')
        })
    })
}   

getPeach().then(res=>{
  console.log(res,'44');  
}).catch(err=>{
    console.log(err,'55');
}).then((data)=>{
    let rest=getTroops().then(res=>{res.toString()})
    console.log(rest,'12');
}).then((data1)=>{
    console.log(data1);
    getAgent().then(res=>{
        console.log(res.toString(),'53');
    })
}).catch(err=>{
    console.log(err,'42');
})

// const fs=require('fs')
// const { get } = require('http')
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/桃花源记.md',(err,data)=>{
//             reject('桃花源记错误信息')
//         })
//     })
// }
// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/出师表.md',(err,data)=>{
//             reject('出师表错误')
//         })
//     })
// }    
// function getAgent(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/出居庸关.md',(err,data)=>{
//             reject('出居庸关的是错误信息')
//         })
//     })
// }   

// getPeach().then(res=>{
//   console.log(res,'44');  
// }).catch(err=>{
//     console.log(err,'55');
// }).then((data)=>{
//     let rest=getTroops().then(res=>{res.toString()})
//     console.log(rest,'12');
// }).then((data1)=>{
//     console.log(data1);
//     getAgent().then(res=>{
//         console.log(res.toString(),'53');
//     })
// }).catch(err=>{
//     console.log(err,'42');
// })

// const fs=require('fs')
// const { get } = require('http')
// // 桃花源记的错误信息
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/桃花源记.md',(err,data)=>{
//             reject('桃花源记的错误信息')
//         })
//     })
// }
// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/出师表.md',(err,data)=>{
//             reject('出师表错误信息')
//         })
//     })
// }   
// function getAgent(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./resource/出居庸关.md',(err,data)=>{
//             reject('出居庸关的错误信息')
//         })
//     })
// }   

// getPeach().then(res=>{
//   console.log(res,'44');  
// }).catch(err=>{
//     // console.log(err,'55');
// }).then((data)=>{
//     let rest=getTroops().then(res=>{res.toString()})
//     // console.log(rest,'12');
// }).then((data1)=>{
//     console.log(data1);
//     getAgent().then(res=>{
//         console.log(res.toString(),'53');
//     })
// }).catch(err=>{
//     console.log(err,'42');
// })
//引入fs
const fs=require('fs')

fs.readFile('./内容.md',(err,data)=>{
    //如果失败,则抛出结果
    if(err) throw err;
    //没出错就输出内容
    console.log(data.toString());
});

const p=new Promise((resolve, reject) => {
    fs.readFile('./内容.md',(err,data)=>{
        if(err)reject(err)
        resolve(data)
    })
})
p.then(function(value){
    console.log(value.toString());
},function(){
    console.log('读取失败');
})


// const fs=require('fs')

// fs.readFile('./内容.md',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// });

// const p=new Promise((resolve, reject) => {
//     fs.readFile('./内容.md',(err,data)=>{
//         if(err)reject(err)
//         resolve(data)
//     })
// })
// p.then(function(value){
//     console.log(value.toString());
// },function(){
//     console.log('读取失败');
// })

// const fs=require('fs')
// fs.readFile('./内容.md',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// });

// const p=new Promise((resolve, reject) => {
//     fs.readFile('./内容.md',(err,data)=>{
//         if(err)reject(err)
//         resolve(data)
//     })
// })
// p.then(function(value){
//     console.log(value.toString());
// },function(){
//     console.log('读取失败');
// })
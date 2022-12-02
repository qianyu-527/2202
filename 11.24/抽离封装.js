const fs = require('fs')
// 抽离和封装公共Promise函数


function p(url) {
    return new Promise(function (resolve, reject) {
        fs.readFile(url, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
// 桃花源记
p('./resource/桃花源记.md').then(res => {
        // console.log(res.toString());
        return res.toString()
    })
    .then((data) => {
        console.log(data);
        p('./resource/出师表.md').then(res => {
            console.log(res.toString());
        })
    })
    .then(() => {
        p('./resource/出居庸关.md').then(res => {
            console.log(res.toString());
        })
    })

// function p(url) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(url, (err, data) => {
//             if (err) reject(err)
//             resolve(data)
//         })
//     })
// }
// p('./resource/桃花源记.md').then(res => {
//         return res.toString()
//     })
//     .then((data) => {
//         console.log(data);
//         p('./resource/出师表.md').then(res => {
//             console.log(res.toString());
//         })
//     })
//     .then(() => {
//         p('./resource/出居庸关.md').then(res => {
//             console.log(res.toString());
//         })
//     })

// function p(url) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(url, (err, data) => {
//             if (err) reject(err)
//             resolve(data)
//         })
//     })
// }
// p('./resource/桃花源记.md').then(res => {
//         return res.toString()
//     })
//     .then((data) => {
//         console.log(data);
//         p('./resource/出师表.md').then(res => {
//             console.log(res.toString());
//         })
//     })
//     .then(() => {
//         p('./resource/出居庸关.md').then(res => {
//             console.log(res.toString());
//         })
//     })
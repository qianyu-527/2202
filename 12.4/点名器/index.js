var tab = [{
        "id": 1,
        "name": "张世权",
        "sex": 0,
        "checked": false
    },
    {
        "id": 2,
        "name": "宋海宇",
        "sex": 0,
        "checked": false
    },
    {
        "id": 3,
        "name": "宋增杰",
        "sex": 0,
        "checked": false
    },
    {
        "id": 4,
        "name": "王龙翔",
        "sex": 0,
        "checked": false
    },
    {
        "id": 5,
        "name": "侯建荞",
        "sex": 1,
        "checked": false
    },
    {
        "id": 6,
        "name": "郝嫚嫚",
        "sex": 1,
        "checked": false
    },
    {
        "id": 7,
        "name": "付高聪",
        "sex": 0,
        "checked": false
    },
    {
        "id": 8,
        "name": "张建雨",
        "sex": 0,
        "checked": false
    },
    {
        "id": 9,
        "name": "孙旭瑶",
        "sex": 1,
        "checked": false
    },
    {
        "id": 10,
        "name": "张立",
        "sex": 0,
        "checked": false
    },
    {
        "id": 11,
        "name": "巴钦",
        "sex": 0,
        "checked": false
    },
    {
        "id": 12,
        "name": "吴倩",
        "sex": 1,
        "checked": false
    },
    {
        "id": 13,
        "name": "徐婉颖",
        "sex": 1,
        "checked": false
    },
    {
        "id": 14,
        "name": "刘艺",
        "sex": 1,
        "checked": false
    },
    {
        "id": 15,
        "name": "薛翔元",
        "sex": 0,
        "checked": false
    },
    {
        "id": 16,
        "name": "王伟臣",
        "sex": 0,
        "checked": false
    },
    {
        "id": 17,
        "name": "程怀博",
        "sex": 0,
        "checked": false
    }, {
        "id": 18,
        "name": "高亚鹏",
        "sex": 1,
        "checked": false
    }, {
        "id": 19,
        "name": "韩泽雨",
        "sex": 0,
        "checked": false
    }, {
        "id": 20,
        "name": "李宏恩",
        "sex": 0,
        "checked": false
    }, {
        "id": 21,
        "name": "江萌洋",
        "sex": 1,
        "checked": false
    }, {
        "id": 22,
        "name": "孙铭",
        "sex": 0,
        "checked": false
    }, {
        "id": 23,
        "name": "杨志豪",
        "sex": 0,
        "checked": false
    }, {
        "id": 24,
        "name": "张宗耀",
        "sex": 0,
        "checked": false
    }, {
        "id": 25,
        "name": "周璇",
        "sex": 1,
        "checked": false
    }, {
        "id": 26,
        "name": "代伊涵",
        "sex": 0,
        "checked": false
    },
    {
        "id": 27,
        "name": "章奥博",
        "sex": 0,
        "checked": false
    },
    {
        "id": 28,
        "name": "李妍",
        "sex": 1,
        "checked": false
    },
    {
        "id": 29,
        "name": "邓林柯",
        "sex": 0,
        "checked": false
    }, {
        "id": 30,
        "name": "章涵语",
        "sex": 0,
        "checked": false
    }, {
        "id": 29,
        "name": "郑峰",
        "sex": 0,
        "checked": false
    }
]
//获取标签
var time = document.querySelector('.time')
times()
// 封装时间
function times() {
    dt = new Date();
    let y = dt.getFullYear();
    let mt = dt.getMonth() + 1;
    let day = dt.getDate();
    let h = dt.getHours();
    h = h < 10 ? "0" + h : h;
    let m = dt.getMinutes();
    m = m < 10 ? "0" + m : m;
    let s = dt.getSeconds();
    s = s < 10 ? "0" + s : s;
     time.innerHTML="时间:"+y + "-" +mt +"-" +day + "-" + h +":" +m + ":" +s
}
// 获取ul标签
var ul = document.querySelector('ul')
// 调用
add()
//渲染页面
function add(){
    ul.innerHTML=''
    tab.forEach(item=>{
        // 创建标签
        var li=document.createElement("li")
        li.innerHTML=`<span>${item.name}</span>`
        ul.append(li)
    })
}


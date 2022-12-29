"use strict";
//声明的类
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //类的方法
    sport() {
        return `${this.name}会运动`;
    }
}
let p = new People('小明', 18);
console.log(p.sport());

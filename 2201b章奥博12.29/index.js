//声明的类
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    //类的方法
    People.prototype.sport = function () {
        return "".concat(this.name, "\u4F1A\u8FD0\u52A8");
    };
    return People;
}());
var p = new People('小明', 18);
console.log(p.sport());

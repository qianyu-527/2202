    //声明的类
    class People{
        name:string
        age:number
        constructor(name:string,age:number){
            this.name=name
            this.age=age
        }
        //类的方法
        sport():string{
            return `${this.name}会运动`
        }
    }
    let p =new People('小明',18)
    console.log(p.sport());
    
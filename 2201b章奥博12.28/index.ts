function greeter(person:String){
    return 'hellow'+person
}
let user="jane";
document.body.innerHTML=greeter(user);

let num1:number=1
let num2:number=2
let sum:number=num1+num2
// console.log(sum);
let str1:string='随机的'
let str2:string='内容'
let str:string=str1+str2
// console.log(str);


let obj:{name:String,age: number}
 obj={name:'小红',age:13}
//  console.log(obj);
 
// function getName(name:string,age:number):void{
//     console.log();
    
// }
// function getName2(name:string,age:number):string{
//    return name+age
// }

interface use{
    name:string,
    age:number
}
interface per{
    sex:number
}
type allInfo=use&per
let person:use&per={name:"小刘",age:1,sex:1}

interface Person{
    name:string,
    age:number,
    sex:number,
    isJob: boolean,
    hobby:string[],
    former:number,
    formerName:[string,string,string]
}
let Person:Person={
    name: '蔡徐坤',
    age: 20,
    sex: 0,
    isJob: true,
    hobby: ['唱跳', 'rap', '篮球'],
    former: 3,
    formerName: ['蔡1', '蔡2', '蔡3']
}
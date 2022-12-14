// single line comment
// declaring variables
// global scope
var a=1;
// // cannot redeclare
// // can reassign
let b=2;
// // cannot reassign value
const c=10;
alert (a+b);
// // number of data type in js
// // 1. number data type
let a=5;
// // 2. string data types
let d="string";
// 3. Boolean ==> true or false
// 4. Null
// 5. Undefined
let z;
alert(z);
user input
let test;
prompt(test);
operators
// 1. arithmetic operators
let a=10;
let b=20;
let c=(a+b);
alert (c);
alert(a+b);
alert(a-b);
alert(a*b);
// 2. comparison operator
let a=10;
let e=10;
let f=a/b;
alert(a==b);
// double equals used to check the value only
// triple equals used to check the value and datatype
// 3. logical operator
let isLoggedIn=true;
let isSuperUser=true;
// // // logical and
let t=isLoggedIn && true;
// // // logical or
let test = false||true;
// // // // logical not
 let test1 =!true; 
  alert (t);
//4. type operator
alert (typeof b);
// // if conditional statement
if (10>12){
    alert(typeof b);
}else{
alert("test");
}
// // // array
let array =[1, 2, 3, 4, 5, 6, 7];
console.log(array[2]);
// // object
let object1={name:"Binip",
 age:24
}
console.log(object1.name, "object1");
console.log(object1["age"], "object1");
// object inside object
let car={
    name:"Hyundai Creta",
    model:"2020",
    speed:"250 km/hr",
    owner:{
        name1:"binip",
        age:21,
    },
    milage:"14km/l"
}
console.log(car["name"], car.speed, car.milage, car.model);
console.log(car.owner);
// array inside array

let array=["my","name",
["is"],
["binip","Ghimire"]
];

console.log(array);











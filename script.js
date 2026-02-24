//comments
/*
Akarsh javascript 
basics repo
start start start start start
 */

// basic output methods
console.log("Hello Guyz");
document.write("Hello Again");

// undefined
let b;
console.log(b);
console.log(typeof (b));

// null
let x = null; //local
x += 8;
console.log(x);

/*
a single varibale cannot be defined twice for both let and const
*/
// re definition not declaration
x = "akarsh";
console.log(x);

// const
const n = 123; //local
console.log(n);

// variable (global not recommend)
var varname = "sanjeev"; // global
console.log(varname);

// number
var num = 10;
console.log(num);
console.log(typeof (num));

// boolean
num = false;
console.log(num);
console.log(typeof (num));

// string
num = "sanjeev soni";
console.log(num);
console.log(typeof (num));

// function in a variable
var sayHello = function () {
    alert('Hello WOrld!');
    // console.log works too

}
sayHello;

//array
var numArray = [1, 2, 3];
var animals = new Array("cat", "dog", "mouse", "lion");

// object
var person = {
    name: "Akarsh Bhardwaj",
    age: '18',
    degree: 'Cs student'
}

console.log(person.name);
console.log(person.age);
console.log(person.degree);

// symbol type
const sym1 = Symbol(4);
console.log(sym1);

const sym2 = Symbol(4);
console.log(sym2);

// false because Symbol(4) generates a unique id , helps for unique identification
if(sym1 === sym2){
    console.log("true");
}
else{
    console.log("false");
}


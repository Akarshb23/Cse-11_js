//comments
/*
Akarsh javascript 
basics repo
start start start start start
 */

// basic output methods
console.log("Hello World!"); // displays on console (use F12 key)
document.write("Hello Again"); // displays on webpage

// undefined
let c;
console.log(c);
console.log(typeof (c));

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
if (sym1 === sym2) {
    console.log("true");
}
else {
    console.log("false");
}

// === operator (also checks the data type as well as the content)
let a = 4;
let b = '4';
console.log("== operator")
if (a == b) {
    console.log("true;")
}
else {
    console.log("false");
}
console.log("=== operator")
if (a === b) {
    console.log("true;")
}
else {
    console.log("false");
}

// ternary operations
let g = 10;
let h = 4;
let f = (g > h) ? g : h;
console.log(f);

// max of 3 numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
var max = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);
console.log(max);

// for loop
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// sir ka codde
var count ;
console.log("<br/>");
document.write("Starting Loop" + "<br/>");
for(count = 0 ; count <10;count++){
    document.write("Current Count : " + count);
    document.write("<br/>");
}
document.write("Loop ended");
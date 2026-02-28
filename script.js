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




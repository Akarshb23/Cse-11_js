//operators in javascript

//arithmatic operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);        
console.log("Subtraction:", a - b);     
console.log("Multiplication:", a * b);  
console.log("Division:", a / b);        
console.log("Modulus:", a % b);         
console.log("Exponent:", a ** b);       


// unary operator (increment & decrement (Post & Pre))
let x = 5;

console.log("Post Increment:", x++); 
console.log("After Post:", x);      

console.log("Pre Increment:", ++x); 

console.log("Post Decrement:", x--); 
console.log("Pre Decrement:", --x);  


// assignment operators
let y = 10;

y += 5;  
y -= 3;  
y *= 2;  
y /= 4;  
y %= 3;  
y **= 2; 

console.log("Assignment Result:", y);

// comparison operators
let m = 5;
let n = "5";

console.log("Equal (==):", m == n);      // true (type converts)
console.log("Strict Equal (===):", m === n); // false (no conversion)
console.log("Not Equal (!=):", m != n);  // false
console.log("Strict Not Equal (!==):", m !== n); // true
console.log("Greater Than:", m > 3);     // true
console.log("Less Than:", m < 10);       // true
console.log("Greater/Equal:", m >= 5);   // true
console.log("Less/Equal:", m <= 4);      // false


// logical operators
let p = true;
let q = false;

console.log("AND (&&):", p && q); // false
console.log("OR (||):", p || q);  // true
console.log("NOT (!):", !p);      // false

//ternary operator
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log("Ternary:", result);

// another example
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


//typeof
console.log("typeof 123:", typeof 123);         // number
console.log("typeof 'Hello':", typeof "Hello"); // string
console.log("typeof true:", typeof true);       // boolean

let arr = [1,2,3];
console.log("instanceof Array:", arr instanceof Array); // true

// bitwise
let c = 5;  // 0101
let d = 1;  // 0001

console.log("Bitwise AND (&):", c & d);  // 1
console.log("Bitwise OR (|):", c | d);   // 5
console.log("Bitwise XOR (^):", c ^ d);  // 4
console.log("Bitwise NOT (~):", ~c);     // -6
console.log("Left Shift (<<):", c << 1); // 10
console.log("Right Shift (>>):", c >> 1); // 2

// spread operator
let nums1 = [1, 2, 3];
let nums2 = [...nums1, 4, 5];
console.log("Spread Array:", nums2);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log("Spread Object:", obj2);

// rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Rest Operator:", sum(1,2,3,4));


// comma operator
let z = (a = 5, b = 10, a + b);
console.log("Comma Operator:", z);

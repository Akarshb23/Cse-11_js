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

// if else
let age = 20;
if(age > 18)
    console.log("eligible");
else
    console.log("not eligible")  


// switch case
let day = 3;
let dayName;

switch(day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);


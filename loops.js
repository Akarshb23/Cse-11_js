// for loop
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// for loop shown on webpage
var count;
console.log("<br/>");
document.write("Starting Loop" + "<br/>");
for (count = 0; count < 4; count++) {
    document.write("Current Count : " + count);
    document.write("<br/>");
}
document.write("Loop ended");

// for in loop
var person = {
    name: "Akarsh",
    age: 21,
    city: "Meerut"
};

for (let x in person) {
    console.log("person details " + x + " " + person[x]);
}
// for each bhi krna hai 


// for of loop
var array = [10,20,30];

for (let b of array) {
    console.log(b);
}

//while
let count1 = 0;
while (count1 < 4) {
    console.log(count1);
    count1++;
}
// arrays (an ordered collection of data)
// array in a special type of object
const Array1 = [];


const Array2 = new Array();
const Array3 = Array();

console.log(Array2 , Array3)

let collection = [{},[], true , "john" , function(){},90009898193,undefined ,null , new String("abc"), new Date(),];
console.log(collection);

collection.teacherName = "John MAc";
collection.phoneNO = 950008193;
// array start with 0 element and the last is n-1 

console.log(collection);
console.log(collection.length);

const t = ["AKARSH", 18 , "hello" ,[]];
t[0]="Akarsh Bhardwaj";
console.log(t[0]);
console.log(t[1]);
console.log(t[2]);
console.log(t[3]);
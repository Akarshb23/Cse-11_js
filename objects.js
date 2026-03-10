
// objects

// let x = new Object();
// x.name = "akarsh";
// x.age = 18;
// x.address.street="Ghaziabad";
// x.address.flat = 2210;
// console.log(x.address.street);
// console.log(x['address']['street'])

// =>>>>>>> or <<<<<<<=
var person = {
    name : "Akarsh",
    age : 18 ,
    address : {
        street : "Ghaziabad" ,
        FlatNO : 210 
    }
};

console.log(person.address.street);
console.log(person['address']['street'])
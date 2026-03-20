// function in a variable
var sayHello = function () {
    alert('Hello WOrld!');
    // console.log works too

}
sayHello;

// functions
function fname(last){
    alert("HI AKARSH " + last);
}

// arrow functions (stored in a variable) (anonymous function) ( higher order function -> can also be passed as an arguement)
let mul = (x,y) => {
    console.log(x*y);
}

// short form
const add =  (a,b) => a+b ;

mul(10 , 80);
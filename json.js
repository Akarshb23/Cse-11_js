// javascript object notation (JSON)
// -> lightweight ,  text -based format for storing and exchanging data
// -> cross platform communication

members = [{
    "name" : "Molecule Man",
    "age" : 29 ,
    "powers" : ["1" , "2" , "3"]
},{}];

// Asynchronous programming
 let promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success)
        resolve("Data Loaded");
    else
        resolve("error Occured");
 });
 promise.then(result => console.log(result)).catch(error => console.log(error));

//  // Synchronous programming
//  async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await response.json();
//     console.log(data);
//  };
//  getData();



//  // fetch api
//  fetch("'https://jsonplaceholder.typicode.com/todos/1'")
//  .then(response => response.json())
//  .then(data => console.log(data))
//  .catch(error => console.log(error));

 // error handling 
 // errors can be handled using try ... catch


//  try{
//     var x = y+10;
//  }
//  catch(error){
//     console.log(error.message);
//  }



// local storage
// local storage allows data to be stored in the browser permanently (always stores in string format)
// store data
localStorage.setItem("name","Jeet");

// retrieve data
var name1 = localStorage.getItem("name");
console.log(name1);

// remove data

localStorage.removeItem("name");

// store object

var user = {name : "jeet" , age : 50};
localStorage.setItem("user",JSON.stringify(user));

// retrieve object


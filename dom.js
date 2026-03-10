// document object model (DOM)
// document object is property of windows object

//
// selecting by id
//
const result1 = document.getElementById("para");
console.log(result1);
// innerHTML recognizes HTML tags 
result1.innerHTML = "myself";
// doesnt recognize HTML tags 
result1.innerText = "self";
result1.title = "myname" ;

//
// selecting by class
//
const result2 = document.getElementsByClassName("p1");
console.log(result2);
result2.innerHTML = "myself";
result2[1].innerHTML = "AKARSH";

//
// selecting by tag
//
const result3 = document.getElementsByTagName("p");
result3[2].innerHTML= "this is a pet";
result3[1].style.color = "blue";
result3[1].innerText = "my paragraph";

//
// query selector
//
const result4 = document.querySelector("ol li:nth-child(3)"); // any id , class , or tag
result4.style.backgroundColor = "green";
result4.style.padding = "10px";

//
// query selector all 
//
const result5 = document.querySelectorAll("ul li"); // any id , class , or tag
    for(x in result5){
        result5[x].style.backgroundColor = "green";
        result5[x].style.margin = "10px";
        result5[x].style.color = "blue";

    }

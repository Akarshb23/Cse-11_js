// mouse events
//     1 - > onclick (when user clicks)
//     2 - > onmouseover
//     3 - > onmouseout
//     4 - > onmousedown
//     5 - > onmouseup
//     6 - > onmousemove
//     7 - > ondoubleclick


function onClick(){
    console.log("clicked");
};
function onMouseOver(){
    console.log("on Mouse Over");
};
function onMouseOut(){
    console.log("On mouse out");
};
function onMouseDown(){
    console.log("on mouse down");
};
function onMouseUp(){
    console.log("on mouse up");
};
function onMouseMove(){
    console.log("on mouse move");
};

// keyboard events
//     1 - > onkeydown
//     2 - > onkeyup


// form events
//     1 - > onfocus
//     2 - > onsubmit
//     3 - > onblur
//     4 - > onchange
const x = document.querySelector('input');
x.addEventListener('focus' , onhandlefocus);
x.addEventListener('blur' , onhandleblur);

function onhandlefocus(){
    x.style.background = "red";
}
function onhandleblur(){
    x.style.background = "yellow";
    x.style.borderColor = "green" ;
}

// window events
//     1 - > onload
//     2 - > onunload
//     3 - > onresize

function myBody(){
    alert("window loaded successfully !");
}
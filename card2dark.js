let variablename;
variablename= document.getElementById("main")
let shape
shape= document.getElementById("shape")
function toggle(){
    if(
    
    variablename.style.backgroundColor =="black"){
        variablename.style.backgroundColor="white";
         variablename.style.color ="black";
    }
    else {
        variablename.style.backgroundColor="black";
        variablename.style.color="white";}
   
}

function newColor(e){
    shape.style.backgroundColor=e.target.value;


    
}
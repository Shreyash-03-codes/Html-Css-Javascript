
clickEvent=()=>{
    let element=document.getElementById("fpara");
    let body=document.getElementById("container");
    element.style.backgroundColor="black";
    body.style.backgroundColor="red";
}

let element=document.getElementById("fpara");
element.addEventListener("click",clickEvent);
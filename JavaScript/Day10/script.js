let first;
let second;
let third;

let num=Math.random();

if(num<0.33){
    first="Hello";
}
else if(num>=0.33 && num<0.66){
    first="Hi";
}
else{
    first="Hey";
}

num=Math.random();

if(num<0.33){
    second="Good";
}
else if(num>=0.33 && num<0.66){
    second="Best";
}
else{
    second="Better";
}

num=Math.random();

if(num<0.33){
    third="Morning";
}
else if(num>=0.33 && num<0.66){
    third="After Noon";
}
else{
    third="Night";
}

console.log(`${first} ${second} ${third}`);

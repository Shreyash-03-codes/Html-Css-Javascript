let shreyash={
    "name":"shreyash",
    "fathername":"Bhagwan Gurav",
    "surname":"Gurav",
    "age":20
};

// console.log(shreyash);
// let abhi={...shreyash};  //-------->by {...obj} we can clone the object
// console.log(abhi);
// abhi.age=21;
// abhi.name="Abhijeet";
// console.log(abhi);
// console.log(shreyash);

// let abhi={};
// Object.assign(abhi,shreyash);  //---------------> by using Object.assign(obj2,obj1); we can clone objects
// abhi.name="Abhijeet";
// abhi.age=19;
// console.log(abhi);
// console.log(shreyash);
let abhi={};
for(const key in shreyash){
    abhi[key]=shreyash[key];
}

abhi.name="Abhijeet";
abhi.age=19;
console.log(abhi);
console.log(shreyash);





// console.log("Hello World!!");
// let a=5;
// console.log(a);
// let b=10;
// console.log(a+b);

//Variable Declaration
// 1.let
// 2.var
// 3.const

// let a=5;
// var b="shreyash";
// const pi=3.142;
// console.log(a);
// console.log(b);
// console.log(pi);

// let a=10;
// {
//     let a=45;
//     console.log(a);
// }
// console.log(a);

// let a=10;
// console.log(a);
// a=67;
// console.log(a);

// let a="shreyash"; ------we cannot declare double time a let dealared vaiable

// yntaxError: Identifier 'a' has already been declared
//     at internalCompileFunction (node:internal/vm:77:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1290:20)
//     at Module._compile (node:internal/modules/cjs/loader:1342:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1437:10)
//     at Module.load (node:internal/modules/cjs/loader:1212:32)
//     at Module._load (node:internal/modules/cjs/loader:1028:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
//     at node:internal/main/run_main_module:28:49


// var b=56;
// {
//     var b=99;
//     console.log(b);
// }
// console.log(b);

// var c=10;
// console.log(c);---------we can change the value of var decalred variable
// c=99;
// console.log(c);

// var c="Shreyash";  we can redeclare the variable of var decalred variable
// console.log(c);

// 10
// 99
// Shreyash

// const c=3.142;
// {
//     const c=99.99;
//     console.log(c);
// }
// console.log(c);


// const c=99;
// console.log(c);
// c=90;
// console.log(c);-----------we cannot change the const declared variable value


// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (d:\WEBDEVELOPMENT\JavaScript\Day1\script.js:73:2)
//     at Module._compile (node:internal/modules/cjs/loader:1378:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1437:10)
//     at Module.load (node:internal/modules/cjs/loader:1212:32)
//     at Module._load (node:internal/modules/cjs/loader:1028:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
//     at node:internal/main/run_main_module:28:49

// const c=90;

// console.log(c);
// const c="Shreyahs";-----------we cannat declre double the decalred variable of const

//Datatypes--------------------------

// 1.Number
// 2.String
// 3.boolean
// 4.null
// 5.undefined
// 6.symbol
// 7.bigInt

// let a=4564;
// let b="Shreyash";
// let c=true;
// let d=null;
// let e;
// let f=Symbol(9);
// let g=BigInt(99999999999999999999999999999999999999999);

// console.log(a,b,c,d,e,f,g);
// console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g);

let obj={
    id:39,
    name:"shreyash",
    mark:65
};

console.log(obj);

obj.fee=530000;
console.log(obj.fee);
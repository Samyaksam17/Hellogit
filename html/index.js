// staritng JS-> JavaScript
// var let const

// Variable declaration 
var a;      // int string float

// Variable Initilisation 
a =10;
console.log(typeof a);
console.log(a);

// Reinitialise of variable a 
a ="hello";
console.log(a);

// types of operator ->> tell us the type of data stored in a variable
console.log(typeof a);

a=true;
console.log(a);
console.log(typeof a);

a=null;
console.log(a);
console.log(typeof a);

// number 
var num = 10;
console.log(num);
var float = 2.4;
console.log(float);

// Boolean 
var t= true;
var f= false;
console.log(t);
console.log(f);


// Strings 
// "" , ' ' , ` `
// double tick , single tick , backtick
var str ='a';
console.log(typeof str);

var num=500;
console.log(`half of ${num} is ${num/2}`);

// Var has some problems 
// 1 redeclaration is allowed 
var r = "holaa";
console.log(r);

var s = "fooll";
console.log(s);

// overcome krne k liye "let" aya

// let keyword is used
let l= 200;
console.log(l);

//  let l= 300;   // SyntaxError: Identifier 'l' has been declared already      
console.log(l);

// we can reinitialise a variable but cant redeclare it
l= 300;
console.log(l);

// constant keyword cant redeclared and reinitialised
const o = 2;
console.log(o);

o = 5; // TypeError: Assignment to constant variable
console.log(o);
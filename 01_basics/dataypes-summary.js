// Primitive Datatypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 41341241212312124n


// Refernce(Non-Primitive) Datatype
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Sameer",
    age: 23
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof heros);

//Link to study : https://tc39.es/ecma262/#sec-typeof-operator


// #################################################################

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Sameer"
let anotherName = myName
anotherName = "Sanu"

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "user@google.com",
    upiId: "user@ybl" 
}

let userTwo = userOne

userTwo.email = "sameer@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

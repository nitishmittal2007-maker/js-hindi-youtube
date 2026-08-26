// Primitive(pass by value)

// 7 types: String, number, boolean, null, undefined, Symbol, BigInt

// Javascript is dynamically typed language.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 9289477982030108980n


// Non-primitive(Reference)
// Array, objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Nitish",
    age: 19,
}

const myFunction  = function(){
    console.log("Hello World");
}


// *******Return type of variables in JavaScript********
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  object function
//        Object  =>  object

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory(Primitive), Heap memory(Non-primitive)

// **************STACK*****************

let myYoutubeName = "hiteshchoudharydotcom"

let anothername = myYoutubeName
anothername = "ChaiaurCode"

console.log(myYoutubeName);
console.log(anothername);

// ********************HEAP********************

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nitish@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// Datatypes summary*******
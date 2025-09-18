// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

let score = 100
let scoreValue = 100.3
let isLoggedIn = false
let outsideTemp = null  //null doesn't mean zero
let userEmail;          //undefined data type

let id = Symbol('123');     //symbol data type is used for uniquie values
let anotherId = Symbol('123')

// console.log(id === anotherId)


// Non Primitive (Reference Data types)
// Array, Objects, Functions
let heros = ["shaktiman", "nagraj", "doga"]     //array

let myObj = {name: "Pankaj", age: 39, location: "India"}        //object

let myFunc = function(){        //function
    console.log("Hello World")
}

console.log(typeof id)
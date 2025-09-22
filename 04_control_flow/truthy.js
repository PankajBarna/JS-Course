// falsy
// these values are treated as flase: false, 0, -0, "", null, undefined, Nan
// these are truthy values: "0", "false"," ", [], {}, function(){} 

//To check if an array is empty
const userEmail = []
// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

//to check if object is empty
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty")
// }


//Nullish Coalescing Operator (??): null, undefined===============

let val1
// val1 = 5 ?? 10       "??" this operator does a safety check for a null or undefined values
// val1 = null ?? 10
val1 = undefined ?? 5
// console.log(val1)


//Terniary Operator+++++++++++++++++++
// condition ? true : false 

const itemPrice = 50
itemPrice >= 80 ? console.log("More than 80") : console.log("less than 80")
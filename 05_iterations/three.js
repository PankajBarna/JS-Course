// Object and Array specfic loops
// for of loop ++++++++++++++++++++++++++++++++++++++++++++

// const myHeros = ["Spiderman","Superman","Flash","Iron Man","Batman"]
// for (const myHero of myHeros) {
//     console.log(`My hero is: ${myHero}`)
// }

//for of loop on a string+++++++++++++++++++
const greeting = "Good Morning"
for (const greet of greeting) {                              //we can use "continue" and "break" here
    // console.log(`Each char is ${greet}`)
}

//Map

const map = new Map()
map.set("IN", "India")
map.set("RUS", "Russia")
map.set("UK", "United Kingdom")
map.set("IN", "India")              //Map holds unique key values only so it won't print IN > India twice.
map.set("I", "India")               //but this would be printed because here key "I", different form "IN"
// console.log(map)

//Loops in Map
for (const key of map) {
    // console.log(key)                // o/p : [ 'IN', 'India' ][ 'RUS', 'Russia' ][ 'UK', 'United Kingdom' ][ 'I', 'India' ]
}

//destructuring
for (const [key, value] of map) {
    // console.log(key, ":-" ,value)       // o/p: IN :- India     RUS :- Russia   UK :- United Kingdom    I :- India
}



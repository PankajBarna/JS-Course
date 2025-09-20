// making objects using object literals

// const JsUser = {
//     name: "Pankaj",
//     "full name": "Pankaj Kumar",
//     age: 30,
//     location: "Thane",
//     email: "pankaj.kumar@email.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Friday"]
// }

//accessing objects
// console.log(JsUser.name)        //accessing using dot notation
// console.log(JsUser["email"])    //accessing objects using square notation
// console.log(JsUser["full name"])

//adding new key to object
const mySym = Symbol("key1")

const JsUser = {
    name: "Pankaj",
    "full name": "Pankaj Kumar",
    [mySym]: "mykey1",
    age: 30,
    location: "Thane",
    email: "pankaj.kumar@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser[mySym])
//lets see type of mySym
// console.log(typeof[mySym])      //o/p object
// console.log(typeof mySym)       //o/p symbol

//changing values of object
JsUser.email = "pankaj.singh@gmail.com"
// console.log(JsUser.email)

//freezing objects (after this objects can't be changed)
// Object.freeze(JsUser)
// JsUser.email = "pk@gk.com"

// console.log(JsUser)

//passing functon to object
JsUser.greeting = function(){
    console.log("Hi JS User")
}
// console.log(JsUser.greeting())      //returns "Hi JS User and undefined" because function is not returning any thing


JsUser.greeting = function(){
    const output = "Hi JS User"
    return output
}
// console.log(JsUser.greeting())      //returns "Hi JS User"


JsUser.greeting = function(){
    const output2 = "Hi new JS User"
    return output2
}
// console.log(JsUser.greeting)        //returns "[Function (anonymous)]"



// using references

JsUser.greetingTwo = function(){
    return `Hello JS user ${this["full name"]}`     // "this" keyword is used to reference the given object (JsUser here). 
}
console.log(JsUser.greetingTwo())

//we can also write

JsUser.greetingThree = function(){
    return `Hello new JS USER, ${this.name}`
}
console.log(JsUser.greetingThree())
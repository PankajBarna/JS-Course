//"this" refers to the current context or we can say current block

const user = {
    username: "Pankaj",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)     //here "this" refers to the current object(username of current object)
        // console.log(this)                                       //"this" inside the object refers to object
    }
}
// user.welcomeMessage()       //executing the function inside the object

// lets change the username
// user.username = "Sam"
// user.welcomeMessage()   //here we get o/p "Sam, welcome to website" because now this.username refers to "Sam"
// console.log(this)      //"this" outside the objects refers to an empty object. But in broweser it refers to window object. 

// function chai(){
//     let newuser = "Pankaj"
//     console.log(this.newuser)
// }
// chai()          // o/p undefined


//Arrow function ++++++++++++++++++++++++++++++++
//Normal function
// const chai = function(){
//     let username = "pankaj"
//     console.log(this)
// }
//arrow function
// let username = "sonu"
const chai = () => {
    let username = "pankaj"
    console.log(this)           //gives empty object because inside arrow function this refers to global scope
}
// chai()

//Arrow function using parameters

const sumTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(sumTwo(3,4))

// another way to use arrow function
// implicit return
const addTwo = (num1,num2) => num1 + num2       //implicit functions are one liner functions. here we don't user braces and return keyword
// console.log(addTwo(4,5))

// another way
const subTwo = (num1, num2) => (num1 - num2)
// console.log(subTwo(12,11))

// above way is useful for returning objects also
const retObj = (num1, num2) => ({username: "Pankaj"})   //object wrapped in brackets
console.log(retObj())
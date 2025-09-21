//declaring a function
function sayMyName() {
    // console.log("Pankaj")
}
sayMyName()     //this is called execution of a function. Without "()" it is called reference of a function eg. "sayMyName" is called reference of the function.

function addTwoNumb(num1, num2){        //function with "parameters"
    // console.log(num1 + num2)
}
addTwoNumb(4,5)        //passing "arguments" to the function exectuion

//To store the result of a function in a variable we need to return the o/p of a function
function subTwoNumbers(num1, num2){
    return num1 - num2
}
const Diff = subTwoNumbers(45, 11)
// console.log(`Result is ${Diff}`)
// console.log("Result is: ", Diff)


//with condition
// function userLogin(userName){
//     if(!userName){                              //condition to check if parameter is not empty 
//         return "Please enter a Username"
//     }
//     return `${userName} just logged in!`
// }
// console.log(userLogin())

// function sumNumb(num1, num2){
//     if(typeof num1 !== "number" || typeof num2 !== "number"){       //condition to check if both parameters are numbers
//         return "Please enter two numbers"
//     }
//     return num1 + num2
// }
// console.log(sumNumb(12))


//++++++++++++++++++++++++++++++++
//rest operator => when we don't know the number of input paramenters

function cartValue(...item1){           //Yes "..." same as spread operator is called rest operator. it has different uses. Here it catches all input values
    return item1
}
// console.log(cartValue(100, 200, 300, 400,1000))     // o/p we get is an array of arguments


//Passing an object to a function++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const user = {
    name: "Pankaj Kumar",
    age: 25
}

function handleObject(anyoject){                                                //object is passed as "anyobject" in parameters
    // console.log(`Username is ${anyoject.name} and age is ${anyoject.age}`)      //
}
// handleObject(user)          //original object name is passed as agrument in function execution
//We can directly pass oject as an argument+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
handleObject({
    name: "Sonu",
    age:26
})

//Similarly we can pass arrays in functions++++++++++++++
const myArr = [100, 1200, 300]

function secondValue(getValue){
    return getValue[1]
}
// console.log(secondValue(myArr))

//We can pass array directly as argument
console.log(secondValue([111,222,333]))
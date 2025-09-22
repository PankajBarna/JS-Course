// if statements   
// if(true){
//     console.log("Executed")
// }

// const score = Math.floor(Math.random()*10)
// console.log(score)
// if(score > 5){
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }
// else{
//     console.log("No powers")
// }

// console.log(Math.floor(Math.random()*10))

//Shorthand notation for if-else
const balance = 1000
// if(balance > 500) console.log("Test");      //implicit code written in one line only ends with semicolon.

//Checking multiple conditions--------------------------
const userLoggedIn = true
const cardInfo = true
const itemsInCart = false

if(userLoggedIn && cardInfo && itemsInCart){
    console.log("User can shop")
}
else{
    console.log("Can't shop")
}
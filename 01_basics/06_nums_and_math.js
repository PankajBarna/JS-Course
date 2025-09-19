const score = 400

//we can also declare variable having data type number explicitly(like we did incase of strings) it returns object
const balance = new Number(100.33)
// console.log(balance)
// console.log(balance.toFixed())      //using a method toFixed()
// console.log(balance.toFixed(1))

// using method toString()
// console.log(balance.toString())     //converted to string
// console.log(typeof(balance.toString()))

// since number is converted to string now we can use some string methods also 
// console.log(balance.toString().length)

//using toPrecision method
let otherNumb = 63.88204
// console.log(otherNumb.toPrecision(3))

//having comma seperators in numbers
let amount = 100000
// console.log(amount.toLocaleString())

//for indian version of comma seperation
// console.log(amount.toLocaleString('en-IN'))     //important

//+++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++
// console.log(Math)   //returns object which have some of its own methods ------- see in browser console

// console.log(Math.abs(-5))   //this method converts -ve number to positive

// console.log(Math.round(6.33))   //this method rounds off.
// console.log(Math.round(9.56))

// console.log(Math.ceil(4.1)) //gives top value
// console.log(Math.floor(4.2))    //gives bottom value

// console.log(Math.sqrt(45))  //gives squar root

// console.log(Math.min(2,3,4))    //gives lowest value

// console.log(Math.random())      //gives random number (gives value b/w 0 and 1)

//to get a one digit random number
// console.log(Math.random()*10)

//correct way
// console.log((Math.random()*10) +1)

//generate random number b/w 10 and 20
let min = 15
let max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min)
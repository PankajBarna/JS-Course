// reduce function ++++++++++++++++++++++++++++++++++++++ very important +++++++++++++++++++++++++++++++++++++++++++++++ 
//This function reduces an array to a single value by applying callback function iteratively

const nums = [10,40,30,20]
const sum = nums.reduce((acc, num) => {                    //here acc is accumulator to hold ongoing calculations during each iteration & num is
    // console.log(`Acc value: ${acc} and array value: ${num}`)                                                 //each value of the array
    return acc + num                                                                            
},0)                       //Here 0 is the initial value
// console.log(sum)


//Finding min value--------------------------------
const min = nums.reduce((acc,num) => {
    return num < acc ? num : acc
},nums[0])
// console.log(min)

//Calculating total balance out of transactions----------------------------------------
const transactions = [
    {type:"income", amount: 2000},
    {type:"expense", amount: 1000},
    {type:"income", amount: 500},
    {type:"expense", amount: 100},
]
const balance = transactions.reduce((acc,t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount
},0)
// console.log(balance)


//Calculating shoping cart value
const cart = [
    {product: "Shoes", price: 2000, qty: 2},
    {product: "Shirt", price: 1000, qty: 3},
    {product: "Watch", price: 5000, qty: 1},
]
const cartTotal = cart.reduce((acc,item) => {
    return acc + item.price * item.qty
},0)
// console.log(cartTotal)


//Counting the number of occurences-------------------------------------------------------------------------------------
const myNums = [1,2,3,2,5,3]
const freq = myNums.reduce((acc, num) => {
    // console.log(acc[num])
   acc[num] = (acc[num] || 0) + 1               //(acc[num] || 0) it means if acc[num] doesn't exists(undefined) then use 0
//    console.log(acc[num])
   return acc
},{})
// console.log(freq)

//Counting number of occurences in a string------------------------------------------------------------------------------
const words = "Reduce function is very very powerful powerful powerful"
const text = words.split(" ")           //this gives an array
// console.log(text)
const occurence = text.reduce((arr,word) => {
    arr[word] = (arr[word] || 0) + 1
    return arr
},{})
// console.log(occurence)

// Grouping data by category ------------------------------------------------------------------------------
const expenses = [
    {category: "Food", amount: 2000},
    {category: "Taxi", amount: 500},
    {category: "Taxi", amount: 700},
    {category: "Food", amount: 200},
    {category: "Electricity", amount: 2500},
]
const grouped = expenses.reduce((arr,expense) => {
    arr[expense.category] = (arr[expense.category] || 0) + expense.amount
    return arr
},{})
console.log(grouped)
// date is an object

let mydate = new Date()
// console.log(mydate)     //o/p >> 2025-09-19T11:02:56.065Z
// console.log(mydate.toString())      //o/p >> Fri Sep 19 2025 11:02:56 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString())      //o/p >> Fri Sep 19 2025
// console.log(mydate.toLocaleDateString())        //o/p >> 9/19/2025
// console.log(mydate.toLocaleDateString("en-IN"))     // o/p >> 19/9/2025


let myCreatedDate = new Date(2023, 0, 24)       //Here 0 represents 1st month of year(Jan)
// console.log(myCreatedDate)
//readable form
// console.log(myCreatedDate.toLocaleDateString())
// console.log(myCreatedDate.toLocaleDateString("en-IN"))      //indian form

// with time
let myNewDate = new Date(2025, 8, 19, 6, 4)
// console.log(myNewDate.toLocaleDateString())     //<<<<<<<<< not working

//current date
console.log(Date.now())     // o/p >> 1758280672188 (is in milliseconds)


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())

console.log(`Today is ${newDate.getDay()}th day of week`)

console.log(newDate.toLocaleDateString("default", {         //o/p >> Friday, September 19, 2025
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric'
}))
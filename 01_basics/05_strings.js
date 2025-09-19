let myName = "Pankaj"
let repoCount = 2

// console.log(myName + " " + repoCount)

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`)     //Modern and efficient way of
//  using variables with strings. It is called string interpolation.

// We can also use other methods with these

// console.log(`Hello my name is ${myName.toUpperCase()}`) //toUpperCase() is one of methods that comes with strings

//  Another way of declarying
let yourName = new String("Pankaj")     //here string is being declared as an object
// console.log(typeof yourName)
console.log(yourName.length)

// console.log(yourName[0])        //to access the 0th key of the object

//  We can use trim method to delete extra spaces from a text
let userName = "   Pankaj_Kumar  "
console.log(userName)
console.log(userName.trim())

//  to find the character at some position
console.log(yourName.charAt(2))

//  simillarly we can find the positon of a character
console.log(yourName.indexOf("n"))

// substring method      //returns the part of this string from the start index up to and excluding the end index,
//  or to the end of the string if no end index is supplied.
let gameName = "Pankaj Kumar"
console.log(gameName.substring(1,4))

//  slice method        //returns it as a new string, without modifying the original string.
let otherGameName = "Pankaj Kumar Singh"
console.log(otherGameName.slice(2,5))
console.log(otherGameName.slice(5))
console.log(otherGameName.slice(-5))    //we can give -ve values to slice

//  replace method
let url = "https://pankaj.com/pankaj%20singh"
console.log(url.replace("%20","-"))


let str = "Pankaj Kumar Singh"
console.log(str.split(" ")) 
console.log(typeof(str.split(" ")))     //returns an object
console.log(str.split(" ")[1]) 
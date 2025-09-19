let myArr = [10, 2, 3, 4, 5, true, "Pankaj"]     //yes, an array can have multiple data types    //an array is an object
let myHeros = ["shaktiman", "nagraj", "dhruv", "doga"]

// console.log(myHeros[1])     //gives the index value of the array
// console.log(myArr[0])

//another method of declaration
let myArr2 = new Array(1,2,3,4,5,6,7,8,9)       //note the brackets here "()""

//Array Methods
// myArr.push(6)
// console.log(myArr)      //adds a value after the last index of the array

//pop method removes the last element of array
// myHeros.pop()
// console.log(myHeros)

// console.log(myArr.includes(6))      //checks if an array contains the value or not - returns boolean
// console.log(myHeros.includes("nagraj"))

// console.log(myArr.indexOf(3))       //gives index of the element in array

//slice method      
console.log("A ", myArr)
console.log(myArr.slice(1,3))       //slice doesn't change the original array
console.log("B ", myArr)

// splice method
console.log(myArr.splice(1,3))      //splice method changes the original array and also slices the last index given
console.log("C ", myArr)

//Making objects using singleton or constructor

let tinderUser = new Object()
// console.log(tinderUser)

//add items in object
tinderUser.id = "123abc"
tinderUser.name = "Pankaj"
tinderUser.isLoggedIn = false
// console.log(tinderUser)


//lets create another object with object in it
const regularUser = new Object({
    email: "someemail.email.com",
    fullName: {
        userFullName: {
            firstName: "Pankaj",
            lastName: "Kumar"
        }
    }

})

// console.log(regularUser)
// console.log(regularUser.fullName.userFullName.firstName)

//Combining objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign({}, obj1, obj2)      //better to add "{}" and empty object in begining to show that "{}" is target and others are source

// const obj3 = {...obj1,...obj2}       //more used
// console.log(obj3)

// to access all keys of an Object
// console.log(Object.keys(tinderUser))    // Important!,,,,, output is and array

//similarlly
// console.log(Object.values(tinderUser))
// now we can use array methods\
// console.log(Object.values(tinderUser).length)

//to get key value pairs in arrays
// console.log(Object.entries(tinderUser))     //o/p "[ [ 'id', '123abc' ], [ 'name', 'Pankaj' ], [ 'isLoggedIn', false ] ]"

//we can also ask object if it has any key (doesn't work for values)
// console.log(tinderUser.hasOwnProperty("name"))      //o/p true

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Deconstructing objects
const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Pankaj"
}

const{courseName} = course      //deconstructing
console.log(courseName)

// we can also assign a variable
const{courseInstructor:Instructor} = course     //here "Instructor is a variable"
console.log(Instructor)
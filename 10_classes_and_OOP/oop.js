// Object Literal and this keyword ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const user = {
    username: 'Pankaj',
    loginCount: 18,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
        // console.log(`Username: ${username}`)                //this will give error because here context is not shown.
        console.log(`Username: ${this.username}`)           //this will get executed because it is refering the current context.
        console.log(this)                           //this will print the current context
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// user.getUserDetails()

// Constructor ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// "new" keyword is used to create a constructor function. It creates a new context

function User(username, loginCount, isLoggedIn){
    this.username = username                //LHS is the variable and RHS is the value we are passing
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
}

const userOne = new User('Pankaj', 12, true)            //here we are creating q new instance of the function "User"
const userTwo = new User('Hanish', 244, false)          //here we are creating another new instance of the function "User"

console.log(userOne)
console.log(userTwo.greeting())
console.log(`Login count for userTwo: ${userTwo.loginCount}`)
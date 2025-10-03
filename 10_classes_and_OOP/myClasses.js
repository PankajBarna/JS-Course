// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
    
// }

// const user1 = new User('pankaj', 'pankaj@fb.com', '123')
// console.log(user1.encryptPassword())
// console.log(user1.changeUsername())

//What is happening behind the scenes - doing same as above using functions+++++++++++++++++
const User = function(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user1 = new User('pankaj', 'pankaj@fb.com', 123)
const user2 = new User('sonu', 'sonu@google.com', 789)

console.log(user1.changeUsername(), user2.changeUsername())


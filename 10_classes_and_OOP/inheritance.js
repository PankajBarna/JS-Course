class User{
    constructor(username){
        this.username = username
    }

    logUser(){
        console.log(`User is ${this.username}`)
    }
}


class Teacher extends User{             //inheretence here
    constructor(username, email, password){
        super(username)                     // this line means take username from its super class eg class User here
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const user1 = new Teacher('rakesh', 'rakesh@teacher.com', '123')
console.log(user1)
user1.addCourse()

const user2 = new User('hanish')
user2.logUser()

console.log(user1 instanceof User)
console.log(user2 instanceof Teacher)
function muyltiplyBy5(num){
    return num * 5
}

muyltiplyBy5.power = 2              //a function can also behave like object

// console.log(muyltiplyBy5(5))
// console.log(muyltiplyBy5.power)
// console.log(muyltiplyBy5.prototype)

//Lets create a function and inject some other functions in its prototype ++++++++++++++++++++++++++++++++++++++++++++++++++++
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){        // injecting function 1
    this.score++
    console.log(this.score)
}

createUser.prototype.printMe = function(){          // injecting function 2
    console.log(`Score is: ${this.score}`)
}

const user1 = new createUser('Pankaj', 20)          // lets create instances of createUser, these will have methods injected above
const user2 = new createUser('Sonu', 250)

user2.printMe()                 //now we can access injected functions
user1.increment()


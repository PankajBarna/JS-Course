 // Suppose we want to create a new funtion which removes extra spaces form a word and gives its true length
 // so, we are going to use prototype here

 let myName = 'Pankaj      '
//  console.log(myName.length)

 //now we want that we create a new method that gives original length of the word


// Lets declare a function in prototype of a global object and see if it is available in other objects and arrays

let myHeros = ['thor', 'spiderman']

let heroPowers = {
    thor: "hammer",
    spiderman: "sling",

    getSpidyPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// here we create a prototype method in global object. It will be available everywhere
Object.prototype.pankaj = function(){
    console.log(`Pankaj is present in all objects`)
}

// "pankaj" method is available in object
// heroPowers.pankaj()
// "pankaj" method is available in array
// myHeros.pankaj()
// "pankaj" method is available in string
// myName.pankaj()


// Inheritance +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//exchanging properties-------------
const User = {
    name: 'Pankaj',
    email: 'pankaj@example.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport              // telling TASupport to borrow all properties of TeachingSupport. Now whenever you'll make 
                                            //an object using new form TASupport, you will have access to TeachingSupport
}
//we can also give the access outside
Teacher.__proto__ = User        //now Teacher can access porperties of user

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)     // TeachingSupport accessing porperties of Teacher



//Now lets solve our original porblem

let anotherUser = 'Pankaj                '
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUser.trueLength()            //o/p : True length is 6

//Now ---------

"pankajKumar".trueLength()      //op: 11  here this is "pankajKumar"

"Bay Watch     ".trueLength()       //op: 9  here this is "Bay Watch"
//Creating a promise+++++++++++++++++++++++++++++++++++++++++++

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        // console.log("Async Task completed");
        resolve()
    },1000)
})

// promiseOne.then(function(){
//     console.log('Promise consumed')
// })

//Another way of creating a promise++++++++++++++++++++++++++++
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Async 2 resolved')
// })


//Another promise +++++++++++++++++++++++++++++++++++++++++++
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"Chai", email:"chaiaurcode@example.com"})             //the data is resolve is passed to "then"
//     },1000)
// }).then(function(user){                         //here, the parameter in function of then gets data from resolve above
//     console.log(user)
// })



//Another promise +++++++++++++++++++++++++
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:'Pankaj', password: '123'})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user) => {            //here we will extract username form the object in resolve -- we are getting full obj here
//     console.log(user);
//     return user.username                //here we are reutrning username form user obj
// }).then((name) => {                        //another .then() to extract username (this is called chaining)
//     console.log(name)
// }).catch((error) => {                   //to catch any error - is passed from 'reject' above
//     console.log(error)
// }).finally(() => console.log("The promise is either resolved or rejected"))     //it executes whether promise is resolved or rejected. We should always include it.



// Promise 5 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({name:"Pankaj Kumar", password: "123456"})
//         } else{
//             reject('JS Error occured')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)        
//     }
// }
// consumePromiseFive()

//Getting data from api using async await+++++++++++++++++++
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')          //fetch returns a promise. Await is used because it will take some time to fetch data from url
        const data = await response.json()                                                  //converting the response to json. Await is used because it will take sometime to convert
        console.log(data)
    } catch (error) {
        console.log('E: ', error)
    }
}
// getAllUsers()

//Getting data from api using then catch+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
fetch('https://api.github.com/users/hiteshchoudhary')               //fetch works as usual
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
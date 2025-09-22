//Loops
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

//Nested Loops++++++++++++++++++++
// printing tables 

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = `,i*j)  
//     }
    
// }


//Working with Arrays

// let myArray = ["flash","batman","superman"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
    
// }

// Break -----------Stopping the loop --------------------
// for (let i = 0; i < 20; i++) {
//     if(i == 5){                                           //break can't be used inside terinary operators
//         console.log(`5 detected`)
//         break
//     }
//     console.log(`Value of i is ${i}`)
    
// }


//Continue -------------
for (let i = 0; i < 20; i++) {
    if(i == 5){                                           
        console.log(`5 detected`)
        continue
    }
    console.log(`Value of i is ${i}`)
    
}
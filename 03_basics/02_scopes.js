// {} is called a scope.
//functions and conditional statements and loops have "{}" (not applicable for objects).
//declaration of a variable inside {} is called a block scope.
// declaration of a variable outside {} is called global scope.
//block scope varialbe is available in that block only.
//global scope variable is available for all code

let a = 12

if(true){
    console.log(a)      //global scope variable is available inside a block aswell.
    let b = 55
    console.log(b)
}
// console.log(b)      //block scope variable is not available outside the block but only inside it.
console.log(a)      //a global scope variable is available inside as well outside any block.
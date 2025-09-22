//Immediately Invoked Function Expressions (IIFE)
// 1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
// 2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
// 3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
// 4.We can use parameter inside first parentheses.
// 5. To write two or multiple IIFE one should be end with semicolon ;

(function chai(){                   //wrap the fuinction def in paranthesis and another pranthesis for execution
    console.log(`DB CONNECTED`)
})();                                 //mendatory to end with a semicolon.

(() => {
    console.log(`DB TWO CONNECTED`)
})();

//using paramaters and passing arguments

((username) =>{
    console.log(`${username} DB CONNECTED`)
})("Pankaj");                               //pass argument in execution paranthesis just like normal function
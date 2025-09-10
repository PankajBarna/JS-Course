const accountId = 12345
let accountName = "Pankaj"
var accountPassword = "123456"
accountCity = "Thane"   //  never declare a variable without the type keyword

// accountId = 6789    //once defined, a const cannot be changed while we can change let and var.

accountName = "Shabana" //  value of a let can be changed.

console.log(accountId)  //console.log is used to print the value of a variable

console.table([accountId,accountName,accountPassword,accountCity]); //console.table is used to print all variables in one table

/* a var is never used in modern javascript
to avoid block scope errors */
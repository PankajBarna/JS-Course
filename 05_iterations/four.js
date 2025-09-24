//For of in objects+++++++++++++++++++++++++++++++++++++ For Of Don't work with objects
//So we use For In----------------------
const myObject = {
    game1: "NFS",
    game2: "Spiderman",
    game3: "Road Rash "
}
for (const key in myObject) {
    // console.log(key)                //this returns keys of object
    // console.log(myObject[key])      //this returns values
    //console.log(`${key} is ${myObject[key]}`)   // o/p game1 is NFS
                                                //     game2 is Spiderman
                                                //     game3 is Road Rash  
    
}

// For In in arrays +++++++++++++++++++++++++++++++++++++
const myArr = ["js","c++","py","react"]
for (const key in myArr) {
    // console.log(key)            //prints key values: 0 1 2 3
    console.log(myArr[key])         //prints values: js c++ py react
}
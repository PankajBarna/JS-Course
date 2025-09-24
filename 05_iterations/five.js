// for each loop +++++++++++++++++++++++++++++++++++++++++++
const coding = ["js", "c++", "python", "java", "ruby"]

coding.forEach(function (item) {
    // console.log(item)
})

//  using arrow function
coding.forEach((val) => {
    // console.log(val)
})

//we can also refer external function in for each loop++++++++++++++++
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// using arrow function++++++++++++++++++++++++
// const newPrint = (val) => {
//     console.log(val)
// }
// coding.forEach(newPrint)

//Apart form values, the call back fuction has arrays index and array itself
coding.forEach((val, index, arr) => {
    // console.log(val, index, arr)        // o/p: js 0 [ 'js', 'c++', 'python', 'java', 'ruby' ] and so on....
})

// Important - - For Each loop to an object inside an Array(like received form database) ++++++++++++++++++++++++++++++++++
const myCoding = [
    {
    lang: "javascript",
    extension: "js"
    },
    {
    lang: "python",
    extension: "py"

    },
    {
    lang: "c++",
    extension: "cpp"
    }
]
myCoding.forEach((item) => {
    console.log(item.extension)
})
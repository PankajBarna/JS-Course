let marvelHeros = ["spiderman", "thor", "hulk"]
let dcHeros = ["superman", "batman", "flash"]

//joining two arrays
// console.log(marvelHeros.concat(dcHeros))


// let allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

//another better and preferable apporach to join arrays is know as spreading\
let allHeros = [...marvelHeros, ...dcHeros]     // very important, Remember this method of spreading
// console.log(allHeros)


//flat method
let otherArr = [1, 2, 3, ["a", "b"], 4, 5, ["c", "d", [101, 102, 103]]]
let flatArr = otherArr.flat(Infinity)       //this method flats all sub arrays and make a single array.
// console.log(flatArr)

// converting to array
// console.log(Array.isArray("pankaj"))
// console.log(Array.from("Pankaj"))       //this converts the string to array

// console.log(...("pankaj")[1])       //>> means we can also spread a string and find an index of in it

// console.log(Array.from({name:"Pankaj"}))        //this returns an empty array because it doesn't know what to make array of, a key or a value?

// making array from different values
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

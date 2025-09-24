// Filter function +++++++++++++++++++++++++++++++++++++++++++++++++++
//"for each" doesn't return anything so we use "filter" function
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => (num <= 5))

const newNums = myNums.filter((num) => {     //if we are using braces, we have to user return.
   return (num <= 5)
})
// console.log(newNums)

//example of filter function with objects+++++++++++++++++++++++++++++++++++++++
const books = [
  { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: "1st" },
  { title: "Atomic Habits", genre: "Self-Help", publish: 2018, edition: "2nd" },
  { title: "Sapiens", genre: "History", publish: 2011, edition: "3rd" },
  { title: "Clean Code", genre: "Programming", publish: 2008, edition: "1st" },
  { title: "The Psychology of Money", genre: "Finance", publish: 2020, edition: "1st" },
  { title: "Meditations", genre: "Philosophy", publish: 1980, edition: "Revised" },
  { title: "To Kill a Mockingbird", genre: "Classic", publish: 1960, edition: "50th Anniversary" },
  { title: "The Pragmatic Programmer", genre: "Programming", publish: 1999, edition: "20th Anniversary" },
  { title: "Ikigai", genre: "Self-Help", publish: 2016, edition: "1st" },
  { title: "Thinking, Fast and Slow", genre: "Psychology", publish: 2011, edition: "2nd" }
];
// console.log(books.length)

// const filterBooks = books.filter((book) => (book.genre === "Self-Help"))
//using multiple conditions for filter-----------------
const filterBooks = books.filter((book) => {
  return book.genre === "Self-Help" && book.publish < 2017
})
console.log(filterBooks)

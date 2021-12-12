// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"


 describe("a function named divBy", () => {
   it("takes in a number and determines if it is divisbly by 3", () => {
     expect(divBy(num1)).toEqual("15 is divisible by three")
     expect(divBy(num2)).toEqual("0 is divisible by three")
     expect(divBy(num3)).toEqual("-7 is not divisible by three")
   })
 })


// b) Create the function that makes the test pass.

// I need to create a function
//the funciton should take in a number for it's parameter
//I will use a conditional to determine if the number is divisble by three
//I will attempt to use a ternary operator, if not an if /else if statement will suffice
//if yes, it will return "number, is divisible by three"
//if not, it will return "number, is not divisble by three"

 const divBy = (number) => {
   return number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`
 }




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("a function named arrCap will take in an array parameter", () => {
  it("will take in an array of words and return an array with all words capitalized", () => {
    expect(arrCap(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    })
})
// b) Create the function that makes the test pass.

//I will start by creating a function named arrCap
// the function will take in an array as it's parameter
//then I will use a .map function to iterate over the array
// As it iterates over the array, it will return the words with the first letter capitalized in a new array declared newArr
// I found this method on free code camp after really struggling with this challenge. I sort of understand how it works but would love a further explanation.


const arrCap = (array) => {
  let newArr = array.map(string => {
    return string[0].toUpperCase() + string.substring(1);
  })
return newArr
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2


describe("a funciton named firstVow", () => {
  it("takes in a string and returns the index of the first vowel", () => {
    expect(firstVow(vowelTester1)).toEqual(1)
    expect(firstVow(vowelTester2)).toEqual(0)
    expect(firstVow(vowelTester3)).toEqual(2)
  })
})


// b) Create the function that makes the test pass.


//first I will create a function called firstVow
//the function needs to take in a string as it's parameter
//from there I will create an array to store the vowels of the string
// I will use "if" conditionals to determine if the vowel is present in the string
//if a vowel is present in the string, I will use the .push method to push them into the vowel array
// I will then return the array of vowels with the math.min method so that it will return the first index in the array


const firstVow = (string) => {
  let vowArr = []
if(string.indexOf("a") !== -1) {
   vowArr.push(string.indexOf("a"))
} if(string.indexOf("e") !== -1){
   vowArr.push(string.indexOf("e"))
}  if(string.indexOf("i") !== -1){
   vowArr.push(string.indexOf("i"))
}  if(string.indexOf("o") !== -1){
  vowArr.push(string.indexOf("o"))
}  if(string.indexOf("u") !== -1){
   vowArr.push(string.indexOf("u"))
}
      return Math.min(...vowArr)
}

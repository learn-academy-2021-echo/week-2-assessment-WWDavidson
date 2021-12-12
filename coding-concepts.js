// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.split(""))

// a) Your answer: [E,c,h,o, , 2,0,2,1]
// b) Verify and explain: [
//   'E', 'c', 'h',
//   'o', ' ', '2',
//   '0', '2', '1'
// ] I missed the quotations, but realize it needs them because its breaking down a string into single elements and putting them in an array.



// --------------------2) What will this log?

const greeter = (name) => {
   return `Hello, ${name}!`

}
//console.log(greeter("LEARN Student"))

// a) Your answer: It will log "Hello, LEARN Student!""
// b) Verify and explain: So I didn't pay close enough attention to the code and it returned undefined. It did this because there was no return in the function. To make sure that was the case, I added a return and it logged the expected output.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 //console.log(multBy2)

// a) Your answer: It will log an array of the numbers multiplied by 2. [8,10,12,14,16]
// b) Verify and explain: My answer was correct. The .map function takes an array and returns an array of the same length. The .map function is an "accessor" function.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
 //console.log(onlyOdds)

// a) Your answer: This function will log only the odd numbers of the given array [11,13,15]
// b) Verify and explain: My answer was correct because using the .filter function allows us to take in/iterate over an array, and return a new/modified array. The .filter funciton is a "mutator" function.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 //console.log(myCodingSkills.languages[0])

// a) Your answer: It will log "JavaScript"
// b) Verify and explain: My answer was correct because we are accessing the 0 index of the languages key in the myCodingSkills object, and "JavaScript" is at the zero index of that array.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
 //console.log(learnStudent)

// a) Your answer: I think this will add "George" to the class.
// b) Verify and explain: It did add George to the student name, because the "new" keyword creates objects from classes. Classes is something I'm going to really have to review more once I complete the assessment, so that's all I have right now.

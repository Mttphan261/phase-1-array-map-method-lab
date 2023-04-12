const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  return tutorials.map((word) => {
    const seperate = word.split(' ');
    const cap = seperate.map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
    return cap.join(' ');
  })
}

console.log(titleCased());


// const titleCased = tutorials.map((item) => {
//   const seperate = item.split(' ');
//   const cap = seperate.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//   return cap.join(' ');
// })



// const titleCased = () => {
//   return tutorials
// }


// NOTE: This lab is challenging! You will need to iterate through the tutorials array, modifying the name of each tutorial. To do this, you will also need to access and modify each individual word.

// Some questions to consider:

// How can we "iterate" through individual words in a string?
// Can we execute an iteration inside an iteration? How?
// How can we capitalize just the first letter in a word?
// A couple of hints:

// Break the task into smaller chunks: using the console or a REPL, start by figuring out how to modify one individual element in the tutorials array. Once you've got that working, then figure out how to update the array itself.
// Use Google!!
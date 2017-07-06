// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y){
  if(x > y){
    return x;
    else {
      return y;
    }
  }

}

let largerNumber = max(5, 7)
console.log(largerNumber)


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
    if(x > y && x > z) {
      return x;
    }
    if(y > x && y > z) {
      return y;
    }
    if(z > x && z > y) {
      return z;
    }
}

let largestNumber = maxOfThree(5, 7, 15)


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      return true;
    }
    else if (char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
      return true;
    }
    else {
      return false;
    }
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(x, y) {
  return x + y;
}

let numbersAdded = sum(5, 7)
console.log(numbersAdded)

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x, y, z) {
  total = x + y + z;
  average = total / 3;
  return average;
}

let numbersAveraged = avg(5, 7, 15);
console.log(numbersAveraged);


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(x) {
  let numberOfCharacters = x.length;
  return numberOfCharacters;
}

let charaterTotal = getLength("string");
console.log(charaterTotal)

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(firstParameter, secondParameter) {
  if(secondParameter > firstParameter) {
    return true;
  }
  else {
    return false;
  }
}

let isSecondNumberGreater = greaterThan(5, 7);
console.log(isSecondNumberGreater);



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(x) {
  let greeting = "Hello, " + x + "!";
  return greeting;
}
console.log(greet("Mark"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(adjective, noun, adverb, verb) {
    let sentence = "The rabbit quickly jumped over the " + adjective + " " noun + " and then " + adverb + verb;
    return sentence;
}
console.log(madlib("small", "stump", "suddenly", "stopped"));

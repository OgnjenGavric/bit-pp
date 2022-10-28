// Write a program that will iterate from 0 to 10 and display squares of numbers.
for (var i = 0; i <= 10; i++) {
  console.log(i * i);
}

console.log("_______");
// Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for (var i = 0; i <= 15; i++) {
  if (i === 0) {
    console.log(i + " is even");
  } else if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// Write a program to sum the multiples of 3 and 5 under 1000.
var sumMultiples = 0;
for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sumMultiples += i;
  }
}
console.log(sumMultiples);

// Write a program to compute the sum and product of an array of integers.
var arrayCompute = [1, 2, 3, 4, 5, 6];
var sumCompute = 0;
var productCompute = 1;
for (i = 0; i < arrayCompute.length; i++) {
  sumCompute += arrayCompute[i];
  productCompute *= arrayCompute[i];
}
console.log('Sum: ' + sumCompute + ' Product: ' + productCompute);

// Write a program which prints the elements of the following array as a single string.
var x2 = ["1", "A", "B", "c", "r", true, NaN, undefined];
console.log(x2.toString());
console.log(x2.join(' '));

//Write a program that prints the elements of the following array.
var arrayNested = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

for (var i in arrayNested) {
  console.log("Row " + i + ":");
  for (var j in arrayNested[i]) {
    console.log("-> " + arrayNested[i][j]);
  }
}

// Write a program that outputs the sum of squares of the first 20 numbers.
let sumSquares = 0;
for (let i = 1; i <= 20; i++) {
  sumSquares += (i * i);
}
console.log(sumSquares);

// Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var averageMarks = 0;

for (var i = 0; i < students.length; i++) {
  averageMarks += students[i][1];
  var avg = (averageMarks / students.length);
}

console.log("Average grade: " + (averageMarks) / students.length);

if (avg < 60) {
  console.log("Grade : F");
} else if (avg < 70) {
  console.log("Grade : D");
} else if (avg < 80) {
  console.log("Grade : C");
} else if (avg < 90) {
  console.log("Grade : B");
} else if (avg < 100) {
  console.log("Grade : A");
}

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for (var num = 1; num < 101; num++) {
  var checkForThree = num % 3;
  var checkForFive = num % 5;
  if ((checkForThree === 0) && (checkForFive === 0))
    console.log("FizzBuzz");
  else if (checkForThree === 0)
    console.log("Fizz");
  else if (checkForFive === 0)
    console.log("Buzz");
  else
    console.log(num);
}


// 1. Write a program that calculates the maximum of two given numbers.

function maximumNumber(a, b) {
  if (a > b) return a;
  if (a < b) return b;
  return "Numbers are equal!";
}
var result1 = maximumNumber(5, 5);
console.log(result1);

// 2. Write a program that checks if a given number is odd.
function checksNumberIsOdd(num) {
  if (num % 2 === 0) return num;
}
var numberOdd = checksNumberIsOdd(8);
console.log("Number " + numberOdd + " is odd");

// 3. Write a program that checks if a given number is a three digit long number.
function isThreeDigitNumber(n) {
  if (isFinite(n) === false) {
    console.log("Input must be number");
  }
  var digit = "";
  if (n >= 100 && n <= 999) {
    digit = "This is three digit long number";
  }
  return digit;
}

console.log(isThreeDigitNumber(333));

// 4. Write a program that calculates an arithmetic mean of four numbers.

// 5. Write a program that draws a square of a given size. For example, if the size of square is 5 the program should draw:
/*
*****
*   *
*   *
*   *
*****
*/

// 6. Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
/*
*****
***
*******
*/

// 7. Write a program that calculates a number of digits of a given number.

// 8. Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7;
// Result: 3

// 9. Write a program that calculates the sum of odd elements of a given array.

// 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

// 11. Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.





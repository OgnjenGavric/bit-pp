// 1. Write a program that calculates the maximum of two given numbers.

function maximumNumber(a, b) {
  if (!isFinite(a) || !isFinite(b)) return "Invalid Input!";
  if (a > b) return a;
  if (a < b) return b;
  return "Numbers are equal!";
}
var result1 = maximumNumber(5, 5);
console.log(result1);

// 2. Write a program that checks if a given number is odd.
function checksNumberIsOddOrEven(num) {
  if (!isFinite(num)) {
    return "Invalid Input!";
  }
  var result = "";
  if (num % 2 === 0) {
    result = "Number is Even";
  } else {
    result = "Number is Odd";
  }
  return result;
}
var numberOddOrEven = checksNumberIsOddOrEven(8);
console.log(numberOddOrEven);

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
function checkArithmeticMean(arr) {
  var ar_mean = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr.length === 4);
    sum += arr[i];
    ar_mean = sum / arr.length;
  }
  return ar_mean;
}
var arithmeticMean = checkArithmeticMean([24, 66, 5, 9]);
console.log(arithmeticMean);

// 5. Write a program that draws a square of a given size. For example, if the size of square is 5 the program should draw:
/*
*****
*   *
*   *
*   *
*****
*/
function drawSquare(a, b) {
  var result2 = "";
  for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
      if (i === 0 || i === a - 1 || j == 0 || j === b - 1) {
        result2 += "*";
      } else {
        result2 += " ";
      }
    }
    if (i !== a - 1) result2 += "\n";
  }
  return result2;
}
var draw = drawSquare(5, 5);
console.log(draw);

// 6. Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
/*
*****
***
*******
*/
var values = [5, 3, 7];
for (var i = 0; i < values.length; i++) {
  console.log('*'.repeat(values[i]));
}

console.log("_____________");
// 7. Write a program that calculates a number of digits of a given number.
function digits_count(number) {
  var digits_count = 0;
  if (number >= 0); {
    digits_count++;
    while (number / 10 >= 1) {
      number /= 10;
      ++digits_count;
    }
  }
  return digits_count;
}
var count = digits_count(12345678910);
console.log(count);
// 8. Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7;
// Result: 3
function appearancesOfNumber(e) {
  var a = [2, 4, 7, 8, 7, 7, 1];
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
      count++;
    }
  }
  return count;
}
var appearances = appearancesOfNumber(7);
console.log(appearances);

// 9. Write a program that calculates the sum of odd elements of a given array.
function sumOdd(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      sum += a[i];
    }
  }
  return sum;
}
var f = sumOdd([2, 4, 7, 8, 7, 7, 1]);
console.log(f);

// 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.
function letters_count(word) {
  var _count = 0;
  for (var i = 0; i <= word.length; i++) {
    if (word[i] += 1) {
      _count++;
    }
  }
  return _count;
}
var m = letters_count("Antidisestablishmentarianism");
console.log(m);

function numberOfLetter(n) {
  var count = 0;
  var a = "A";
  var b = "a";
  for (var i = 0; i <= n.length; i++) {
    if ((n[i] === a) || (n[i] === b)) {
      count++;
    }
  }
  return count;
}
var numberOf = numberOfLetter("Antidisestablishmentarianism");
console.log(numberOf);

console.log("_____________");
// 11. Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.
function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
console.log(repeatStringNumTimes("abc", 4))




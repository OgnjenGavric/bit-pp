/* Write a program that calculates the maximum of two given numbers. */
var max = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
/* Write a program that checks if a given number is odd. */
var isOdd = function (n) {
  return n % 2 === 1;
};
/* Write a program that checks if a given number is a three digit long number. */
var isThreeDigit = function (n) {
  return n >= 100 && n < 1000;
};
/* Write a program that draws a square of a given size. For example, if the size of */
/* square is 5 the program should draw: */
/* ***** */
/* *   * */
/* *   * */
/* *   * */
/* ***** */
var drawSquare = function (size) {
  var square = '';
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        square += '*';
      } else {
        square += ' ';
      }
    }
    square += '\n';
  }
  return square;
};
/* square is 5 the program should draw: */
/* * */
/* ** */
/* *** */
/* **** */
/* ***** */
var drawTriangle = function (size) {
  var triangle = '';
  for (var i = 0; i < size; i++) {
    for (var j = 0; j <= i; j++) {
      triangle += '*';
    }
    triangle += '\n';
  }
  return triangle;
};
/* Write a program that draws a horizontal chart representing three given values. */
/* For example, if values are 5, 3, and 7, the program should draw: */
/* * */
/* * */
/* * * */
/* * * */
/* * * * */
/* ******* */
var drawChart = function (a, b, c) {
  var chart = '';
  var max = Math.max(a, b, c);
  for (var i = 0; i < max; i++) {
    if (a > i) {
      chart += '*';
    }
    if (b > i) {
      chart += '*';
    }
    if (c > i) {
      chart += '*';
    }
    chart += '\n';
  }
  return chart;
};
/* For example, if values are 5, 3, and 7, the program should draw: */
/* * */
/* * * */
/* * * * */
/* * * * * */
/* * * * * * */
/* * * * * */
/* * * * */
/* * * */
/* * */
var drawDiamond = function (size) {
  var diamond = '';
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size - i; j++) {
      diamond += ' ';
    }
    for (var k = 0; k <= i; k++) {
      diamond += '* ';
    }
    diamond += '\n';
  }
  for (var i = size - 2; i >= 0; i--) {
    for (var j = 0; j < size - i; j++) {
      diamond += ' ';
    }
    for (var k = 0; k <= i; k++) {
      diamond += '* ';
    }
    diamond += '\n';
  }
  return diamond;
};
/* Write a program that calculates a number of digits of a given number. */
var numDigits = function (n) {
  var digits = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    digits++;
  }
  return digits;
};
/* Write a program that calculates a number of appearances of a given number in a */
/* given array. */
var numAppearances = function (n, arr) {
  var appearances = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      appearances++;
    }
  }
  return appearances;
};
/* given array. */
var numAppearances = function (n, arr) {
  var appearances = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      appearances++;
    }
  }
  return appearances;
};
/* Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7 */
/* Output: 3 */
var numAppearances = function (n, arr) {
  var appearances = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      appearances++;
    }
  }
  return appearances;
};
/* Result: 3 */
var numAppearances = function (n, arr) {
  var appearances = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      appearances++;
    }
  }
  return appearances;
};
/* Write a program that calculates the sum of odd elements of a given array. */
var sumOdd = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i];
    }
  }
  return sum;
};
/* Write a program that calculates the number of appearances of a letter a in a */
/* given string. Modify the program so it calculates the number of both letters a and A. */
var numAppearances = function (str) {
  var appearances = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      appearances++;
    }
  }
  return appearances;
};
/* given string. Modify the program so it calculates the number of both letters a and */
/* A. */
var numAppearances = function (str) {
  var appearances = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      appearances++;
    }
  }
  return appearances;
};
/* A. */
var numAppearances = function (str) {
  var appearances = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      appearances++;
    }
  }
  return appearances;
};
/* Write a program that concatenates a given string given number of times. */
var concat = function (str, n) {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += str;
  }
  return result;
};
/* Write a program that calculates the number of appearances of a letter a in a */
/* given string. Modify the program so it calculates the number of both letters a and A. */
var numAppearances = function (str) {
  var appearances = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      appearances++;
    }
  }
  return appearances;
};
/* given string. */
var numAppearances = function (str) {
  var appearances = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      appearances++;
    }
  }
  return appearances;
};
/* Write a program that concatenates a given string given number of times. For */
/* example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */
var concat = function (str, n) {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += str;
  }
  return result;
};
/* example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */
var concat = function (str, n) {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += str;
  }
  return result;
};

/* Write a function that converts an array of strings into an array of numbers. Filter */
var stringArray = ['1', '2', '3'];
var numberArray = stringArray.map(function (x) {
  return parseInt(x, 10);
});
/* out all non-numeric values. */
var stringArray = ['1', '2', '3', 'a', 'b', 'c'];
var numberArray = stringArray.map(function (x) {
  return parseInt(x, 10);
}).filter(function (x) {
  return !isNaN(x);
});
/* Write a function that converts an array of strings into an array of numbers. Filter */
var stringArray = ['1', '2', '3'];
var numberArray = stringArray.map(function (x) {
  return parseInt(x, 10);
});
/* out all non-numeric values. */
var stringArray = ['1', '2', '3', 'a', 'b', 'c'];
var numberArray = stringArray.map(function (x) {
  return parseInt(x, 10);
}).filter(function (x) {
  return !isNaN(x);
});
/* Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity] */
var stringArray = ['1', '21', undefined, '42', '1e+3', Infinity];
var numberArray = stringArray.map(function (x) {
  return parseInt(x, 10);
}).filter(function (x) {
  return !isNaN(x);
});
/* Write a program to join all elements of the array into a string skipping elements */
var array = [1, 2, 3, 4];
var result = array.join('-');
/* that are undefined, null, NaN or Infinity. */
var array = [1, 2, 3, 4, undefined, null, NaN, Infinity];
var result = array.filter(function (x) {
  return !isNaN(x);
}).join('-');
/* Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity. */
var array = [1, 2, 3, 4, undefined, null, NaN, Infinity];
var result = array.filter(function (x) {
  return !isNaN(x);
}).join('-');
/* Write a program to filter out falsy values from the array. */
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var result = array.filter(function (x) {
  return x;
});
/* Write a program that calculates a number of integer values in the array. */
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
var result = array.filter(function (x) {
  return !isNaN(x) && x % 1 === 0;
}).length;
/* Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null] */
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
var result = array.filter(function (x) {
  return !isNaN(x) && x % 1 === 0;
}).length;
/* Output: 3 */
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
var result = array.filter(function (x) {
  return !isNaN(x) && x % 1 === 0;
}).length;
/* Write a program that calculates a number of float values in the array. Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null] */
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
var result = array.filter(function (x) {
  return !isNaN(x) && x % 1 !== 0;
}).length;

/* Write a function to check whether the `input` is a string or not. */
function isString(input) {
  return typeof input === 'string';
}
/* Write a function to check whether a string is blank or not. */
function isBlank(input) {
  return input.trim().length === 0;
}
/* Write a function that concatenates a given string n times (default is 1). */
function repeat(input, n) {
  if (n === undefined) {
    n = 1;
  }
  return input.repeat(n);
}
/* Write a function to count the number of letter occurrences in a string. */
function countLetter(input, letter) {
  var count = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] === letter) {
      count++;
    }
  }
  return count;
}
/* Write a function to find the position of the first occurrence of a character in a string. The */
/* result should be in human numeration form. If there are no occurrences of the character, the function */
/* should return -1. */
function findFirstOccurrence(input, letter) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === letter) {
      return i + 1;
    }
  }
  return -1;
}
/* result should be the position of character. If there are no occurrences of the character, the */
/* function should return -1. */
function findLastOccurrence(input, letter) {
  for (var i = input.length - 1; i >= 0; i--) {
    if (input[i] === letter) {
      return i + 1;
    }
  }
  return -1;
}
/* function should return -1. */
function findAllOccurrences(input, letter) {
  var result = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] === letter) {
      result.push(i + 1);
    }
  }
  return result;
}
/* Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1. */
function findFirstOccurrence(input, letter) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === letter) {
      return i + 1;
    }
  }
  return -1;
}
/* Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */
function findLastOccurrence(input, letter) {
  for (var i = input.length - 1; i >= 0; i--) {
    if (input[i] === letter) {
      return i + 1;
    }
  }
  return -1;
}
/* Write a function to convert string into an array. Space in a string should be represented as “null” in new array. */
function stringToArray(input) {
  var result = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      result.push(null);
    } else {
      result.push(input[i]);
    }
  }
  return result;
}
/* Write a function that accepts a number as a parameter and checks if the number is prime or not. Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */
function isPrime(input) {
  if (input <= 1) {
    return false;
  }
  for (var i = 2; i < input; i++) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}
/* Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator. */
function replaceSpaces(input, separator) {
  if (separator === undefined) {
    separator = '-';
  }
  return input.split(' ').join(separator);
}
/* Write a function to get the first n characters and add “...” at the end of newly created string. */
function truncate(input, n) {
  if (input.length <= n) {
    return input;
  }
  return input.substring(0, n) + '...';
}
/* Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values. */
function convertToNumbers(input) {
  var result = [];
  for (var i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      result.push(Number(input[i]));
    }
  }
  return result;
}
/* Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed. */
function yearsToRetirement(yearOfBirth) {
  var currentYear = new Date().getFullYear();
  var age = currentYear - yearOfBirth;
  if (age >= 60) {
    return 'You are already retired.';
  }
  return 60 - age;
}
/* Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th. */
function humanizeNumber(input) {
  var lastDigit = input % 10;
  var lastTwoDigits = input % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return input + 'th';
  }
  switch (lastDigit) {
    case 1:
      return input + 'st';
    case 2:
      return input + 'nd';
    case 3:
      return input + 'rd';
    default:
      return input + 'th';
  }
}

/* Write a program to insert a string within a string at a particular position (default is 1, beginning of a string). */
function insertString(string, stringToInsert, position) {
  if (position === undefined) {
    position = 1;
  }
  return string.slice(0, position - 1) + stringToInsert + string.slice(position - 1);
}
/* Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity. [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] */
function joinArray(array) {
  var result = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== undefined && array[i] !== null && !isNaN(array[i]) && isFinite(array[i])) {
      result += array[i];
    }
  }
  return result;
}
/* Write a program to filter out falsy values from the array. */
function filterFalsy(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
/* Write a function that reverses a number. The result must be a number. */
function reverseNumber(number) {
  var result = 0;
  while (number > 0) {
    result = result * 10 + number % 10;
    number = Math.floor(number / 10);
  }
  return result;
}
/* Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the */
/* last &#39;n&#39; elements of the array. */
function getLastElement(array, n) {
  if (n === undefined) {
    n = 1;
  }
  return array.slice(array.length - n);
}
/* last &#39;n&#39; elements of the array. */
function getLastElement(array, n) {
  if (n === undefined) {
    n = 1;
  }
  return array.slice(array.length - n);
}
/* Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the last &#39;n&#39; elements of the array. */
function getLastElement(array, n) {
  if (n === undefined) {
    n = 1;
  }
  return array.slice(array.length - n);
}
/* Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the last &#39;n&#39; elements of the array. */
function getLastElement(array, n) {
  if (n === undefined) {
    n = 1;
  }
  return array.slice(array.length - n);
}
/* Write a function that says whether a number is perfect. */
function isPerfect(number) {
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number;
}
/* Write a function to find a word within a string. */
function findWord(string, word) {
  var regex = new RegExp('\\b' + word + '\\b', 'i');
  return regex.test(string);
}
/* Write a function to hide email address. */
function hideEmail(email) {
  var regex = /(.{2})(.*)(@.*)/;
  return email.replace(regex, '$1*****$3');
}
/* Write a program to find the most frequent item of an array. */
function mostFrequent(array) {
  var result = {};
  for (var i = 0; i < array.length; i++) {
    if (result[array[i]] === undefined) {
      result[array[i]] = 1;
    } else {
      result[array[i]]++;
    }
  }
  var max = 0;
  var maxKey;
  for (var key in result) {
    if (result[key] > max) {
      max = result[key];
      maxKey = key;
    }
  }
  return maxKey;
}

/* Write a program that checks if a given element e is in the array a. */
var a = [1, 2, 3, 4, 5];
var e = 3;
var found = false;
for (var i = 0; i < a.length; i++) {
  if (a[i] === e) {
    found = true;
    break;
  }
}
console.log(found);

/* Write a program that checks if a given element e is in the array a. */
var a = [1, 2, 3, 4, 5];
var e = 3;
var found = false;
for (var i = 0; i < a.length; i++) {
  if (a[i] === e) {
    found = true;
    break;
  }
}
console.log(found);
/* Write a program that checks if a given element e is in the array a. Input: e = 3, a = [5, -4.2, 3, 7] Output: yes Input: e = 3, a = [5, -4.2, 18, 7] Output: no */
var a = [5, -4.2, 3, 7];
var e = 3;
var found = false;
for (var i = 0; i < a.length; i++) {
  if (a[i] === e) {
    found = true;
    break;
  }
}
console.log(found ? 'yes' : 'no');
/* Write a program that multiplies every positive element of a given array by 2. */
var a = [-3, 11, 5, 3.4, -8];
for (var i = 0; i < a.length; i++) {
  if (a[i] > 0) {
    a[i] *= 2;
  }
}
console.log(a);
/* Write a program that finds the minimum of a given array and prints out its value and index. */
var a = [4, 2, 2, -1, 6];
var min = a[0];
var minIndex = 0;
for (var i = 1; i < a.length; i++) {
  if (a[i] < min) {
    min = a[i];
    minIndex = i;
  }
}
console.log(min, minIndex);
/* Write a program that finds the second smallest number and prints out its value. */
var a = [4, 2, 2, -1, 6];
var min = a[0];
var minIndex = 0;
for (var i = 1; i < a.length; i++) {
  if (a[i] < min) {
    min = a[i];
    minIndex = i;
  }
}
a.splice(minIndex, 1);
min = a[0];
for (var i = 1; i < a.length; i++) {
  if (a[i] < min) {
    min = a[i];
  }
}
console.log(min);
/* Write a program that calculates the sum of positive elements in the array. */
var a = [3, 11, -5, -3, 2];
var sum = 0;
for (var i = 0; i < a.length; i++) {
  if (a[i] > 0) {
    sum += a[i];
  }
}
console.log(sum);
/* Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side. */
var a = [2, 4, -2, 7, -2, 4, 2];
var symmetric = true;
for (var i = 0; i < a.length / 2; i++) {
  if (a[i] !== a[a.length - 1 - i]) {
    symmetric = false;
    break;
  }
}
console.log(symmetric);

/* Write a program that intertwines two arrays. You can assume the arrays are of the same */
var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
for (var i = 0; i < a.length; i++) {
  c.push(a[i]);
  c.push(b[i]);
}
console.log(c);
/* length. Input arrays: [4, 5, 6, 2], [3, 8, 11, 9] */
var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
for (var i = 0; i < a.length; i++) {
  c.push(a[i]);
  c.push(b[i]);
}
console.log(c);


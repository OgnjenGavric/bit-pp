/*1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string" "JS"; -> "JS My random string"
"My random string" "JS", 10 -> "My random JS string"*/

function insertString(string, insertS, position) {

  var tempArray = [];
  var newString = "";

  if (typeof position === "undefined") {
    return newString = insertS + " " + string;
  }
  for (var i = 0; i < string.length + 2; i++) {
    if (i === position) {
      tempArray[position] = insertS;
      tempArray[position + 1] = " ";
    }

    tempArray[tempArray.length] = string[i];
    newString += tempArray[i];

  }
  return newString;

}
var result = insertString("My random string", "JS", 10);
console.log(result);

// v.2

function insertString(string, insertS, position) {
  var newString = '';
  if (typeof position === 'undefined') {
    return (newString = insertS + ' ' + string);
  }
  for (var i = 0; i < string.length; i++) {
    if (i === position) {
      newString += insertS;
    }
    newString += string[i];
  }
  return newString;
}
var result = insertString("My random string", 'JS', 10);
console.log(result);

/* 2.Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, "", undefined, 47, null]
*/

function filterOutandAddtoString(arr) {
  var add = "";
  for (var i = 0; i < arr.length; i++) {
    if (isFinite(arr[i]) && arr[i] !== null) {
      add += arr[i];
    }
  }
  return add;
}
console.log(filterOutandAddtoString([NaN, 0, 15, false, -22, "", undefined, 47, null]));

/*3.Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, "", undefined, 47, null] -> [15, -22, 47]*/

function filterOutFalsy(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (!!arr[i] !== false) {
      newArray[newArray.length] = arr[i];
    }
  }
  return newArray;
}
var result = filterOutFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(result);

/*4.Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number*/

function reverse(num) {
  var tempString = "";
  var newString = "";
  tempString += num;
  for (var i = tempString.length - 1; i > -1; i--) {
    newString += tempString[i];

  }
  return parseInt(newString);

}
var result = reverse(12345);
console.log(result);

/*5.Write a function to get the last element of an array. Passing a parameter "n" will return the
last "n"; elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]*/

function lastElements(arr, n) {
  var newArray = [];

  if (typeof n == "undefined") {
    newArray[newArray.length] = arr[arr.length - 1];
  }
  for (var i = arr.length - n; i < arr.length; i++) {
    newArray[newArray.length] = arr[i];
  }
  return newArray;
}

var res = lastElements([7, 9, 0, -2], 2);
console.log(res);


/*6.Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" ["none", "none"]
2 -> [null, null]
*/

function createArr(n, el) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    if (typeof el === "undefined") {
      el = null;
    }
    arr[arr.length] = el;
  }
  return arr;
}
console.log(createArr(2, "none"));

/*7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/

function perfectNumber(n) {
  var arrOfDivisors = [],
    result = 0;
  for (var i = 0; i < n; i++) {
    if (n % i === 0 && i > 0) {
      arrOfDivisors[arrOfDivisors.length] = i;
    }
  }
  for (var j = 0; j < arrOfDivisors.length; j++) {
    result += arrOfDivisors[j];
  }
  return result === n;
}
console.log(perfectNumber(8128));

/*8.Write a function to find a word within a string.
"The quick brown fox", "fox" -> "fox" was found 1 times"
"aa bb cc dd aa", "aa" -> "aa" was found 2 times"
*/

function wordCount(string, word) {

  var apperances = 0,
    res = "";

  for (i = 0; i < string.length; i++) {
    if (string[i] === word[0]) {
      for (j = i; j < i + word.length; j++) {
        if (string[j] === word[j - i]) {
          res += string[j];
        }
        if (res === word) {
          apperances++;
        }
      }
      res = "";
    }
  }
  return word + "," + apperances;
}

console.log(wordCount('The quick brown fox', 'fox'));
console.log(wordCount('aa, bb, cc, dd, aa', 'aa'));



/* 9 Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs"*/

function hideEmail(email) {
  var newString = "";
  var newString1 = "";
  var p = "@";

  for (var i = 0; i < email.length; i++) {
    if (email[i] === p) {
      var index = i;
    }
  }
  for (var j = 0; j < email.length; j++) {
    if (j < 3) {
      newString += email[j];

    } else if (j > index - 1) {
      newString1 += email[j];
    }
  }
  return newString + "..." + newString1;
}

var res = hideEmail("maaachak@gmail.com");
console.log(res);

/*10. Write a program to find the most frequent item of an array.
[3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]
*/


function mostFrequentEl(arr) {
  var el = [],
    elMax = 1,
    mostFrequent = false;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        el[el.length] = arr[i];
      }
      if (el.length > elMax) {
        elMax = el.length;
        mostFrequent = arr[i];
      }
    }
    el = [];
  }
  return mostFrequent;
}
console.log(mostFrequentEl([3, 7, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
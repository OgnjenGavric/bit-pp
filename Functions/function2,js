/* 
1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false

"My random string"
*/

function isString(a) {
  return typeof a === "string";
}

var res = isString("My random string");
console.log(res);



// 2. Write a function to check whether a string is blank or not.
// "My random string" false
// " " true
// 12 -> false
// false -> false

function isBlank(a) {
  return a === "";
}
var res = isBlank("");
console.log(res);

/*3. Write a function that concatenates a given string n times (default is 1).
"Ha" ->; "Ha";
"Ha", 3 -> "HaHaHa";
*/

function concatsString(string, n) {
  var res = "";
  for (var i = 0; i < n; i++) {
    res += string;
  }
  return res;
}

var result = concatsString("Ha", 3);
console.log(result);

/* 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n"; ->; 2
*/

function lettersCount(string, a) {
  var res = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === a) {
      res += string[i];
    }
  }
  return res.length;
}

var result = lettersCount("My random string", "n");
console.log(result);

/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.
*/

function firstOccurrence(string, a) {

  for (var i = 0; i < string.length; i++) {
    if (string[i] === a) {
      return i + 1;
    }

  }
  return -1;
}

var result = firstOccurrence("Character", "C");
console.log(result);

/*6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.
*/
function lastOccurrence(string, a) {
  for (var i = string.length - 1; i > 0; i--) {
    if (string[i] === a) {
      return i + 1;
    }

  }
  return -1;
}

var result = lastOccurrence("Character", "c");
console.log(result);

/* 7.Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
"My random string" -> ["M", "y", null, "R", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/

function stringToArray(string) {
  var arr = [];

  for (var i = 0; i < string.length; i++) {
    arr[i] = string[i];
    if (string[i] === " ") {
      arr[i] = "null";
    }
  }
  return arr;
}

var result = stringToArray("My random string");
console.log(result);

/* 8.Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/

function isPrime(a) {
  if (a === 1) {
    return false;
  } else if (a === 2) {
    return true;
  } else {
    for (var i = 2; i < a; i++) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  }
}
var res = isPrime(35);
console.log(res);

/* 9.Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
"My random string", "_" "My_random_string";
"My random string", "+"; -> "My_random_string"
"My_random_string" -> "My_random_string"*/


function replaceSpace(string, a) {
  var result = [];

  var newString = "";
  if (typeof a === 'undefined') {
    a = "-";
  }
  for (var i = 0; i < string.length; i++) {
    result[i] = string[i];

    if (string[i] === " ") {
      result[i] = a;

    }
    newString += result[i];
  }
  return newString;
}

var res = replaceSpace("My random string", "?");
console.log(res);


/*10.Write a function to get the first n characters and add “...” at the end of newly created string.
*/

function firstandAdd(string, n) {
  var newString = "";
  for (i = 0; i < n; i++) {
    newString += string[i];
  }
  newString += "...";
  return newString;
}
var res = firstandAdd("String", 3);
console.log(res);

/*11.Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] ->; [1, 21, 42, 1000]
*/

function stringToNumber(arr) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    var convert = parseFloat(arr[i]);
    if (isFinite(convert)) {
      res[res.length] = convert;
    }
  }
  return res;
}

var result = stringToNumber(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(result);

/*12.Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.
*/
function YearsLeftToPension(yearOfBirth, currentYear, gender) {

  if (gender === "m") {
    res = 65 - (currentYear - yearOfBirth);
    if (res <= 0) {
      return "already retired";
    }
  } else if (gender === "w") {
    res = 60 - (currentYear - yearOfBirth);
    if (res <= 0) {
      return "already retired";
    }
  }
  return res;
}
var result = YearsLeftToPension(1968, 2021, "w");
console.log(result);

/*13.Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th*/

function humanizeNumber(a) {

  if (a % 100 >= 11 && a % 100 <= 13) {
    res = a + "th";
  }
  switch (true) {
    case (a % 10 === 1):
      res = a + "st";
      break;
    case (a % 10 === 2):
      res = a + "nd";
      break;
    case (a % 10 === 3):
      res = a + "rd";
      break;
    default:
      res = a + "th";
      break;
  }
  return res;
}

var result = humanizeNumber(51);
console.log(result);
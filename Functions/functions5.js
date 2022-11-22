/*1.
Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/
function minMaxSwitch(arr) {
  var min = arr[0];
  var indexmin = 0;
  var max = arr[0];
  var indexmax = 0;

  for (var i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] < min) {
      min = arr[i];
      indexmin = i;
    } else if (i === 0 || arr[i] > max) {
      max = arr[i];
      indexmax = i;
    }
  }
  arr[indexmin] = max;
  arr[indexmax] = min;
  return arr;
}
console.log(minMaxSwitch([3, 500, 12, 149, 53, 414, 1, 19]));

/*2. Use the following array to make a new one by dividing its values by two and adding 5. If
a given elements value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function divide2AndAdd5(arr) {
  var newArray = [];
  var newElement = 0;
  for (var i = 0; i < arr.length; i++) {
    newElement = arr[i] / 2 + 5;
    if (newElement === 0) {
      newElement = 20;
    }
    newArray[newArray.length] = newElement;
  }
  return newArray;
}
console.log(divide2AndAdd5([3, 500, -10, 149, 53, 414, 1, 19]));

/*3. Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display students names with their corresponding
grade. Use the following ranges:
51-60 -> 6,
61-70 ->; 7,
71-80 -> 8,
81-90 -> 9,
91-100 ->; 10.
Input:
["Micahel", "Anne", "Frank","Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99,
51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam.
*/
function studentGrades(students, points) {
  var newArray = [];
  var grade = 0;
  for (var i = 0; i < students.length || i < points.length; i++) {
    grade = points[i];
    switch (true) {
      case (points[i] >= 51 && points[i] < 60):
        grade = " and earned 6";
        break;
      case (points[i] > 61 && points[i] < 70):
        grade = " and earned 7";
        break;
      case (points[i] > 71 && points[i] < 80):
        grade = " and earned 8";
        break;
      case (points[i] > 81 && points[i] < 90):
        grade = " and earned 9";
        break;
      case (points[i] > 91 && points[i] < 100):
        grade = " and earned 10";
        break;
      default:
        grade = " and failed to completethe exam";
        break;
    }
    newArray[newArray.length] = students[i] + " acquired " + points[i] + " points" + grade;
  }
  return newArray;
}
console.log(studentGrades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));

/*
4. Sort a previously defined array. Place its sorted values into a new array whose
values are equivalent to the first arrays values multiplied by 2.
Input: [ 13, 11, 5, 6,15, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/

function sortArray(arr) {
  var temp = arr[0];
  var newArr = [];
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    newArr[newArr.length] = arr[i];
    res[i] = arr[i] * 2;
  }
  return res;
}
console.log(sortArray([13, 11, 15, 5, 6, 1, 8, 12]));

/*
(skip :))Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/

function sortArray2(arr) {
  var temp = arr[0];
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      newArr[i] = arr[j];
    }
  }
  return newArr;
}
console.log(sortArray2([13, 11, 15, 5, 6, 1, 8, 12]));


/*6.Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

function addEvenSubstractOdd(a, b) {
  var sum1 = 0;
  var sum2 = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum1 += i;
    } else if (i % 2 !== 0 && i <= 500) {
      sum2 += i;
    }
  }
  return ((sum1 - sum2) * 12.5);
}
console.log(addEvenSubstractOdd(1, 1000));

/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
letters) in the array and create a new string from them. Print it out in the console.
Input: ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]
Output: AnStJoJoDaMa
*/

function createNewString(arr, n) {
  var newEl = "";
  var final = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      for (var j = 0; j < arr[i].length, j < n; j++) {
        if (n > arr[i].length) {
          return "error";
        }
        newEl = arr[i];
        final += newEl[j];
      }
    }
  }
  return final;
}
console.log(createNewString(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"], 2));

/*8.Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/

function reverse(string) {
  var newString = "";
  for (var i = string.length - 1; i > -1; i--) {
    newString += string[i];
  }
  return newString;
}
console.log(reverse("Belgrade Institute of Technology"));

// version 2. 

function reverseString(string) {
  var newArr = [];
  var reverse = "";
  for (var i = 0; i < string.length; i++) {
    newArr[newArr.length] = string[i];
  }
  for (start = 0, end = newArr.length - 1; start < newArr.length, end > 0, start <= end; start++, end--) {
    var temp = newArr[start];
    newArr[start] = newArr[end];
    newArr[end] = temp;
  }
  for (var i = 0; i < newArr.length; i++) {
    reverse += newArr[i];
  }
  return reverse;
}
console.log(reverseString("Belgrade Institute of Technology"));

/*9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don`t display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/

function numCombinations(a, b) {
  var res = "";
  for (var i = 1; i <= (b - a) + 1; i++) {
    for (var j = 1; j <= (b - a) + 1; j++) {
      if (i !== j) {
        res = console.log(i + "," + j);
      }
    }
  }
  return res + "numer of combinations: " + b * (b - a);
}
console.log(numCombinations(1, 5));

/*10. Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false
*/

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
var res = isPrime(17);
console.log(res);

/*11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true
*/

function isPalindrome(string) {
  for (var i = 0, j = string.length - 1; i < string.length, j >= 0; i++, j--) {
    return string[i] === string[j];
  }
}
console.log(isPalindrome("a nut for a jar of tuna"));

/*12. Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9
*/

function greatestDivider(a, b) {
  var max = a > b ? a : b;
  var min = a < b ? a : b;
  for (var i = max; i > 0; i--) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
}
console.log(greatestDivider(192, 42));
console.log(greatestDivider(81, 9));
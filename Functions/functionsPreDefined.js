/*1.Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1" , "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/

function arrStrToArrNum(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (isFinite(parseFloat(arr[i]))) {
      res[res.length] = parseFloat(arr[i]);
    }
  }
  return res;
}
console.log(arrStrToArrNum(["1", "21", undefined, "42", "1e+3", Infinity]));

/*2.Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: “015false-2247”
*/

function arrToStringFiltered(arr) {
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      if (isFinite(arr[i])) {
        str += arr[i];
      }
    }
  }
  return str;
}
console.log(arrToStringFiltered([NaN, 0, 15, false, -22, "", undefined, 47, null]));

/*3.Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: [15, -22, 47]
*/

function filterOutFalsy(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}
console.log(filterOutFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]));

/* 4.Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 3
*/

function numOfInteger(arr) {
  var newSome = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      if (arr[i] === parseInt(arr[i], 10)) {
        newSome[newSome.length] = arr[i];
      }
    }
  }
  return newSome.length;
}
console.log(numOfInteger([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));

/* 5.Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 2
*/

function numOfFloat(arr) {
  var sum = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      if (arr[i] != parseInt(arr[i], 10)) {
        sum[sum.length] = arr[i];
      }
    }
  }
  return sum.length;
}
console.log(numOfFloat([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
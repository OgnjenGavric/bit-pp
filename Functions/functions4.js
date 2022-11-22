/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

function isInArray(arr, e) {
  for (var i = 0; i < arr.length; i++) {
    if (i === e) {
      return "yes";
    }
  }
  return "no";
}

console.log(isInArray([5, -4.2, 3, 7], 4));

/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function multiplePositive(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] *= 2;
    }
    newArr[i] = arr[i];
  }
  return newArr;
}
console.log(multiplePositive([-3, 11, 5, 3.4, -8]));

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function findMin(arr) {
  var min = 0;
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  return min + " " + index;
}
console.log(findMin([4, 2, 2, -1, 6]));

/*4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

function nextMin(arr) {
  var min = 0;
  var min2 = 0;
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      min = arr[i];
    } else if (arr[i] < min) {
      min2 = min;
      min = arr[i];
    }
  }
  return min2;
}

console.log(nextMin([4, 2, 2, -1, 6]));

/*5.Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

function sumPositive(arr) {
  var res = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      res += arr[i];
    }
  }
  return res;
}
console.log(sumPositive([3, 11, -5, -3, 2]));

/*6.Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/
function isSymmetric(arr) {
  for (var i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] === arr[j]) {
      return "The array is symmetric";
    }
  }
  return "The array isn’t symmetric";
}
console.log(isSymmetric([2, 2, 2, 2]));

/*7.Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function intertwine(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length || i < arr2.length; i++) {
    newArr[newArr.length] = arr1[i];
    newArr[newArr.length] = arr2[i];
  }
  return newArr;
}
console.log(intertwine([4, 5, 6, 2], [3, 8, 11, 9]));

/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatenate(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    newArr[newArr.length] = arr1[i];
  }
  for (var j = 0; j < arr2.length; j++) {
    newArr[newArr.length] = arr2[j];
  }
  return newArr;
}
console.log(concatenate([4, 5, 6, 2], [3, 8, 11, 9]));

/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deleteElement(arr, e) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== e) {
      newArray[newArray.length] = arr[i];
    }
  }
  return newArray;
}
console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));


/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
function insertElement(arr, el, pos) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (pos > arr.length) {
      return "error";
    } else if (i === pos) {
      newArr[i] = el;
    }
    newArr[newArr.length] = arr[i];
  }
  return newArr;
}
console.log(insertElement([2, -2, 33, 12, 5, 8], 78, 3));

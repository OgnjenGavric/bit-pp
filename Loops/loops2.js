
// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no
var e = 5;
var arrayA = [5, -4.2, 18, 7];
var result = "No";
for (var i = 0; i < arrayA.length; i++) {
  if (arrayA[i] === e) {
    result = "Yes";
    break;
  }
}

console.log(result);

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var arrayB = [-3, 11, 5, 3.4, -8];
var resultArray = [];
for (var i = 0; i < arrayB.length; i++) {
  if (arrayB[i] > 0) {
    resultArray[i] = arrayB[i] * 2;
  } else {
    resultArray[i] = arrayB[i];
  }
}
console.log(resultArray);

// 3. Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var arrayC = [4, 2, 2, -1, 6];
var smallestNum = arrayC[0];

for (var i = 0; i < arrayC.length; i++) {
  if (arrayC[i] < smallestNum) {
    smallestNum = arrayC[i];
  }
}
console.log(smallestNum, arrayC.indexOf(smallestNum));


// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2
var arrayD = [4, 2, 2, -1, 6];

var firstmin = arrayD[0];
var secmin = arrayD[0];

for (let i = 0; i < arrayD.length; i++) {
  if (arrayD[i] < firstmin) {
    secmin = firstmin;
    firstmin = arrayD[i];
  } else if (arrayD[i] < secmin) {
    secmin = arrayD[i];
  }
}

console.log("First min = " + firstmin);
console.log("Second min = " + secmin);



// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
var arrayE = [3, 11, -5, -3, 2];
var sumPositiveNum = 0;
for (var i = 0; i < arrayE.length; i++) {
  if (arrayE[i] > 0) {
    sumPositiveNum += arrayE[i];
  }
}
console.log(sumPositiveNum);

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.
var arrayF = [2, 4, -2, 7, -2, 4, 2];
var arrayG = [];

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
var arrayH = [];

// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
var arrayI = [4, 5, 6, 2];
var arrayJ = [3, 8, 11, 9];
var concatenateArray = arrayI.concat(arrayJ);

console.log(concatenateArray);

// 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]
var arrayK = [4, 6, 2, 8, 2, 2];
var arrayWithoutE = [];

for (let i = 0; i < arrayK.length; i++) {
  if (arrayK[i] !== 2) {
    arrayWithoutE.push(arrayK[i]);
  }
}

console.log(arrayWithoutE);

// 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]


var element = 78;
var position = 3;
var arrayLength = [2, -2, 33, 12, 5, 8];
var resultArrayPosition = [];

for (var i = 0; i < arrayLength.length; i++) {
  if (position > arrayLength.length) {
    console.log('Error');
    break;
  } else if (i === position) {
    resultArrayPosition[resultArrayPosition.length] = element;
  } else {
    resultArrayPosition[resultArrayPosition.length] = arrayLength[i];
  }
}
console.log(resultArrayPosition);
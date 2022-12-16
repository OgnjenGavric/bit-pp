// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.;
// function countVowels(string) {
//   var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],
//     count = 0;
//   for (var i = 0; i < string.length; i++) {
//     for (var j = 0; j < vowels.length; j++)
//       if (string[i] === vowels[j]) {
//         count++;
//       }
//   }
//   return count;
// }
function countVowels(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
      count++;
    }
  }
  return count;
}
var countV = countVowels("Write a function to count vowels");
console.log(countV);

// 2. Write a function that combines two arrays by alternatingly taking elements. [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function combineArrays(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}
console.log(combineArrays(["a", "b", "c"], [1, 2, 3]));

// Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
function rotateArray(arr, num) {
  var result = [];
  for (var i = num; i < arr.length; i++) {
    result.push(arr[i]);
  }
  for (var j = 0; j < num; j++) {
    result.push(arr[j]);
  }
  return result;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));


// 4. Write a function that takes a number and returns array of its digits.
function getDigits(num) {
  var result = [];
  var str = num.toString();
  for (var i = 0; i < str.length; i++) {
    result.push(parseInt(str[i]));
  }
  return result;
}
console.log(getDigits(999));

// 5. Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable() {
  var result = "";
  for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 12; j++) {
      result += i * j + " ";
    }
    result += "\n";
  }
  return result;
}

console.log(multiplicationTable(12));

// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.
function convertToFahrenheit(temp) {
  return (temp * 9 / 5) + 32;
}

console.log(convertToFahrenheit(5));

// 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([0, 3, 8, 9, 4, 7, "s", 2]));

// 8. Write a function to find the maximum and minimum elements. Function returns an array.

function findMaxAndMin(arr) {
  var max = arr[0];
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}

console.log(findMaxAndMin([0, 3, 8, 9, 4, 7, 2]));


// 9. Write a function to find the median element of array.

function findMedian(arr) {
  var sorted = arr.sort(function (a, b) {
    return a - b;
  });
  if (sorted.length % 2 === 0) {
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  } else {
    return sorted[Math.floor(sorted.length / 2)];
  }
}

console.log(findMedian([0, 3, 8, 9, 4, 7, 23]));

// 10. Write a function to find the element that occurs most frequently.

function findMostFrequent(arr) {
  var max = 0;
  var result = arr[0];
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      result = arr[i];
    }
  }
  return result;
}

console.log(findMostFrequent(["test", "test", true, true, true, 2, 33, true, 33, true, 2, 4, 9, 33]));

// 11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

function findFirstMiddleLast(arr) {
  if (arr.length === 0) {
    return arr;
  } else if (arr.length % 2 === 0) {
    return [arr[0], arr[arr.length - 1]];
  } else {
    return [arr[0], arr[Math.floor(arr.length / 2)], arr[arr.length - 1]];
  }
}
console.log(findFirstMiddleLast(["test", "test", true, true, true, 2, 33, true, 33, true, 2, 4, 9, 33]));

// 12. Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
var inputAverage = [1, 2, 3, 4, 5, 6];

// function findAverage() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum / arguments.length;
// }
// console.log(findAverage(inputAverage));

function findAverage2(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(findAverage2(inputAverage));

// 13. Write a function to find all the numbers greater than the average.

function findNumbersGreaterThanAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var average = sum / arr.length;
  var result = [];
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > average) {
      result.push(arr[j]);
    }
  }
  return result;
}

console.log(findNumbersGreaterThanAverage([1, 2, 3, 4, 5, 6]));

// 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// ● Starvation: less than 15
// ● Anorexic: less than 17.5
// ● Underweight: less than 18.5
// ● Ideal: greater than or equal to 18.5 but less than 25
// ● Overweight: greater than or equal to 25 but less than 30
// ● Obese: greater than or equal to 30 but less than 40
// ● Morbidly obese: greater than or equal to 40

function computeBMI(weight, height) {
  var BMI = weight / (height * height);
  var category;
  switch (true) {
    case (BMI < 15):
      category = "Starvation";
      break;
    case (BMI > 15 && BMI < 17.5):
      category = "Anorexic";
      break;
    case (BMI > 17.5 && BMI < 18.5):
      category = "Underweight";
      break;
    case (BMI >= 18.5 && BMI < 25):
      category = "Ideal";
      break;
    case (BMI >= 25 && BMI < 30):
      category = "Overweight";
      break;
    case (BMI >= 30 && BMI < 40):
      category = "Obese";
      break;
    default:
      category = "Morbidly obese";
      break;
  }
  return category;
}
console.log(computeBMI(80, 1.82));

// 15. Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.: For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
/*
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/
function printInFrame(arr) {
  var maxLength = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  var result = "";
  for (var j = 0; j < maxLength + 4; j++) {
    result += "*";
  }
  result += "\n";
  for (var k = 0; k < arr.length; k++) {
    result += "* " + arr[k];
    for (var l = 0; l < maxLength - arr[k].length; l++) {
      result += " ";
    }
    result += " *\n";
  }
  for (var m = 0; m < maxLength + 4; m++) {
    result += "*";
  }
  return result;
}
console.log(printInFrame(["Hello", "World", "in", "a", "frame", "test"]));
// 1. Write a function that checks if a given string contains digit 5. Input: “1b895abd” Output: true

function containsDigit5(string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '5') {
      return true;
    }
  }
  return false;
}
console.log(containsDigit5('1b895abd'));

/// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. Input: “Programming in JS is super interesting!” Output: “Programming in ** is super interesting!”

function replaceJS(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'J' && string[i + 1] === 'S') {
      newString += '**';
      i++;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
console.log(replaceJS('Programming in JS is super interesting!'));

// 3. Write a function that inserts a given character on a given position in the string. Input: “Goo morning”, 4, ‘d’ Output: “Good morning”

function insertCharacter(string, position, character) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === position - 1) {
      newString += character;
    }
    newString += string[i];
  }
  return newString;
}
console.log(insertCharacter('Goo morning', 4, 'd'));


// 4. Write a function that deletes a character from the given position in the string. Input: “Goodd morning!”, 3 Output: “Good morning!”

function deleteCharacter(string, position) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === position) {
      continue;
    }
    newString += string[i];
  }
  return newString;
}
console.log(deleteCharacter('Goodd morning!', 3));

// 5. Write a function that deletes every second element of the given array. Input: [3, 5, 1, 8, 90, -4, 23, 1, 67] Output: [3, 1, 90, 23, 67]

function deleteEverySecondElement(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(deleteEverySecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67]));

// 6. Write a function that replaces the elements of the given array between two positions with their doubled values. Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
function doubleBetween(array, start, end) {
  for (var i = start; i <= end; i++) {
    array[i] *= 2;
  }
  return array;
}
console.log(doubleBetween([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

// 7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3] Output: true

function containsAll(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    var found = false;
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
}
console.log(containsAll([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

// 8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’] Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

function sortByA(array) {
  array.sort(function (a, b) {
    var aCount = 0;
    var bCount = 0;
    for (var i = 0; i < a.length; i++) {
      if (a[i] === 'a' || a[i] === 'A') {
        aCount++;
      }
    }
    for (var i = 0; i < b.length; i++) {
      if (b[i] === 'a' || b[i] === 'A') {
        bCount++;
      }
    }
    return aCount - bCount;
  });
  return array;
}
console.log(sortByA(['apple', 'tea', 'amazing', 'morning', 'JavaScript']));

// 9. Write a function that prints out the date of the next day. Output: 25. 10. 2018.

function nextDay() {
  var date = new Date();
  date.setDate(date.getDate() + 1);
  console.log(date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.');
}
nextDay();

// 10. Write a function that prints out the date of the previous day. Output: 23. 10. 2018.

function previousDay() {
  var date = new Date();
  date.setDate(date.getDate() - 1);
  console.log(date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.');
}
previousDay();

// 11. Write a function that prints out an array of the numbers aligned from the right side. 
/* Input: [78, 111, 4, 4321] 
Output:
78;
111;
4;
4321; */

function alignRight(array) {
  var maxLength = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].toString().length > maxLength) {
      maxLength = array[i].toString().length;
    }
  }
  for (var i = 0; i < array.length; i++) {
    var string = array[i].toString();
    for (var j = 0; j < maxLength - string.length; j++) {
      string = ' ' + string;
    }
    console.log(string);
  }
}
alignRight([78, 111, 4, 4321]);
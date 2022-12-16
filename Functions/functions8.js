// 1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. Input array: [4, 5, 11, 9] Output array: [ 9, 5, 11, 4]

var array = [4, 5, 11, 9];
(function (array) {
  if (array.length < 2) {
    return;
  }
  var first = array[0];
  var last = array[array.length - 1];
  array[0] = last;
  array[array.length - 1] = first;
  console.log(array);
})(array);

// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b Input: 4 5 Output: 20

var a = 4;
var b = 5;
(function (a, b) {
  console.log(a * b);
})(a, b);

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. Input: prograMming. Output: progra**ing, 2

var string = 'prograMming';
(function (string) {
  var count = 0;
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'm' || string[i] === 'M') {
      newString += '*';
      count++;
    } else {
      newString += string[i];
    }
  }
  console.log(newString, count);
})(string);

// 4. Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. Input: pera peric. Output: pera.peric@gmail.com

function email(name, surname) {
  return function () {
    console.log(name + '.' + surname + '@gmail.com');
  };
}
var emailPera = email('pera', 'peric');
emailPera();

// 5. Write a function that returns a function that calculates a decimal value of the given octal number. Input: 034 Output: 28

function octalToDecimal(octal) {
  return function () {
    var decimal = 0;
    var power = 0;
    for (var i = octal.length - 1; i >= 0; i--) {
      decimal += octal[i] * Math.pow(8, power);
      power++;
    }
    console.log(decimal);
  };
}
var octalToDecimalRes = octalToDecimal('034');
octalToDecimalRes();

// 6. Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. Input: JSGuru. Output: Your password is invalid!

function checkPassword(password, successCallback, errorCallback) {
  if (password.length < 6) {
    errorCallback();
  } else {
    var hasDigit = false;
    for (var i = 0; i < password.length; i++) {
      if (!isNaN(password[i])) {
        hasDigit = true;
        break;
      }
    }
    if (hasDigit) {
      successCallback();
    } else {
      errorCallback();
    }
  }
}
checkPassword('JSGuru123', function () {
  console.log('Your password is cool!');
}, function () {
  console.log('Your password is invalid!');
});

// 7. Write a function that filters elements of the given array so that they satisfy a condition given by the callback function. Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd. Output: [11, 9, 3]

function filter(array, callback) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}
filter([2, 8, 11, 4, 9, 3], function (number) {
  return number % 2 !== 0;
});
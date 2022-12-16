// Example 0

typeof console.log; // function
(function () {
  return console.log;
})()('Boo!'); // Boo

// Example 1

function multiply(a, b) {
  var mResult = a * b;
  return function (a, b) {
    return mResult + a + b;
  };
}
var output = multiply(3, 4);
console.log(output); //[Function (anonymous)]

// Example 2

function multiply(a, b) {
  var mResult = a * b;
  return function (a, b) {
    return mResult + a + b;
  };
}
var output = multiply(3, 4)(5, 5);
console.log(output); // 22

// Example 3

print("This might work or not?");

var print = (function () {

  return console.log; // return console.log;

})(); // TypeError: print is not a function


// Example 4

var print = (function () {

  return console.log; // return console.log;

})();

print("This might work or not?"); // This might work or not?

// Example 5

var input = [1, undefined, 2, NaN, 3, 4, 5, "six"];
var output = transformArray(input, function (param) {
  return param + "";
});
console.log(output);

function transformArray(array, action) {
  var result = [];
  for (var index = 0; index < array.length; index++) {
    var element = array[index];
    result[index] = action(element);
  }
  return result;
}
// [ '1', 'undefined', '2', 'NaN', '3', '4', '5', 'six' ]

// Example 6

var PI = 3.1;
function circleSurface(radius) {
  var result = radius * radius * PI;
  var PI = 3.14159;
  return result;
}
var output = circleSurface(5);
console.log(output); // NaN

// Example 7

function circleCalc(radius, calculation) {
  var result = calculation(radius);
  return result;
}
var output = circleCalc(7, function (r) {
  var PI = 3.14159;
  return 2 * r * PI;
});
console.log(output); // 43.98226

// Example 8

var input = ["one", "1e3", "10e-3", "32", "a15", "12,1"];
function transformArray(array, action) {
  var result = [];
  for (var index = 0; index < array.length; index++) {
    var element = array[index];
    result[index] = action(element);
  }
  return result;
}
var output = transformArray(input, parseFloat);
console.log(output);
output = transformArray(input, parseInt);
console.log(output);

//[ NaN, 1000, 0.01, 32, NaN, 12 ]
// [ NaN, 1, 10, 32, NaN, 12 ]

// Example 10

var cubeVolume = function (a) {
  return a * a * a;
};
function cubeCalculation(a, calc) {
  return calc(a);
}
output = cubeCalculation(10, cubeVolume(6));
console.log(output); // calc is not a function

// Example 11

function cubeCalculation(a, calc) {
  return calc(a);
}
var output = cubeCalculation(10, function (a) {
  6 * a * a;
});
console.log(output); // undefined

// Example 12

function cubeCalculation(a, calc) {
  return calc(a);
}
var output = cubeCalculation(10, function (a) {
  return 6 * a * a;
});
console.log(output); // 600

// Example 13

function saySomething(msg1) {
  return function (msg2) {
    var output = msg1 + " " + msg2;
    return function () {
      output += "!";
      console.log(output);
    };
  };
}
("Hi")("there"); // 

// Example 13

function saySomething(msg1) {
  function message(msg2) {
    var output = msg1 + " " + msg2;
    var result = function () {
      output += "!";
      console.log(output);
    };
    return result;
  }
  return message;
}
saySomething("Hi")("there")(); // Hi there!

// Example 14

var myArr = [];
var hi = function () {
  return "Hi";
};
myArr[0] = hi;
myArr[0]();
var firstElement = myArr[0];
typeof firstElement;
firstElement(); // 

console.log(firstElement())





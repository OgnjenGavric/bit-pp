// Falsy values
console.log("" || 0 || null || undefined || NaN || false);

console.log("____________________");
// Variable declaration and initialization
// Create several variables using different letter cases and beginning characters. 
var $a = 10;

var thisIsAVariable = "This is a variable";

var _and_this_too = true;

var mix12three = NaN;

// Save a string (text) describing your current mood in a variable and print it out in console.
var javaScriptIsGreat = "Javascript is a great programming language to learn.";
console.log(javaScriptIsGreat);

// Arithmetic operators
var expression1 = 3-2-31;
console.log(expression1); // 👉️ -30

var expression2 = 3*5-7/3;
console.log(expression2); // 12.666666666666666

var expression3 = 4/2-1.14*3;
console.log(expression3); // 👉️ -1.42

// How many grams weight 1.2kg of bananas?
var bannanaWeightKg = 1.2;
var bannanaWeight = bannanaWeightKg * 1000;
console.log(bannanaWeight); // 👉️ 1200

// How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What about Tom who is being late half an hour? It is hard to be on time these days…
var minutesAna = 5;
var secondsLateAna = minutesAna * 60;
console.log(secondsLateAna); // 👉️ 300

var minutesTom = 30;
var secondsLateTom = minutesTom * 60;
console.log(secondsLateTom); // 👉️ 1800

// How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it?
var memoryGb = 4;
var memoryMb = memoryGb * 1000;
console.log(memoryMb); // 👉️ 4000
var memoryKb = memoryMb / 98;
console.log(memoryKb); // 👉️ 40


// Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?
// a *= 2;
// b += 3;
// c /= 5;
// d -= 7; 

// Create the following variables:
// - a variable containing your name,
// - a variable containing your age,
// - a variable describing if you have a cat or not.
var myName = "Ognjen"
var myAge = 45;
var doIHaveACat = false;
console.log(myName, myAge, doIHaveACat); // 👉️ Ognjen 45 false
console.log(typeof myName, typeof myAge, typeof doIHaveACat); // 👉️ string number boolean

// Check which type are these values:
// - “number”
// - true
// - null
// - “false”
// - 56
console.log(typeof "number", typeof true, typeof null, typeof "false", typeof 56); // string boolean object string number

// Logical operators
// Check how good you are at guessing the Boolean equivalent of different values using the console. Do you remember how to check for a Boolean equivalent of a value?
console.log(typeof true); // 👉️ "boolean"
console.log(typeof false); // 👉️ "boolean"
console.log(typeof function () {}); // 👉️ "function"
console.log(typeof null); // 👉️ "object"
console.log(typeof []); // 👉️ "object"
console.log(typeof {}); // 👉️ "object"
console.log(typeof ''); // 👉️ "string"
console.log(typeof 0); // 👉️ "number"

var bool = true;

if (bool === true || bool === false) {
  console.log("✅ type is boolean");
} else {
  console.log("⛔️ type is NOT boolean");
}

// If the variable age stores the information about user’s age, how we can check whether it
// contains a correct value? Write expressions for checking:
// ● Is age negative value
// ● Is age greater than 120
var userAge = 121;

if(userAge < 0){
  console.log("Is age negative value.");
} else if(userAge > 120) {
  console.log("Is age greater than 120.");
} else {
  console.log("That is correct value.");
}

// Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
// we store the current speed value in the variable speed. Write an expression which will check if
// we are driving drive safely or not? (true if we are driving safe and false if not)
var mySpeed = 70;

if(mySpeed > 60 && mySpeed < 120){
  console.log("✅ We are driving drive safely");
} else {
  console.log("⛔️ We are not driving safely.");
}
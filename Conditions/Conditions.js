// Write a program that compares two numbers and display the larger. Result should be displayed in the console.
var numbers1 = 8;
var numbers2 = 6;

if (numbers1 > numbers2) {
  console.log("numbers1 is larger than numbers2");
} else {
  console.log("numbers1 is smaller than numbers2");
}

// Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.
var numberIsDivisible = 10;

if (numberIsDivisible % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
var x = 3;
var y = -7;
var z = 2;
if (x > 0 && y > 0 && z > 0) {
  console.log("The sign is +");
} else if ( x < 0 && y < 0 && z < 0) {
  console.log("The sign is - ");
} else if (x > 0 && y<0 && z < 0) {
  console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}

// Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var f = -1;

if (a > b && a > c && a > d && a > f) {
    console.log(a);
} else if (b > a && b > c && b > d && b > f) {
    console.log(b);
} else if (c > a && c > b && c > d && c > f) {
    console.log(c);
} else if (d > a && d > c && d > b && d > f) {
    console.log(d);
} else {
    console.log(f);
}

// Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
x= 0;
y=-1;
z= 4;
if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x>z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x>y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
} 

// Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10 
// Sample input: 7
var num1 = "7";

if ((typeof num1 == 'number') && (num1 % 2 === 0)) {
console.log(num1 + " is a number and " + num1 + " / 2 ✅");
} else {
console.log(num1 + " is not a number or / 2 ⛔️");
}

// Write a program that compares two numbers and displays the larger. Display the result in the console.
var xNum = 10;
var yNum = 20;

if(xNum === yNum) {
  console.log("Numbers are the same");
} else if (xNum > yNum){
  console.log("Number xNum are is larger then yNum");
} else {
  console.log("Number xNum are is smaller then yNum");
}

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

var cTemp = 33;
var cToFahr = (9*cTemp/5) + 32;
console.log(cToFahr);

// JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
var nNumber = 14;
if (nNumber <= 13) {
  console.log("Number are the same");
} else if((nNumber - 13) * 2) {
  console.log("Double difference between that nNumber and 13");
}
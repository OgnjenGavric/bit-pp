// Write an array of months in a year. Using console.log display June, October and January from the array.
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(months[5], months[9], months[0]);

// Write an arrays of days in a week. Using console.log display Sunday from the array.
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days[6]);

// Print all negative elements from the array [2, -4, 5, -2, -11].
var printNegativeNum = [2, -4, 5, -2, -11];
console.log(printNegativeNum[1], printNegativeNum[3],  printNegativeNum[4]);

// Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9].
var nums = [5, 15, -5, 20, 12, 18, 72, 14, 9];
const printNumDivisibileBy3 = nums.filter((num) => num % 3 === 0);
console.log(printNumDivisibileBy3);
// if (nums[1] % 3 === 0) {
//   console.log(nums[1] + " divisible by 3");
// } else if {}


//What is the index of number 24 in the following array? 
// [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
var arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log("Index of number " + arr[0][3] + " is arr[0][3]");

// Using console.log:
// ● Display the 3rd element of the array,
// ● Display the 2nd element of the 3rd element.

// 1. Write a functional expression that duplicates each element of a given array. Input: [2, 4, 7, 11, -2, 1] Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var arr = [2, 4, 7, 11, -2, 1];
var newArr = arr.map(function (x) {
  return x * 2;
});
console.log(newArr);

function duplicateArr(arr) {
  var newArr = [];
  arr.forEach(function (el) {
    newArr.push(el, el);
  });
  return newArr;
}

console.log(duplicateArr([2, 4, 7, 11, -2, 1]));

// 2. Write a functional expression that removes all duplicates in a given array, with foreach. Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13] Output: [1, 4, 8, 9, 12, 13]

/* 
var arr2 = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var newArr = arr2.filter(function (x, i, a) {
  return a.indexOf(x) === i;
});
console.log(newArr); 
*/

var arr2 = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var newArr = [];
arr2.forEach(function (x) {
  if (newArr.indexOf(x) === -1) {
    newArr.push(x);
  }
});
console.log(newArr);

// 3. 
// a) Write a function that checks if a given array has odd number of elements. Input: [1, 2, 9, 2, 1] Output: true

var arr3 = [1, 2, 9, 2, 1];
var isOdd = function (arr) {
  return arr3.length % 2 !== 0;
};
console.log(isOdd(arr3));

// b) Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11] Output: 4

var arr4 = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
var countLessThanMiddle = function (arr) {
  if (arr4.length % 2 === 0) {
    return "Error: Array has even number of elements.";
  }
  var middle = arr[Math.floor(arr.length / 2)];
  var count = 0;
  arr4.forEach(function (x) {
    if (x < middle) {
      count++;
    }
  });
  return count;
};
console.log(countLessThanMiddle(arr4));

// 4. Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array. Input: [1, 4, -2, 11, 8, 1, -2, 3] Output: { minValue: -2, minLastIndex: 6 }

var arr5 = [1, 4, -2, 11, 8, 1, -2, 3];
var findSmallest = function (arr) {
  var min = arr[0];
  var minIndex = 0;
  arr.forEach(function (x, i) {
    if (x < min) {
      min = x;
      minIndex = i;
    }
  });
  return {
    minValue: min,
    minLastIndex: minIndex
  };
};
console.log(findSmallest(arr5));

// 5. 
// a) Write a function that finds all the elements in a given array less than a given element. Input: [2, 3, 8, -2, 11, 4], 6 Output: [2, 3, -2, 4]

var arr6 = [2, 3, 8, -2, 11, 4];
var findLessThan = function (arr, num) {
  var newArr = [];
  arr.forEach(function (x) {
    if (x < num) {
      newArr.push(x);
    }
  });
  return newArr;
};
console.log(findLessThan(arr6, 6));

// b) Write a function that finds all the elements in a given array that start with the “pro”substring. The function should be case insensitive. Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] Output: [’Programming’, ‘product’]

var arr7 = ['JavaScript', 'Programming', 'fun', 'product'];
var findPro = function (arr) {
  var newArr = [];
  arr.forEach(function (x) {
    if (x.toLowerCase().indexOf('pro') === 0) {
      newArr.push(x);
    }
  });
  return newArr;
};
console.log(findPro(arr7));

// c) Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.

var arr8 = [2, 3, 8, -2, 11, 4];
var findLessThan = function (arr, num) {
  var newArr = [];
  arr.forEach(function (x) {
    if (x < num) {
      newArr.push(x);
    }
  });
  return newArr;
};
var filter = function (arr, callback) {
  return callback(arr, 5);
};
console.log(filter(arr8, findLessThan));

// 6.
// a) Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example, {name: ‘apples’, price: 100}, {name: ‘milk’, price: 80}, {name:’bananas’, price: 150}

var products = [{
  name: 'apples',
  price: 100
}, {
  name: 'milk',
  price: 80
}, {
  name: 'bananas',
  price: 150
}];

// b) Write a function that calculates the total price of your shopping list.

var totalPrice = function (arr) {
  var sum = 0;
  arr.forEach(function (x) {
    sum += x.price;
  });
  return sum;
};
console.log(totalPrice(products));

// c) Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.

var totalPrice = function (arr) {
  var sum = 0;
  arr.forEach(function (x) {
    sum += x.price;
  });
  return sum;
};
var averagePrice = function (arr) {
  return totalPrice(arr) / arr.length;
};
console.log(averagePrice(products).toFixed(3));

// d) Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.

var mostExpensive = function (arr) {
  var max = arr[0];
  arr.forEach(function (x) {
    if (x.price > max.price) {
      max = x;
    }
  });
  return max.name.toUpperCase();
};
console.log(mostExpensive(products));



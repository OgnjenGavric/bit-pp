// Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console.
// For input 1, output should be “Monday”.
var dayInWeek = "1";
switch (dayInWeek) {
  case "1":
      console.log("It is Monday!");
      break;
  case "2":
      console.log("It is Tuesday!");
      break;
  case "3":
      console.log("It is Wednesday!");
      break;
  case "4":
      console.log("It is Thursday!");
      break;
  case "5":
      console.log("It is Friday!");
      break;
  case "6":
      console.log("It is Saturday!");
      break;
  case "7":
      console.log("It is Sunday!");
      break;
  default:
      console.log("Invalid week day! ⛔️");
}

// Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.
var dayInWeek2 = "12";
switch (dayInWeek2) {
  case "1":
      console.log("Monday!");
      break;
  case "2":
      console.log("Tuesday!");
      break;
  case "3":
      console.log("Wednesday!");
      break;
  case "4":
      console.log("Thursday!");
      break;
  case "5":
      console.log("Friday!");
      break;
  case "6":
      console.log("Saturday!");
      break;
  case "7":
      console.log("Sunday!");
      break;
  default:
    console.log("Input must be a number between 1 and 7 ⛔️");
}

// Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.
var dayInWeek3 = "7";
switch (dayInWeek3) {
  case "1":
  case "2":
  case "3":
  case "4":
  case "5":
      console.log("It's weekday.");
      break;
  case "6":
  case "7":
      console.log("It's weekend.");
      break;
  default:
    console.log("Input must be a number between 1 and 7 ⛔️");
}

// Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12.
// For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.
var monthInYear = "13";
switch (monthInYear) {
  case "1":
      console.log("Jan!");
      break;
  case "2":
      console.log("Feb!");
      break;
  case "3":
      console.log("Mar!");
      break;
  case "4":
      console.log("Apr!");
      break;
  case "5":
      console.log("May!");
      break;
  case "6":
      console.log("Jun!");
      break;
  case "7":
      console.log("Jul!");
      break;
  case "8":
      console.log("Aug!");
      break;
  case "9":
      console.log("Sep!");
      break;
  case "10":
    console.log("Oct!");
    break;
  case "11":
    console.log("Nov!");
    break;
  case "12":
    console.log("Dec!");
    break;
  default:
    console.log("Input must be a number between 1 and 12 ⛔️");
}

// Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12.
var seasonInYear = "12";
switch (seasonInYear) {
  case "1":
  case "2":
      console.log("It's winter!");
      break;
  case "3":
  case "4":
  case "5":
      console.log("It's spring!");
      break;
  case "6":
  case "7":
  case "8":
      console.log("It's summer!");
      break;
  case "9":
  case "10":
  case "11":
    console.log("It's autumn!");
    break;
  case "12":
    console.log("It's winter!");
    break;
  default:
    console.log("Input must be a number between 1 and 12 ⛔️");
}

// Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job", B - "Pretty good", C - "Passed", D - "Not so good", F - "Falied". Input different from letters A-F outputs a message "Unknown grade".
var grade = "A";
switch (grade) {
  case "A":
      console.log("Good job ✅");
      break;
  case "B":
    console.log("Pretty good ✅");
    break;
  case "C":
    console.log("Passed ✅");
    break;
  case "D":
      console.log("Not so good.");
      break;
  case "F":
    console.log("Falied. ⛔️");
    break;
  default:
    console.log("Unknown grade ⛔️");
}

// Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message "Please choose a different city".
var cityNameAndCountries = "Tivat";
switch (cityNameAndCountries) {
  case "Beograd":
  case "Novi Sad":
  case "Nis":
      console.log("It's Serbia!");
      break;
  case "Banjaluka":
  case "Sarajevo":
  case "Mostar":
      console.log("It's Bosnia!");
      break;
  case "Tivat":
  case "Podgorica":
  case "Budva":
      console.log("It's Montenegro!");
      break;
  case "Zagreb":
  case "Split":
  case "Dubrovnik":
    console.log("It's Croatia!");
    break;
  case "Ljubljana":
  case "Maribor":
  case "Bled":
    console.log("It's Slovenia!");
    break;
  default:
    console.log("Please choose a different city ⛔️");
}

// Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!
"use strict";

/* 
Employees and Managers
1. Create constructor functions with properties representing the following:
○ Person: name, surname
○ Employee: inherits Person and has job and salary
○ Developer: inherits from Employee and has specialization
○ Manager: inherits from Employee and has department
2. All developers should inherit method:
○ getSpecialization which prints out the name of the specialization
3. All managers should inherit methods:
○ getDepartment which prints out the name of the department
○ changeDepartment which sets the department value to the given value
4. All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10% 
*/

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getData() {
    return this.name + " " + this.surname + " " + this.salary;
  }
  getSalary() {
    console.log(this.salary);
  }
  increaseSalary() {
    return this.salary + this.salary / 100 * 10;
  }
}

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }
  getSpecialization() {
    console.log(this.specialization);
  }
}

var test = new Developer("Marko", "Markovic", "Full-Stack", 4000, "JS");
console.log(test);
console.log(test.getData());
test.getSpecialization();

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }
  getDepartment() {
    console.log(this.department);
  }
  changeDepartment(value) {
    return this.department = value;
  }
}

/* 
Applications:
1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars
○ MobileApp: name, platforms, licence, stars 
2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React 
3. All mobile applications should inherit methods:
○ getData which prints out all the informations
○ forAndroid which checks if one of the platforms the application is developed for is Android
4. Both web and mobile applications should inherit methods:
○ isCCLicence which checks if the licence of the application is CC (Creative Commons)
○ like which increases the number of stars by one 
*/

class App {
  constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }
  getInfo() {
    return this.name + " " + this.licence + " " + this.stars;
  }
  isCCLicence() {
    if (this.licence === "CC") {
      //console.log("Licence of the application is Creative Commons");
      return "Licence of the application is Creative Commons";
    } else {
      //console.log("Licence of the application isn't Creative Commons");
      return "Licence of the application isn't Creative Commons";
    }
  }
  like() {
    //console.log(this.stars + 1);
    return this.stars + 1;
  }
}
/* 
var test = new App ("KFC", "BB", 3);
console.log(test);
test.getData();
console.log(test.isCCLicence());
console.log(test.like()); 
*/

class WebApp extends App {
  constructor(name, licence, stars, url, technologies) {
    super(name, licence, stars);
    this.url = url;
    this.technologies = technologies;
  }
  getData() {
    var date = super.getInfo();
    console.log(date + " " + this.url + " " + this.technologies);
  }
  reactBased() {
    return this.technologies === "React";
  }
  isCCLicence() {
    return super.isCCLicence();
  }
  like() {
    return super.like();
  }
}

class MobileApp extends App {
  constructor(name, licence, stars, platforms) {
    super(name, licence, stars);
    this.platforms = platforms;
  }
  getData() {
    var date = super.getInfo();
    console.log(date + " " + this.platforms);
  }
  forAndroid() {
    return this.platforms === "Android";
  }
  isCCLicence() {
    return super.isCCLicence();
  }
  like() {
    return super.like();
  }
}

var test = new MobileApp("KFC", "CC", 2, "Android");
console.log(test);
console.log(test.like());
console.log(test.isCCLicence());
test.getData();
function Student(name, surname) {
  this.name = name;
  this.surname = surname;
}

Student.prototype.getStudentData = function () {
  return this.name;
};

function Exam(subject, student, grade) {
  this.subject = subject;
  this.student = student;
  this.grade = grade;
}

Exam.prototype.getExamInfo = function () {
  return this.subject.getSubjectName() + " - " + this.student.getStudentData();
};

Exam.prototype.hasPassed = function () {
  return this.grade > 5;
};

Exam.prototype.getResult = function () {
  return this.hasPassed() ? "PASSED" : "FAILED";
};

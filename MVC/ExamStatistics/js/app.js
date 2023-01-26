"use strict";

var passedExams = 0;
var failedExams = 0;

document.getElementById("add-button").addEventListener("click", function () {
  var data = collectData();
  var errors = validateData(data);
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return;
  }
  var subject = new Subject(data.subject);
  var student = new Student(data.name);
  var exam = new Exam(subject, student, data.grade);
  if (exam.hasPassed()) {
    passedExams++;
  } else {
    failedExams++;
  }
  updateList(exam);
  updateStatistics(passedExams, failedExams);
});


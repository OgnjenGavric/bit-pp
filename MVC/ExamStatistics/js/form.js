function collectData() {
  var subject = document.getElementById("subject").value;
  var name = document.getElementById("name").value;
  var grade = document.getElementById("grade").value;
  return { subject: subject, name: name, grade: grade };
}

function validateData(data) {
  var errors = [];
  /* if (!data.name.match(/^[A-Z][a-z]+$/)) {
    errors.push("Invalid name format");
  }
  if (!data.surname.match(/^[A-Z][a-z]+$/)) {
    errors.push("Invalid surname format");
  } */
  if (isNaN(data.grade) || data.grade < 1 || data.grade > 10) {
    errors.push("Invalid grade format");
  }
  return errors;
}

function updateList(exam) {
  var list = document.getElementById("exam-list");
  var item = document.createElement("li");
  item.innerHTML = "<span>" + exam.getExamInfo() + "</span> - <span>" + (exam.hasPassed() ? "PASSED" : "FAILED") + "</span>";
  list.appendChild(item);
}

function updateStatistics(passed, failed) {
  var statistics = document.getElementById("statistics");

  statistics.innerHTML = "Passed: " + passed + " Failed: " + failed + " (" + (failed / (passed + failed) * 100).toFixed(2) + "%)";

}

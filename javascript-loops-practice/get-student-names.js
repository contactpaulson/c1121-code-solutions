/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var key in students) {
    names.push(students[key].name);
  }
  return names;
}

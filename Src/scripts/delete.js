// ----------------------------------------------------------------------- Teacher -----------------------------------------------------------------------

var teacher_table_delete_div = document.getElementById("tchDelete");

var teacher_table_delete = document.getElementById("tchTableDelete");
var teacher_delete_buttons = document.querySelectorAll(".teacherDeleteBtn");

for (var i = 0; i < teacher_delete_buttons.length; i++) {
  teacher_delete_buttons[i].addEventListener("click", function () {
    var row = this.parentElement.parentElement;
    var row_index = row.rowIndex;

    var teacher_id = teacher_table_delete.rows[row_index].cells[1].innerText;
    admin.deleteTeacher(teacher_id);
    row.style.display = "none";
    

  });
}

// ----------------------------------------------------------------------- Student -----------------------------------------------------------------------

var student_table_delete_div = document.getElementById("stDelete");

var student_table_delete = document.getElementById("stTableDelete");
var student_delete_buttons = document.querySelectorAll(".studentDeleteBtn");

for (var i = 0; i < student_delete_buttons.length; i++) {
  student_delete_buttons[i].addEventListener("click", function () {
    var row = this.parentElement.parentElement;
    var row_index = row.rowIndex;

    var student_id = student_table_delete.rows[row_index].cells[1].innerText;
    admin.deleteStudent(student_id);
    row.style.display = "none";
  });
}

// ----------------------------------------------------------------------- Course -----------------------------------------------------------------------

var course_table_delete_div = document.getElementById("crsDelete");

var course_table_delete = document.getElementById("crsTableDelete");
var course_delete_buttons = document.querySelectorAll(".courseDeleteBtn");

for (var i = 0; i < course_delete_buttons.length; i++) {
  course_delete_buttons[i].addEventListener("click", function () {
    var row = this.parentElement.parentElement;
    var row_index = row.rowIndex;

    var course_id = course_table_delete.rows[row_index].cells[1].innerText;
    admin.deleteCourse(course_id);
    row.style.display = "none";
    

  });
}
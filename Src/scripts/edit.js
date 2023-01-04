import data from "../../Data/data.json" assert { type: "json" };

// ----------------------------------------------------------------------- Teacher -----------------------------------------------------------------------
var teacher_table_div = document.getElementById("tchEdit");
var teacher_form_div = document.getElementById("tchForm");

var teacher_table = document.getElementById("tchTable");
var edit_buttons = document.querySelectorAll(".teacherEditBtn");

for (var i = 0; i < edit_buttons.length; i++) {
  edit_buttons[i].addEventListener("click", function () {
    // edit_buttons[i].parentElement ---> column  /////  edit_buttons[i].parentElement.parentElement ---> row

    var row = this.parentElement.parentElement;
    var row_index = row.rowIndex;

    console.log(row_index);

    var teacher_id = teacher_table.rows[row_index].cells[1].innerText;
    console.log(teacher_id);

    teacher_table_div.style.display = "none";
    teacher_form_div.style.display = "block";

    let tchData = localStorage.getItem("Teacher" + teacher_id);

    addTch.style.display = "none";
    editTch.style.display = "block";

    tchData = JSON.parse(tchData);

    tchName.value = tchData["name"];
    tchId.disabled = true;
    tchPassword.value = tchData["password"];
    tchUserName.value = tchData["userName"];
    let tchCoursesData = tchData["coursesId"];
    console.log(tchCoursesData);

    for (var i = 0; i < tchCourses.length; i++) {
      if (tchCoursesData.includes(parseInt(tchCourses[i].value))) {
        tchCourses[i].style.backgroundColor = "grey";
      }
    }

    editTch.addEventListener("click", function () {
      if (choices.length == 0) {
        let newTchData = new Teacher(
          tchData["id"],
          tchName.value,
          tchUserName.value,
          tchPassword.value,
          tchCoursesData
        );
        admin.editTeacher(newTchData, teacher_id);
      } else {
        let newCourses = tchCoursesData.concat(choices);
        let newTchData = new Teacher(
          tchData["id"],
          tchName.value,
          tchUserName.value,
          tchPassword.value,
          newCourses
        );
        localStorage.setItem(
          "Teacher" + teacher_id,
          JSON.stringify(newTchData)
        );
        admin.editTeacher(newTchData, teacher_id);
      }
    });
  });
}

// ----------------------------------------------------------------------- Student -----------------------------------------------------------------------
var student_table_div = document.getElementById("stEdit");
var student_form_div = document.getElementById("stForm");

var student_table = document.getElementById("stTable");
var edit_buttons = document.querySelectorAll(".studentEditBtn");

for (var i = 0; i < edit_buttons.length; i++) {
  edit_buttons[i].addEventListener("click", function () {
    var row = this.parentElement.parentElement;
    var row_index = row.rowIndex;

    var student_id = student_table.rows[row_index].cells[1].innerText;

    student_table_div.style.display = "none";
    student_form_div.style.display = "block";

    let stData = localStorage.getItem("Student" + student_id);

    addStd.style.display = "none";
    editStd.style.display = "block";

    stData = JSON.parse(stData);

    stdName.value = stData["name"];
    stdId.disabled = true;
    stdPassword.value = stData["password"];
    stdUserName.value = stData["userName"];
    let stCoursesData = stData["coursesId"];

    for (var i = 0; i < stdCourses.length; i++) {
      if (stCoursesData.includes(parseInt(stdCourses[i].value))) {
        // console.log(stdCourses[i])

        stdCourses[i].style.backgroundColor = "grey";
      }
    }

    editStd.addEventListener("click", function () {
      console.log(stCoursesData);
      if (stdChoices.length == 0) {
        let newStData = new Student(
          stData["id"],
          stdName.value,
          stdUserName.value,
          stdPassword.value,
          stCoursesData
        );
        admin.editStudent(newStData, student_id);
        alert("student edited successfully");
      } else {
        let newCourses = stCoursesData.concat(stdChoices);
        let newStData = new Student(
          stData["id"],
          stdName.value,
          stdUserName.value,
          stdPassword.value,
          newCourses
        );
        admin.editStudent(newStData, student_id);
        alert("student edited successfully");
      }
    });

    // stCoursesData = [];
    console.log(stCoursesData);
  });
}

// ----------------------------------------------------------------------- Course -----------------------------------------------------------------------
var course_table_div = document.getElementById("crsEdit");
var course_form_div = document.getElementById("crsForm");

var course_table = document.getElementById("crsTable");
var edit_buttons = document.querySelectorAll(".courseEditBtn");

for (var i = 0; i < edit_buttons.length; i++) {
  edit_buttons[i].addEventListener("click", function () {
    var row = this.parentElement.parentElement;
    var row_index = row.rowIndex;

    var course_id = course_table.rows[row_index].cells[1].innerText;

    course_table_div.style.display = "none";
    course_form_div.style.display = "block";

    let crsData = localStorage.getItem("Courses" + course_id);

    addCrs.style.display = "none";
    editCrs.style.display = "block";

    crsData = JSON.parse(crsData);

    crsName.value = crsData["name"];
    crsId.disabled = true;

    crTchId.value = crsData["tchID"];
    numStd.value = crsData["numStds"];
    crsDesc.value = crsData["description"];
    crsContent.value = crsData["content"];

    editCrs.addEventListener("click", function () {
      let newCrsData = new Courses(
        crsData["id"],
        crsName.value,
        crTchId.value,
        numStd.value,
        crsDesc.value,
        crsContent.value
      );
      console.log(newCrsData);
      //   localStorage.setItem("Courses" + course_id, JSON.stringify(newCrsData));
      admin.editCourse(newCrsData, course_id);
      alert("Course edited successfully");
    });
  });
}

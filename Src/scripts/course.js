let course = document.getElementsByClassName("course"),
  courseName = document.getElementsByClassName("courseName"),
  courseId = document.getElementsByClassName("courseId"),
  teacherId = document.getElementsByClassName("teacherId"),
  studentsNum = document.getElementsByClassName("numOfStudents"),
  contentItem = document.getElementsByClassName("courseContent"),
  description = document.getElementsByClassName("description"),
  editCourse = document.getElementsByClassName("editCourse"),
  viewStudents = document.getElementsByClassName("viewStudents"),
  courseContentEditor = document.getElementsByClassName(
    "editContentContainer"
  )[0],
  coursesContainer = document.getElementsByClassName("coursesContainer")[0];

//let coursesLength = localStorage["Courses"].length;
let dataAsString,
  dataAsObject,
  coursesSize = 0,
  clickedCoursekey,
  coursesIds = [];
for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i).startsWith("Course")) {
    coursesSize++;
    coursesIds.push(localStorage.key(i));
  }
}

for (let i = 0; i < coursesIds.length; i++) {
  dataAsString = localStorage.getItem(coursesIds[i]);
  dataAsObject = JSON.parse(dataAsString);
  courseName[i].innerText = dataAsObject["name"];
  courseId[i].innerHTML = "Course ID: <span>" + dataAsObject["id"] + "</span>";
  teacherId.innerHTML =
    "Teacher ID: <span>" + dataAsObject["tchID"] + "</span>";
  studentsNum[i].innerText = dataAsObject["numStds"];
  description[i].innerText = dataAsObject["description"];
  let content = dataAsObject["content"].split(", ");
  for (let x = 0; x < content.length; x++) {
    contentItem[i].innerHTML += "<li class=contentItem>" + content[x] + "</li>";
  }
}

for (let i = 0; i < editCourse.length; i++) {
  editCourse[i].onclick = function () {
    coursesContainer.style.display = "none";
    courseContentEditor.classList.add("shown");
    clickedCoursekey = coursesIds[i];
    console.log(clickedCoursekey);
  };
}

let admitBtn = document.getElementById("replaceContent"),
  fields = document.getElementsByTagName("textarea");
admitBtn.onclick = function () {
  dataAsObject.content = "";
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].value) {
      dataAsObject.content += fields[i].value + ", ";
    }

    // console.log(clickedCoursekey);
  }
  localStorage.setItem(clickedCoursekey, JSON.stringify(dataAsObject));
};

/////////////degreeees
for (let i = 0; i < coursesIds.length; i++) {
  viewStudents[i].onclick = function () {
    //get data object
    dataAsString = localStorage.getItem(coursesIds[i]);
    dataAsObject = JSON.parse(dataAsString);
    let stdNum = 0;
    //console.log(dataAsObject);
    let arrayOfdegrees = dataAsObject["stdGrade"],
      cookiedData = dataAsObject["stdGrade"];
    for (let x = 0; x < cookiedData.length; x++) {
      let savedIds = JSON.stringify(cookiedData[x]["stdID"]),
        savedDegrees = JSON.stringify(cookiedData[x]["grade"]);
      console.log(savedIds);
      console.log(cookiedData[x]);
      document.cookie =
        "StudentCode" + (x + 1) + "=" + savedIds + ";expires= 6 Jan 2023";
      document.cookie =
        "StudentDegree" + (x + 1) + "=" + savedDegrees + ";expires= 6 Jan 2023";
      document.cookie =
        "selectedCourse=" +
        "Courses" +
        dataAsObject["id"] +
        ";expires=6 Jan 2023";
      stdNum++;
    }
    document.cookie = "studentsCounter=" + stdNum + ";expires= 6 Jan 2023";
  };
}

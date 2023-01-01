/* $(function () {
  $.ajax({
    type: "GET",
    url: "../Data/data.json",
    success: function (response) {
      console.log(response);
    },
  });
});
 */

/* courseId;
teacherId; */

$(function () {
  let course = document.getElementsByClassName("course"),
    courseName = document.getElementsByClassName("courseName"),
    courseId = document.getElementsByClassName("courseId"),
    teacherId = document.getElementsByClassName("teacherId"),
    studentsNum = document.getElementsByClassName("numOfStudents"),
    contentItem = document.getElementsByClassName("courseContent"),
    description = document.getElementsByClassName("description");

  $.getJSON("../Data/data.json", function (result) {
    //  console.log(result["Courses"]);
    let coursesLength = result["Courses"].length;
    for (let i = 0; i < coursesLength; i++) {
      let jsonData = result["Courses"][i];
      courseName[i].innerText = jsonData["name"];
      courseId[i].innerHTML =
        "Course ID: <span>" + jsonData["crsID"] + "</span>";
      teacherId.innerHTML =
        "Teacher ID: <span>" + jsonData["tchID"] + "</span>";
      studentsNum[i].innerText = jsonData["numStds"];
      description[i].innerText = jsonData["description"];
      /* contennnnnnnnnnnnt handling */
      let content = jsonData["content"].split(", ");
      for (let x = 0; x < content.length; x++) {
        contentItem[i].innerHTML +=
          "<li class=contentItem>" + content[x] + "</li>";
      }
    }
  });
});

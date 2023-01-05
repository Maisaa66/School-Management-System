let gradeTable = document.querySelector("#grades-row"); 
let selectedCourse = getCookie("selectedCourse");
let theCourse = JSON.parse(localStorage.getItem(selectedCourse));
let thecourseGrades = theCourse.stdGrade;
let stdData = JSON.parse(localStorage.getItem("stdData"));
let std = new Teacher(stdData.id, stdData.name,"", "", stdData.coursesId);


let enteredDegree = document.getElementsByClassName("enteredDegree"),
  submitDegree = document.getElementById("#submitDegree"),
  nameCell = document.getElementsByClassName("stdCell"),
  studentsNames = [],
  studentsIds = [],
  studentsCounter;

/* for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i).startsWith("Course")) {
    coursesIds.push(localStorage.key(i));
  }
} */

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// studentsCounter = getCookie("studentsCounter");
// for (let i = 0; i < Number(studentsCounter); i++) {
//   studentsIds.push(getCookie("StudentCode" + (i + 1)));
// }
// for (let i = 0; i < localStorage.length; i++) {
//   let studentasObject;
//   if (localStorage.key(i).startsWith("Student")) {
//     let studentasString = localStorage.key(i);
//     studentasObject = JSON.parse(localStorage.getItem(studentasString));
//     console.log(studentasObject["name"]);
//     console.log(getCookie("StudentCode" + (i + 1)))
//     console.log(studentsIds.includes(String(studentasObject["id"])));
//     console.log(studentsIds);
//     console.log(String(studentasObject["id"]));
//     if (studentsIds.includes(String(studentasObject["id"]))) {
//       studentsNames.push(studentasObject["name"]);
//     }
//   }
// }

// let node, clone;

// for (let i = 0; i < Number(studentsCounter); i++) {
//   node = document.querySelector(".actualData"); //check syntax for rows
//   console.log(node);
//   let clonesNum = Number(studentsCounter) - 1;
//   if (i < clonesNum) {
//     clone = node.cloneNode(true);
//     document.querySelector("tbody").appendChild(clone);
//   }

//   let degreeCell = document.getElementsByClassName("enteredDegree")[i];
//   degreeCell.value = getCookie("StudentDegree" + (i + 1));
//   nameCell[i].innerText = studentsNames[i];
// }

/* --------- --------- */
// document.getElementById("submitDegree").onclick = function () {
//   let newcourse = theCourse;
//   let updated = document.querySelectorAll(".enteredDegree")
//   let ids = document.querySelectorAll(".ids");
//   let newgrades = [];
//   console.log(thecourseGrades, updated, ids);
//   for(let i = 0; i < updated.length; i++) {
//     newgrades.push({"stdID": ids[i].innerText, "grade": updated[i].value})
//   }
//   newcourse.stdGrade = newgrades;
//   localStorage.setItem(selectedCourse, JSON.stringify(newcourse));
// }

document.getElementById("submitDegree").addEventListener("click", function() {
  let newcourse = theCourse;
  let updated = document.querySelectorAll(".enteredDegree")
  let ids = document.querySelectorAll(".ids");
  let newgrades = [];
  for(let i = 0; i < updated.length; i++) {
    newgrades.push({"stdID": parseInt(ids[i].innerText), "grade": parseInt(updated[i].value)})
  }
  newcourse.stdGrade = newgrades;
  localStorage.setItem(selectedCourse, JSON.stringify(newcourse));
  updating();
})
let logOutBtn = document.querySelector(".log-out");
logOutBtn.addEventListener("click", function() {
    std.logout();
});

document.getElementById("backBtn").onclick = function () {
  history.back();
};

function updating() {
  updateData();
} 
//My Implemnt
thecourseGrades.forEach(crsg => {
  let row = `<tr>
        <td class="ids">${crsg.stdID}</td>
        <td><input class="enteredDegree" value="${crsg.grade}" type="number"></td>
        <td>100</td>
    </tr>`;
  gradeTable.insertAdjacentHTML("afterbegin", row);
})
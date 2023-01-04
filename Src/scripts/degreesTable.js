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
studentsCounter = getCookie("studentsCounter");
for (let i = 0; i < Number(studentsCounter); i++) {
  studentsIds.push(getCookie("StudentCode" + (i + 1)));
}
for (let i = 0; i < localStorage.length; i++) {
  let studentasObject;
  if (localStorage.key(i).startsWith("Student")) {
    let studentasString = localStorage.key(i);
    studentasObject = JSON.parse(localStorage.getItem(studentasString));
    console.log(studentasObject["name"]);
    console.log(studentsIds.includes(String(studentasObject["id"])));
    console.log(studentsIds);
    console.log(String(studentasObject["id"]));
    if (studentsIds.includes(String(studentasObject["id"]))) {
      studentsNames.push(studentasObject["name"]);
    }
  }
}

let node, clone;

for (let i = 0; i < Number(studentsCounter); i++) {
  node = document.querySelector(".actualData"); //check syntax for rows
  console.log(node);
  let clonesNum = Number(studentsCounter) - 1;
  if (i < clonesNum) {
    clone = node.cloneNode(true);
    document.querySelector("tbody").appendChild(clone);
  }

  let degreeCell = document.getElementsByClassName("enteredDegree")[i];
  degreeCell.value = getCookie("StudentDegree" + (i + 1));
  nameCell[i].innerText = studentsNames[i];
}
let selectedCourse = getCookie("selectedCourse");

/* --------- --------- */
document.getElementById("submitDegree").onclick = function () {
  let degreeCell = document.getElementsByClassName("enteredDegree");

  for (let x = 0; x < localStorage.length; x++) {
    let courseasObject = JSON.parse(localStorage.getItem(localStorage.key(x)));
    if (localStorage.key(x) == getCookie("selectedCourse")) {
      console.log(JSON.parse(localStorage.getItem(localStorage.key(x))));
      let key = localStorage.key(x);
      for (let x = 0; x < studentsIds.length; x++) {
        courseasObject["stdGrade"][x]["grade"] = degreeCell[x].value;
        console.log(courseasObject);
        localStorage.setItem(
          key,
          JSON.stringify(courseasObject)
        );
      }
    }
  }

  updateData();
};
let logOutBtn = document.querySelector(".log-out");
console.log(logOutBtn);
logOutBtn.addEventListener("click", function() {
    std.logout();
});

document.getElementById("backBtn").onclick = function () {
  history.back();
};


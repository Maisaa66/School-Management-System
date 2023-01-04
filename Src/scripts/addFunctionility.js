let adminLoggedData = JSON.parse(localStorage.getItem("stdData"));
let admin = new Admin(
  adminLoggedData.id,
  adminLoggedData.name,
  adminLoggedData.userName,
  adminLoggedData.password
);

let adminName = document.getElementById("profile-name");
adminName.innerHTML = "Hello" + admin.name;

let logOutBtn = document.getElementById("log-out-admin");
logOutBtn.addEventListener("click", admin.logout);

let navButtons = document.getElementById("functionalities").children;
let tchForm = document.getElementById("tchForm");
let stForm = document.getElementById("stForm");
let crsForm = document.getElementById("crsForm");
let tchEdit = document.getElementById("tchEdit");
let stEdit = document.getElementById("stEdit");
let crsEdit = document.getElementById("crsEdit");
let tchDelete = document.getElementById("tchDelete");
let stDelete = document.getElementById("stDelete");
let crsDelete = document.getElementById("crsDelete");

//Teacher inputs fields
let tchName = document.getElementById("tchName");
let tchId = document.getElementById("tchId");
let tchPassword = document.getElementById("tchPassword");
let tchUserName = document.getElementById("tch-userName");

//selection of courses for teacher and student
let tchCourses = document.getElementById("tchCourses");
let stdCourses = document.getElementById("stdCourses");

//add buttons for each client
let addTch = document.getElementById("addTch");
let addStd = document.getElementById("addStd");
let addCrs = document.getElementById("addCrs");

//Student inputs fields
let stdName = document.getElementById("stName");
let stdId = document.getElementById("stId");
let stdPassword = document.getElementById("stPassword");
let stdUserName = document.getElementById("std-userName");

//Courses inputs fields
let crsName = document.getElementById("crsName");
let crsId = document.getElementById("crs-ID");
let crTchId = document.getElementById("crs-tchID");
let numStd = document.getElementById("crsNumber");
let crsDesc = document.getElementById("crs-desc");
let crsContent = document.getElementById("crs-content");

let choices = [];
tchCourses.addEventListener("change", function () {
  choices.push(parseInt(tchCourses.value));
  console.log(choices);
});

let stdChoices = [];
stdCourses.addEventListener("change", function () {
  stdChoices.push(parseInt(stdCourses.value));
  console.log(stdChoices);
});

console.log(navButtons);
//buttons started from index 1

let addTchBtn = navButtons[1];
let editTchBtn = navButtons[2];
let delteTchBtn = navButtons[3];
let addStBtn = navButtons[4];
let editStBtn = navButtons[5];
let delteStBtn = navButtons[6];
let addCrsBtn = navButtons[7];
let editCrsBtn = navButtons[8];
let delteCrsBtn = navButtons[9];

let editTch = document.getElementById("editTch");
let editStd = document.getElementById("editStd");
let editCrs = document.getElementById("editCrs");

addTchBtn.addEventListener("click", function () {
  tchForm.style.display = "block";
  stForm.style.display = "none";
  crsForm.style.display = "none";
  tchEdit.style.display = "none";
  stEdit.style.display = "none";
  crsEdit.style.display = "none";
  tchDelete.style.display = "none";
  stDelete.style.display = "none";
  crsDelete.style.display = "none";
  addTch.style.display = "block";
  editTch.style.display = "none";
});

editTchBtn.addEventListener("click", function () {
  tchForm.style.display = "none";
  stForm.style.display = "none";
  crsForm.style.display = "none";
  tchEdit.style.display = "block";
  stEdit.style.display = "none";
  crsEdit.style.display = "none";
  tchDelete.style.display = "none";
  stDelete.style.display = "none";
  crsDelete.style.display = "none";
});

delteTchBtn.addEventListener("click", function () {
  tchForm.style.display = "none";
  stForm.style.display = "none";
  crsForm.style.display = "none";
  tchEdit.style.display = "none";
  stEdit.style.display = "none";
  crsEdit.style.display = "none";
  tchDelete.style.display = "block";
  stDelete.style.display = "none";
  crsDelete.style.display = "none";
});

addStBtn.addEventListener("click", function () {
  tchForm.style.display = "none";
  stForm.style.display = "block";
  crsForm.style.display = "none";
  tchEdit.style.display = "none";
  stEdit.style.display = "none";
  crsEdit.style.display = "none";
  tchDelete.style.display = "none";
  stDelete.style.display = "none";
  crsDelete.style.display = "none";
  addStd.style.display = "block";
  editStd.style.display = "none";
});

editStBtn.addEventListener("click", function () {
  tchForm.style.display = "none";
  stForm.style.display = "none";
  crsForm.style.display = "none";
  tchEdit.style.display = "none";
  stEdit.style.display = "block";
  crsEdit.style.display = "none";
  tchDelete.style.display = "none";
  stDelete.style.display = "none";
  crsDelete.style.display = "none";
});

delteStBtn.addEventListener("click", function () {
  tchForm.style.display = "none";
  stForm.style.display = "none";
  crsForm.style.display = "none";
  tchEdit.style.display = "none";
  stEdit.style.display = "none";
  crsEdit.style.display = "none";
  tchDelete.style.display = "none";
  stDelete.style.display = "block";
  crsDelete.style.display = "none";
});

addCrsBtn.addEventListener("click", function () {
  tchForm.style.display = "none";
  stForm.style.display = "none";
  crsForm.style.display = "block";
  tchEdit.style.display = "none";
  stEdit.style.display = "none";
  crsEdit.style.display = "none";
  tchDelete.style.display = "none";
  stDelete.style.display = "none";
  crsDelete.style.display = "none";
  addCrs.style.display = "block";
  editCrs.style.display = "none";
});

editCrsBtn.addEventListener("click", function () {
  tchForm.style.display = "none";
  stForm.style.display = "none";
  crsForm.style.display = "none";
  tchEdit.style.display = "none";
  stEdit.style.display = "none";
  crsEdit.style.display = "block";
  tchDelete.style.display = "none";
  stDelete.style.display = "none";
  crsDelete.style.display = "none";
});

delteCrsBtn.addEventListener("click", function () {
  tchForm.style.display = "none";
  stForm.style.display = "none";
  crsForm.style.display = "none";
  tchEdit.style.display = "none";
  stEdit.style.display = "none";
  crsEdit.style.display = "none";
  tchDelete.style.display = "none";
  stDelete.style.display = "none";
  crsDelete.style.display = "block";
});

// Add teacher event
addTch.addEventListener("click", function () {
  let newTch = new Teacher(
    tchId.value,
    tchName.value,
    tchUserName.value,
    tchPassword.value,
    choices
  );
  admin.addTeacher(newTch);
});

// Add student event
addStd.addEventListener("click", function () {
  let newstd = new Student(
    stdId.value,
    stdName.value,
    stdUserName.value,
    stdPassword.value,
    stdChoices
  );
  admin.AddStudent(newstd);
  for(let i =0; i< stdChoices.length; i++) {
    let coursg= JSON.parse(localStorage.getItem("Courses" + stdChoices[i]));
    let newG = {"stdID": stdId.value, "grade": 0}
    coursg.stdGrade.push(newG);
    localStorage.setItem("Courses" + stdChoices[i], JSON.stringify(coursg));
  }
});

// Add student event
addCrs.addEventListener("click", function () {
  let newCrs = new Courses(
    crsId.value,
    crsName.value,
    crTchId.value,
    numStd.value,
    crsDesc.value,
    crsContent.value
  );
  admin.addCourse(newCrs);
});

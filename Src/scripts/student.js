let std;
let stdCrsInfo = [];

let welcome = document.querySelector("#welcome-msg");
let stdName = document.querySelector("#studentName");
let stdID = document.querySelector("#ID");
let numCourses = document.querySelector("#numCourses");

let profile = document.querySelector("#profile");
let profileBtn = document.querySelector("#profileBtn");
let gradesBtn = document.querySelector("#gradesBtn");
let grades = document.querySelector("#grades"); 
let gradeTable = document.querySelector("#grades-row"); 

let coursesDiv = document.querySelector("#courses");

;(function() {
    let stdData = JSON.parse(localStorage.getItem("stdData"));
    std = new Student(stdData.id, stdData.name,"", "", stdData.courses);
    welcome.innerText = "Welcome " + stdData.name.slice(0, stdData.name.indexOf(" "));
    stdName.innerText = std.name;
    stdID.innerText = std.id;
    numCourses.innerText = std.courses.length;


    let stdCourses = std.courses;
    if(stdCourses.length === 0) {
        coursesDiv.innerHTML = "<div class='warning'>You are not enrolled in any courses</div>";
    }
    else {
        $.getJSON("../Data/data.json", function(myData) {
            let courses = myData["Courses"];
            console.log(courses);
            courses.forEach(course => {
                if(stdCourses.includes(course.id)) {
                    course.stdGrade.forEach(grade => {
                        if(std.id = grade.stdID) {
                            course.grade = grade.grade;
                        }
                    })
                    stdCrsInfo.push(course);
                }
            });
            viewCourses(stdCrsInfo);
            updateGrades(stdCrsInfo);
        });
    }
    std.viewStdProfile(profile, profileBtn);
}());

function viewCourses(crs) {
    crs.forEach(crs => {
        let course = `<div class="course">
        <h2 class="courseName">${crs.name}</h2>
        <p class="courseId">Course Id: ${crs.crsID}</p>
        <p class="description">${crs.description
        }</p>
    </div>`;
    coursesDiv.insertAdjacentHTML("afterbegin", course);
    });
}

function updateGrades(crs) {
    console.log(crs);
    crs.forEach(crs => {
        let row = `<tr>
        <td>${crs.name}</td>
        <td>${crs.grade}</td>
        <td class="${crs.grade >= 50 ? "pass": "fail"}">${crs.grade >= 50 ? "Passed": "Failed"}</td>
    </tr>`;
    gradeTable.insertAdjacentHTML("afterbegin", row);
    });
}

gradesBtn.addEventListener("click", function() {
    std.viewCoursesGrades(profile, grades, profileBtn, gradesBtn);
});
profileBtn.addEventListener("click", function() {
    std.viewCoursesGrades(profile, grades, profileBtn, gradesBtn);
});


let logOutBtn = document.querySelector(".log-out");
logOutBtn.addEventListener("click", function() {
    std.logout();
});

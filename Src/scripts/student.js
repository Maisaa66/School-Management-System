let std;
let stdName = document.querySelector("#studentName");
let stdID = document.querySelector("#ID");
let numCourses = document.querySelector("#numCourses");

let profile = document.querySelector("#profile");

;(function() {
    let stdData = JSON.parse(localStorage.getItem("stdData"));
    std = new Student(stdData.id, stdData.name,"", "", stdData.courses);
    console.log(std);
    stdName.innerText = std.name;
    stdID.innerText = std.id;
    numCourses.innerText = std.courses.length;
    std.viewStdProfile(profile);
}());


// let stdName = document.querySelector("#studentName");
// let stdID = document.querySelector("#ID");
// let numCourses = document.querySelector("#numCourses");
// let stdData;

// function sendStdInfo(data) {
//     stdData = data;
// }
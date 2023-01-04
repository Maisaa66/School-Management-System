
// let edit_course_content_btn = document.getElementById("editCourseContentBtn");
// let description_editor_text = document.getElementById("description_editor");
// let course_description_par = document.getElementById("course_description");

// let save_button = document.getElementById("SaveBtn");
// let view_grades_btn = document.getElementById("ViewGradesBtn");

// edit_course_content_btn.addEventListener("click", function(){

//         this.style.display = "none";

//         view_grades_btn.style.display = "none";
//         course_description_par.style.display = "none";

//         description_editor_text.style.display = "block";

//         save_button.style.display = "block"
// });

// save_button.addEventListener("click", function(){

//     this.style.display = "none";

//     view_grades_btn.style.display = "block";
    
//     if(description_editor_text.value != "")
//         course_description_par.innerText = description_editor_text.value;
        
//     course_description_par.style.display = "block";

//     description_editor_text.style.display = "none";

//     edit_course_content_btn.innerText = "Edit Content";
//     edit_course_content_btn.style.display = "inline-block";
// });

let welcome = document.querySelector("#welcome-msg");
let stdName = document.querySelector("#studentName");
let stdID = document.querySelector("#ID");
let numCourses = document.querySelector("#numCourses");

;(function() {
    let stdData = JSON.parse(localStorage.getItem("stdData"));
    let teacher = new Student(stdData.id, stdData.name,"", "", stdData.coursesId);
    welcome.innerText = "Welcome " + stdData.name.slice(0, stdData.name.indexOf(" "));
    stdName.innerText = std.name;
    stdID.innerText = std.id;
    // console.log(std);
    numCourses.innerText = std.coursesId.length;
}());
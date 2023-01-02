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


let admin = new Admin(152, "Ali","ali111", "ali111" )


//Teacher inputs fields
let tchName = document.getElementById("tchName");
let tchId = document.getElementById("tchId");
let tchPassword = document.getElementById("tchPassword");
let tchUserName = document.getElementById("tch-userName");
let tchCourses = document.getElementById("tchCourses");
let addTch = document.getElementById("addTch");

let choices =[]
tchCourses.addEventListener("change", function(){
    choices.push(tchCourses.value)
    console.log(choices)
})


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

addTchBtn.addEventListener("click", function(){
    tchForm.style.display="block";
    stForm.style.display="none";
    crsForm.style.display="none";
    tchEdit.style.display="none";
    stEdit.style.display="none";
    crsEdit.style.display="none";
    tchDelete.style.display="none";
    stDelete.style.display="none";
    crsDelete.style.display="none";


})

addTch.addEventListener("click", function(){

    let newTch = new Teacher(tchId.value, tchName.value,tchUserName.value, tchPassword.value, choices);
    admin.addTeacher(newTch);
})

editTchBtn.addEventListener("click", function(){
    tchForm.style.display="none";
    stForm.style.display="none";
    crsForm.style.display="none";
    tchEdit.style.display="block";
    stEdit.style.display="none";
    crsEdit.style.display="none";
    tchDelete.style.display="none";
    stDelete.style.display="none";
    crsDelete.style.display="none";
})


delteTchBtn.addEventListener("click", function(){
    tchForm.style.display="none";
    stForm.style.display="none";
    crsForm.style.display="none";
    tchEdit.style.display="none";
    stEdit.style.display="none";
    crsEdit.style.display="none";
    tchDelete.style.display="block";
    stDelete.style.display="none";
    crsDelete.style.display="none";
})

addStBtn.addEventListener("click", function(){
    tchForm.style.display="none";
    stForm.style.display="block";
    crsForm.style.display="none";
    tchEdit.style.display="none";
    stEdit.style.display="none";
    crsEdit.style.display="none";
    tchDelete.style.display="none";
    stDelete.style.display="none";
    crsDelete.style.display="none";
})

editStBtn.addEventListener("click", function(){
    tchForm.style.display="none";
    stForm.style.display="none";
    crsForm.style.display="none";
    tchEdit.style.display="none";
    stEdit.style.display="block";
    crsEdit.style.display="none";
    tchDelete.style.display="none";
    stDelete.style.display="none";
    crsDelete.style.display="none";
})


delteStBtn.addEventListener("click", function(){
    tchForm.style.display="none";
    stForm.style.display="none";
    crsForm.style.display="none";
    tchEdit.style.display="none";
    stEdit.style.display="none";
    crsEdit.style.display="none";
    tchDelete.style.display="none";
    stDelete.style.display="block";
    crsDelete.style.display="none";
})

addCrsBtn.addEventListener("click", function(){
    tchForm.style.display="none";
    stForm.style.display="none";
    crsForm.style.display="block";
    tchEdit.style.display="none";
    stEdit.style.display="none";
    crsEdit.style.display="none";
    tchDelete.style.display="none";
    stDelete.style.display="none";
    crsDelete.style.display="none";
})

editCrsBtn.addEventListener("click", function(){
    tchForm.style.display="none";
    stForm.style.display="none";
    crsForm.style.display="none";
    tchEdit.style.display="none";
    stEdit.style.display="none";
    crsEdit.style.display="block";
    tchDelete.style.display="none";
    stDelete.style.display="none";
    crsDelete.style.display="none";
})


delteCrsBtn.addEventListener("click", function(){
    tchForm.style.display="none";
    stForm.style.display="none";
    crsForm.style.display="none";
    tchEdit.style.display="none";
    stEdit.style.display="none";
    crsEdit.style.display="none";
    tchDelete.style.display="none";
    stDelete.style.display="none";
    crsDelete.style.display="block";
})

let data;//all data
let person;
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let logInBtn = document.querySelector(".btn");
let warning = document.querySelector("#warning");
$.getJSON("./Data/data.json", function(myData) {
    // console.log(myData);
    data = myData;
    logInBtn.addEventListener("click", function(e) {
        e.preventDefault();
        let userType = document.forms[0].elements.userType.value
        if(userType) {
            if(username.value && password.value) {
                matchCredentials(userType, username.value, password.value);
            }
            else {
                warning.innerText = "Please Fill Information";
            }
        }
        else {
            warning.innerText = "Please Choose User";
        }
    });
});

function matchCredentials(userType, userN, passW) {
    let url;
    switch(userType) {
        case "admin" :
            url = "../Public/admin.html";
        break;
        case "Teacher":
            url = "../Public/teacher.html";
        break;
        case "Student":
            url = "../Public/student.html"
        break;
    }
    let users = data[userType];
    let userC;
    users.forEach(user => {
        if(user.userName === userN && user.password === passW) {
            userC = user;
        }
    });
    if(userC) {
        person = new Student(userC.id, userC.name, userC.userName, userC.password, userC.coursesId);
        person.login(url);
    }
    else {
        warning.innerText = "Invalid username or password";
    }
}
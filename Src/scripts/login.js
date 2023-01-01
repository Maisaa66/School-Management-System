
let data;

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
    let users = data[userType];
    let user = users.map(user => {
        if(user.userName === userN && user.password === passW) {
            return user;
        }
    });
    if(user[0]) {
        console.log("OK");
    }
    else {
        warning.innerText = "Invalid username or password"
    }
}
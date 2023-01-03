let allCourses = JSON.parse(localStorage['allCourses']);
let allTchs = JSON.parse(localStorage['allTchs']);
let allStds = JSON.parse(localStorage['allStds']);

let tchTable = document.getElementById("tchTable");
let stdTable =  document.getElementById("stTable");
let  crsTable = document.getElementById("crsTable");


let delStdTable = document.getElementById("stTableDelete");
let delTchTable = document.getElementById("tchTableDelete");
let delCrsTable = document.getElementById("crsTableDelete");

let tchRowDel = document.getElementById("tchRow");
let stdRowDel = document.getElementById("stdRow");
let crsRowDel = document.getElementById("crsRow");

//retrive data of courses to put it to admin to choose from it
for(let i =0;i<allCourses.length;i++){
    let child = document.createElement("option");
    child.value = allCourses[i]['id'];
    child.innerHTML = allCourses[i]['name'] + '('+allCourses[i]['id']+')';

    let clonedChild = child.cloneNode(true);

    tchCourses.appendChild(child);

    stdCourses.appendChild(clonedChild);

}

//retrive data to put it in edit tables
for(let i =0;i<allTchs.length;i++){
    let clonedRow_delete = tchRowDel.cloneNode(true);
    
    let row = document.createElement("tr");
    let col_1 = document.createElement("td");
    let col_2 = document.createElement("td");
    let col_3 = document.createElement("td");
    let btnDiv = document.createElement("div");

    // give class to btn div
    btnDiv.classList.add("teacherEditBtn")
    btnDiv.innerHTML="Edit";
    col_1.innerHTML=allTchs[i]['name'];
    col_2.innerHTML=allTchs[i]['id'];

    col_3.appendChild(btnDiv)

    row.appendChild(col_1);
    row.appendChild(col_2);
    row.appendChild(col_3);

    tchTable.appendChild(row);

    clonedRow_delete.children[0].innerHTML = allTchs[i]['name'];
    clonedRow_delete.children[1].innerHTML = allTchs[i]['id'];

    delTchTable.appendChild(clonedRow_delete);

}
tchRowDel.style.display="none";


//--------------------------------- student ---------------------------------

//retrive data to put it in edit tables
for(let i =0;i<allStds.length;i++){
    let clonedRow_delete = stdRowDel.cloneNode(true);
    
    let row = document.createElement("tr");
    let col_1 = document.createElement("td");
    let col_2 = document.createElement("td");
    let col_3 = document.createElement("td");
    let btnDiv = document.createElement("div");

    // give class to btn div
    btnDiv.classList.add("studentEditBtn")
    btnDiv.innerHTML="Edit";
    col_1.innerHTML=allStds[i]['name'];
    col_2.innerHTML=allStds[i]['id'];

    col_3.appendChild(btnDiv)

    row.appendChild(col_1);
    row.appendChild(col_2);
    row.appendChild(col_3);

    stdTable.appendChild(row);

    clonedRow_delete.children[0].innerHTML = allStds[i]['name'];
    clonedRow_delete.children[1].innerHTML = allStds[i]['id'];

    delStdTable.appendChild(clonedRow_delete);

}
stdRowDel.style.display="none";


//--------------------------------- Courses ---------------------------------

//retrive data to put it in edit tables
for(let i =0;i<allCourses.length;i++){
    let clonedRow_delete = crsRowDel.cloneNode(true);
    
    let row = document.createElement("tr");
    let col_1 = document.createElement("td");
    let col_2 = document.createElement("td");
    let col_3 = document.createElement("td");
    let btnDiv = document.createElement("div");

    // give class to btn div
    btnDiv.classList.add("courseEditBtn")
    btnDiv.innerHTML="Edit";
    col_1.innerHTML=allCourses[i]['name'];
    col_2.innerHTML=allCourses[i]['id'];

    col_3.appendChild(btnDiv)

    row.appendChild(col_1);
    row.appendChild(col_2);
    row.appendChild(col_3);

    crsTable.appendChild(row);

    clonedRow_delete.children[0].innerHTML = allCourses[i]['name'];
    clonedRow_delete.children[1].innerHTML = allCourses[i]['id'];

    delCrsTable.appendChild(clonedRow_delete);

}
crsRowDel.style.display="none";
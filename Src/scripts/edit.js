
import data from '../../Data/data.json' assert { type: 'json' };
console.log(data);

var teacher_table_div = document.getElementById("tchEdit");
var teacher_form_div = document.getElementById("tchForm");

var teacher_table = document.getElementById("tchTable");
var edit_buttons = document.querySelectorAll(".teacherEditBtn");




console.log(edit_buttons);

for(var i = 0; i < edit_buttons.length; i++)
{
    edit_buttons[i].addEventListener("click", function(){

        // edit_buttons[i].parentElement ---> column  /////  edit_buttons[i].parentElement.parentElement ---> row

        var row = this.parentElement.parentElement;
        var row_index = row.rowIndex;

        console.log(row_index);

        var teacher_id = teacher_table.rows[row_index].cells[1].innerText;
        console.log(teacher_id);

        teacher_table_div.style.display = "none";
        teacher_form_div.style.display = "block";

        let tchData = localStorage.getItem("Teacher"+teacher_id);

        addTch.style.display="none";
        

        tchData=JSON.parse(tchData);

        tchName.value = tchData['name'];
        tchId.disabled = true;
        tchPassword.value=tchData['password'];
        tchUserName.value=tchData['userName'];
        let tchCoursesData = tchData['coursesId']
        console.log(tchCoursesData);

        for(var i=0;i<tchCourses.length;i++){
            if(tchCoursesData.includes(parseInt(tchCourses[i].value))){
                tchCourses[i].style.backgroundColor="grey"
            }
        }

        editTch.addEventListener("click", function(){
            
            if(choices.length==0){
                let newTchData = new Teacher(tchData['id'], tchName.value,tchUserName.value, tchPassword.value, tchCoursesData);
                localStorage.setItem("Teacher"+teacher_id, JSON.stringify(newTchData))
                console.log(newTchData);

            }
            else{
                let newTchData = new Teacher(tchData['id'], tchName.value,tchUserName.value, tchPassword.value, choices);
                localStorage.setItem("Teacher"+teacher_id, JSON.stringify(newTchData))
                console.log(newTchData);

            }

        })

    });
}





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

    });
}
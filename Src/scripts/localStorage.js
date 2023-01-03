import data from '../../Data/data.json' assert { type: 'json' };
// console.log(data);


(function(){
    for (var key in data){
        //access each object admin, teacher
        // console.log(data[key]);
        for(var obj in data[key]){
            //access each element (object) in each client admin teacher student
            // console.log(data[key][obj])
            localStorage.setItem(key+data[key][obj].id, JSON.stringify(data[key][obj]))
        }
        }
})()

let items = Object.keys(localStorage);
let itemsNum = items.length;
let stdcrs = [];
let stds = [];
for(let i=0; i<itemsNum; i++) {
    if(items[i].startsWith("Course")) {
        stdcrs.push(JSON.parse(localStorage.getItem(items[i])))
    }
    if(items[i].startsWith("Student")) {
        stds.push(JSON.parse(localStorage.getItem(items[i])))
    }
}
localStorage.setItem("allCourses", JSON.stringify(stdcrs));
localStorage.setItem("allStds", JSON.stringify(stds));
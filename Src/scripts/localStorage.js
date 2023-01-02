import data from '../../Data/data.json' assert { type: 'json' };
console.log(data);

for (var key in data){
//access each object admin, teacher
console.log(data[key]);
for(var obj in data[key]){
    //access each element (object) in each client admin teacher student
    console.log(data[key][obj])
    localStorage.setItem(key+data[key][obj].id, JSON.stringify(data[key][obj]))
}
}

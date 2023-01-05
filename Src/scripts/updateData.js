function updateData(){

    let items = Object.keys(localStorage);
    let itemsNum = items.length;
    let stdcrs = [];
    let stds = [];
    let tchs=[]
    for(let i=0; i<itemsNum; i++) {
        if(items[i].startsWith("Course")) {
            stdcrs.push(JSON.parse(localStorage.getItem(items[i])))
        }
        if(items[i].startsWith("Student")) {
            stds.push(JSON.parse(localStorage.getItem(items[i])))
        }
        if(items[i].startsWith("Teacher")) {
            tchs.push(JSON.parse(localStorage.getItem(items[i])))
        }
    
    }
    localStorage.setItem("allCourses", JSON.stringify(stdcrs));
    localStorage.setItem("allStds", JSON.stringify(stds));
    localStorage.setItem("allTchs", JSON.stringify(tchs));
    
    };
    updateData();
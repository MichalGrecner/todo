import {initialDraw, createTaskCard, newTaskInputCard, newTaskButtonListenerDOM, showfilteredTasks} from "/src/dom.js";


let taskArray = [];

const createTask = (task, project,date, description, status) => {
    
    const obj = {task, project,date, description, status}
    checkLclStorage()
    taskArray.push(obj)
    localStorage.setItem("taskData", JSON.stringify(taskArray))
    taskArray = []
}

const checkLclStorage = () => {
    const taskDataJSON = localStorage.getItem("taskData");
    if(taskDataJSON) {  
        const tasksFromMemory = JSON.parse(taskDataJSON);
        taskArray = tasksFromMemory
        }
}



const newTaskButtonListener =()=>{
    const btn = document.getElementById("inputTaskBtn");
    const task = document.getElementById("newTaskInput");
    const project = document.getElementById("newProjectInput");
    const date = document.getElementById("newDateInput")
    const description = document.getElementById("newDescriptionInput")
    const status = document.getElementById("status")
    
    btn.addEventListener("click", function(){createTask(task.value, project.value, date.value, description.value, status.checked)})

}




const delTask = (n) => {
    console.log("N je" + n)
    const tasksDataJSON = localStorage.getItem("taskData");
    const tasksData  = JSON.parse(tasksDataJSON);
    tasksData.splice(n, 1);
    localStorage.setItem("taskData", JSON.stringify(tasksData))
}


const changeStatusTask = (n) => {
    console.log("N change status je" + n)
    const tasksDataJSON = localStorage.getItem("taskData");
    const tasksData  = JSON.parse(tasksDataJSON);


    if(tasksData[n].status==false){
        tasksData[n].status=true
    }
    else if( tasksData[n].status==true){
        tasksData[n].status=false
    }
    localStorage.setItem("taskData", JSON.stringify(tasksData))
}

const loadProjects = () => {

    const tasksDataJSON = localStorage.getItem("taskData");
    let projectsNumbers = {}
    if (tasksDataJSON) {
        const tasksData  = JSON.parse(tasksDataJSON);
        const projects = tasksData.map(task=>task.project)
        for(const project of projects){
            if (Object.keys(projectsNumbers).includes(project)){
                projectsNumbers[project] += 1;
            } else{
                projectsNumbers[project] = 1;
            }
        }
        console.log("PROJECTNUBERS after for: " + JSON.stringify(projectsNumbers))
        
        
    } else 
    { console.log("nothing in storage yet")}   
    
    return projectsNumbers;
}


const filteredTasksFunc = (chosenProject) => {
    const tasksDataJSON = localStorage.getItem("taskData");
    let tasksData  = JSON.parse(tasksDataJSON);
    let filteredTasks = {}
    let counter = 0;
    for (let task in tasksData){
        if(tasksData[task].project == chosenProject){
            filteredTasks=tasksData[task]
            showfilteredTasks(counter, filteredTasks)
            counter++;
        }
    }
   
    
}






export {createTask, taskArray, newTaskButtonListener, delTask, changeStatusTask, loadProjects, filteredTasksFunc}
import {initialDraw, createTaskCard, newTaskInputCard, newTaskButtonListenerDOM} from "/src/dom.js";



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

const showTasks = () => {
    const tasksDataJSON = localStorage.getItem("taskData");
    if (tasksDataJSON) {
        const tasksData  = JSON.parse(tasksDataJSON);
        tasksData.forEach((element, index)=>{
        createTaskCard(index, element.task, element.project, element.date,element.description, element.status
        )})
    } else { console.log("nothing in storage yet")}
        
}

//loads task array from localStorage, remove task at given index and save it to local storage
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



export{createTask, taskArray,showTasks, newTaskButtonListener, delTask, changeStatusTask}
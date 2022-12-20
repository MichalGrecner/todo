import {initialDraw, createTaskCard, newTaskInputCard, newTaskButtonListenerDOM} from "/src/dom.js";



let taskArray = [];

const createTask = (task, project, description) => {
    const obj = {task, project, description}
    taskArray.push(obj)
    localStorage.setItem("taskData", JSON.stringify(taskArray))
}



const newTaskButtonListener =()=>{
    const btn = document.getElementById("inputTaskBtn");
    const task = document.getElementById("newTaskInput");
    const project = document.getElementById("newProjectInput");
    const description = document.getElementById("newDescriptionInput")
    btn.addEventListener("click", function(){createTask(task.value, project.value, description.value)})
}

const showTasks = () => {
    const tasksDataJSON = localStorage.getItem("taskData");
    if (tasksDataJSON) {
        const tasksData  = JSON.parse(tasksDataJSON);
        tasksData.forEach((element, index)=>{
        createTaskCard(index, element.task, element.project, element.description
        )})
    } else { console.log("nothing in storage yet")}
        
}



export{createTask, taskArray,showTasks, newTaskButtonListener}
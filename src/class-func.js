import {initialDraw, createTaskCard, newTaskInputCard, newTaskButtonListenerDOM, showfilteredTask, delBtnListeners, checkListeners} from "/src/dom.js";


let taskArray = [];

const createTask = (task, project,date, description, status) => {
    
    checkLclStorage()
    let id = getNewId();
    //const obj = {task, project,date, description, status}
    const obj = {id, task, project,date, description, status}
    

    taskArray.push(obj)
    localStorage.setItem("taskData", JSON.stringify(taskArray))
    taskArray = [];
}

const checkLclStorage = () => {
    const taskDataJSON = localStorage.getItem("taskData");
    if(taskDataJSON) {  
        const tasksFromMemory = JSON.parse(taskDataJSON);
        taskArray = tasksFromMemory;
        }
}

const getNewId = () => {
    let tryId = 0;
    while(taskArray.some(task =>task.id == tryId)){
        tryId ++;
    }
    return tryId;
}



const newTaskButtonListener =()=>{
    const btn = document.getElementById("inputTaskBtn");
    const task = document.getElementById("newTaskInput");
    const project = document.getElementById("newProjectInput");
    const date = document.getElementById("newDateInput")
    const description = document.getElementById("newDescriptionInput")
    const status = document.getElementById("status")
    
    

    btn.addEventListener("click", function(){
        if(project.value=="") project.value="no project name";
        if(task.value =="") task.value="no task name";
        createTask(task.value, project.value, date.value, description.value, false)})

}




const delTask = (n) => {
    const tasksDataJSON = localStorage.getItem("taskData");
    const tasksData  = JSON.parse(tasksDataJSON);


    let counter=0;
    for(const task of tasksData){
        console.log("TASK.ID: "+ task.id)
        console.log("N: " + n)
        console.log("COUNTER: " + counter)
        console.log("::::::::::::::")
        if(task.id==n){
            console.log(task.id)
            tasksData.splice(counter, 1)
            break;
        }
        counter++;
    }
    
    localStorage.setItem("taskData", JSON.stringify(tasksData))
}


// const changeStatusTask = (n) => {
//     const tasksDataJSON = localStorage.getItem("taskData");
//     const tasksData  = JSON.parse(tasksDataJSON);
//     if(tasksData[n].status==false){
//         tasksData[n].status=true
//     }
//     else if( tasksData[n].status==true){
//         tasksData[n].status=false
//     }
//     localStorage.setItem("taskData", JSON.stringify(tasksData))
// }

const changeStatusTask = (n) => {
    const tasksDataJSON = localStorage.getItem("taskData");
    const tasksData  = JSON.parse(tasksDataJSON);
    for(const task of tasksData){
        if(task.id==n && task.status==false){
            console.log("here")
            task.status=true
            break;
        }
        else if(task.id==n && task.status==true){
            console.log("or here")
            task.status=false
            break;
        }
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
    } 
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
            showfilteredTask(counter, filteredTasks)
            counter++;    
        }   
    } 
    delBtnListeners();
    checkListeners();
}






export {createTask, taskArray, newTaskButtonListener, delTask, changeStatusTask, loadProjects, filteredTasksFunc}
import {showTasks, delTask, changeStatusTask } from "./class-func";

let statusListeners = {
    newTask : true
}

function createElement(type, text, parentID, selfID, selfClass){
    const el = document.createElement(type);
    el.innerText = text;
    el.id = selfID
    el.className = selfClass
    const parent = document.getElementById(parentID);
    parent.appendChild(el)
}

function createInput(type, parentID, selfID, selfClass, checked){
    const input = document.createElement("input");
    input.type=type;
    if(type="checkbox"){
        console.log(checked)
        checked == true? input.checked = true :false 
    } 
    input.id=selfID;
    input.className=selfClass;
    const parent = document.getElementById(parentID);
    parent.appendChild(input)
}






function initialDraw(){
    createNav();
    //navListeners();
}

const createNav = () => {
    const items =["new task", "show projects", "done tasks", "show all tasks"];
    createElement("ul", "", "navbar", "ulNav", "ulNav")
    for (let item of items){
        createElement("li", item, "ulNav", item, "navElements")
    }
};

const createTaskCard = (n, task, project,date, description, status) => {
    //type, text, parentID, selfID, selfClass
    const card = createElement("div", "", "content", "card" + n, "taskCard")
    
    const taskLine = createElement("div", "", "card" + n, "taskLine" + n, "cardLine")
    const taskLabem = createElement("p", "TASK: ", "taskLine" + n, "taskLabel" + n, "cardLabel")
    const taskText = createElement("p",task , "taskLine" + n, "taskName" + n, "cardText")

    const projectLine = createElement("div", "", "card" + n, "projectLine" + n, "cardLine")
    const projectLabel = createElement("p", "PROJECT: ", "projectLine" + n, "projectLabel" + n, "cardLabel")
    const projectName = createElement("p", project, "projectLine" + n, "projectName" + n, "cardText")

    const dateLine = createElement("div", "", "card" + n, "dateLine" + n, "cardLine")
    const dateLabel = createElement("p", "DUE DATE: ", "dateLine" + n, "dateLabel" + n, "cardLabel")
    const dateValue = createElement("p", date, "dateLine" + n, "dateValue" + n, "cardText")


    const descriptionLine = createElement("div", "", "card" + n, "descriptionLine" + n, "cardLine");
    const descriptionLabel = createElement("p", "DESCRIPTION: ", "descriptionLine" + n, "descriptionLabel" + n, "cardLabel")
    const descriptionText = createElement("p", description, "descriptionLine"+ n, "descriptionText" + n, "cardText") 

    const statusLine = createElement("div", "", "card" + n, "statusLine" + n, "cardLine");
    const statusLabel = createElement("p", "DONE: ", "statusLine" + n, "statusLabel" + n, "cardLabel")
    //(type, parentID, selfID, selfClass){
    const statusDone = createInput("checkbox", "statusLine" + n,"status" + n, "cardStatus", status) 

    //type, text, parentID, selfID, selfClass
    const delButton = createElement("button", "Delete Task", "card" + n, n, "delBtn")

}

const newTaskInputCard = () => {

    
    //type, text, parentID, selfID, selfClass
    const newTaskcard = createElement("div", "", "content", "newCardTask", "taskCard")

    const exitBtn = createElement("button", "X", "newCardTask", "exitNewTaskBtn", "ExitBtn")

    const taskLine = createElement("div", "", "newCardTask", "newTaskLine", "cardLine")
    const taskLabel = createElement("p", "TASK: ", "newTaskLine", "newTaskLabel", "cardLabel");
    //(type, parentID, selfID, selfClass)
    const taskInput = createInput("text", "newTaskLine", "newTaskInput", "taskInput")

    const projectLine = createElement("div", "", "newCardTask", "newProjectLine", "cardLine")
    const projectLabel = createElement("p", "PROJECT: ", "newProjectLine", "newProjectLabel", "cardLabel");
    //(type, parentID, selfID, selfClass)
    const projectInput = createInput("text", "newProjectLine", "newProjectInput", "taskInput")

    const dateLine = createElement("div", "", "newCardTask", "newDateLine", "cardLine")
    const dateLabel = createElement("p", "DDUE DATE: ", "newDateLine", "newDateLabel", "cardLabel");
    //(type, parentID, selfID, selfClass)
    const inputDate = createInput("date", "newDateLine", "newDateInput", "dateCalendar")

    const descriptionLine = createElement("div", "", "newCardTask", "newDescriptionLine", "cardLine")
    const descriptionLabel = createElement("p", "Description: ", "newDescriptionLine", "newDescriptionLabel", "cardLabel");
    const descriptionInput = createElement("textarea", "", "newDescriptionLine", "newDescriptionInput", "taskInput");


    const statusLine = createElement("div", "", "newCardTask", "statusLine", "cardLine");
    const statusLabel = createElement("p", "DONE: ", "statusLine", "statusLabel", "cardLabel")
    //(type, parentID, selfID, selfClass){
    
    const statusDone = createInput("checkbox", "statusLine","status", "cardStatus") 

    //type, text, parentID, selfID, selfClass
    const inputButton = createElement("button", "Create Task", "newCardTask", "inputTaskBtn", "btn")
}

const newTaskButtonListenerDOM = () =>{
    const btn = document.getElementById("inputTaskBtn");
    const card = document.getElementById("newCardTask")
    btn.addEventListener("click", function(){
        card.remove();
        //enables opening "new task card" again
        statusListeners.newTask=true;
        removeAllTaskCards()
        showTasks()
        delBtnListeners()

    })

}

const newTaskExitButtonListenerDOM = () =>{
    const btn = document.getElementById("exitNewTaskBtn");
    const card = document.getElementById("newCardTask")
    btn.addEventListener("click", function(){
        card.remove();
        //enables opening "new task card" again
        statusListeners.newTask=true;
    })
}

const removeAllTaskCards = () => {
    const taskCard = document.querySelectorAll(".taskCard");
    console.log(taskCard)
    taskCard.forEach(card => {
        card.remove();
    })
}

const delBtnListeners = () => {
    const btns = document.querySelectorAll(".delBtn");
    btns.forEach(btn => {
        btn.addEventListener("click", function(){
            console.log("zmacnuto delete")
            delTask(btn.id);
            removeAllTaskCards();
            showTasks();
            delBtnListeners();
        })
    })
}

const checkListeners = () => {
    const checkbtn = document.querySelectorAll(".cardStatus");
    
    checkbtn.forEach(btn => {
        btn.addEventListener("click", function(){
            console.log("zmacnuto checkbox")
            changeStatusTask(btn.id.replace(/\D/g,''));
        })
    })
}



    



export {initialDraw, createTaskCard, newTaskInputCard, newTaskButtonListenerDOM, newTaskExitButtonListenerDOM,statusListeners, removeAllTaskCards, delBtnListeners, checkListeners}
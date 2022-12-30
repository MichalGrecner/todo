//import { navListeners } from "./todoapp";
import {createTask, taskArray, newTaskButtonListener, delTask, changeStatusTask, loadProjects, filteredTasksFunc} from "./class-func.js"
import {initialDraw, createTaskCard, newTaskInputCard, newTaskButtonListenerDOM, statusListeners, newTaskExitButtonListenerDOM, removeAllTaskCards, delBtnListeners, checkListeners, showTasks, showDoneTasks, showUnDoneTasks, showProjectsCard} from "/src/dom.js";
import './style.css';

initialDraw()

const navListeners = () => {
    const items = document.querySelectorAll(".navElements");
    items.forEach(item => {
        item.addEventListener("click", function() {clickOnElementMenu(item.id)})
    })
    
};


const clickOnElementMenu = (el)=>{
    
    switch (el){
        case "new task":
            removeAllTaskCards();
            delBtnListeners();
            checkListeners();
            if(statusListeners.newTask){
                statusListeners.newTask=false;
                newTaskInputCard(); //shows input value crd
                newTaskButtonListener(); //create task button to save data
                newTaskButtonListenerDOM(); //create task button to manipulate dom
                newTaskExitButtonListenerDOM(); //exit button listener
            }
            //enables opening "new task card" again
            statusListeners.newTask=true;
        break;
        case "show projects":
        removeAllTaskCards();
        showProjectsCard();

        break;
        case "undone tasks":
        removeAllTaskCards();
        showUnDoneTasks();
        delBtnListeners();
        checkListeners();
        
        break;
        case "done tasks":
        removeAllTaskCards()
        showDoneTasks()
        delBtnListeners();
        checkListeners();
        
        break;
        case "show all tasks":
        removeAllTaskCards()
        showTasks()
        checkListeners()
        delBtnListeners()
    } 
};


navListeners()
showTasks()
checkListeners()
delBtnListeners()













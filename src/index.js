//import { navListeners } from "./todoapp";
import { taskArray, createTask, newTaskButtonListener, showTasks, delTask } from "./class-func";
import {initialDraw, createTaskCard, newTaskInputCard, newTaskButtonListenerDOM, statusListeners, newTaskExitButtonListenerDOM, removeAllTaskCards, delBtnListeners, checkListeners} from "/src/dom.js";
import './style.css';
//import {} from "/src/todoapp.js";




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
            delBtnListeners();
            checkListeners()
            if(statusListeners.newTask){
                statusListeners.newTask=false;
                newTaskInputCard(); //shows input value crd
                newTaskButtonListener(); //create task button to save data
                newTaskButtonListenerDOM(); //create task button to manipulate dom
                newTaskExitButtonListenerDOM(); //exit button listener
                

                
            }
        break;
        case "show projects":
        // f new proj
        console.log("showing project");
        break;
        case "done":
        // show memory - done projects
        console.log("show me done projects");
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













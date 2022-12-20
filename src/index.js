//import { navListeners } from "./todoapp";
import { taskArray, createTask, newTaskButtonListener, showTasks } from "./class-func";
import {initialDraw, createTaskCard, newTaskInputCard, newTaskButtonListenerDOM} from "/src/dom.js";
//import {} from "/src/todoapp.js";


initialDraw()
//clickOnElementMenu()
//navListeners()

const navListeners = () => {
    const items = document.querySelectorAll(".navElements")
    items.forEach(item => {
        item.addEventListener("click", function() {clickOnElementMenu(item.id)})
    })
    
};

//(n, task, project, description)


const clickOnElementMenu = (el)=>{
    switch (el){
        case "new task":
        newTaskInputCard();
        newTaskButtonListener()
        newTaskButtonListenerDOM()
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
        showTasks()
    } 
};

navListeners()



// createTask("ukol2", "projekt2", "popis2");
// createTask("ukol3", "projekt3", "popis3");
// createTask("ukol4", "projekt4", "popis4");
//showTasks()



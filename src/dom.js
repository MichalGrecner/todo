function createElement(type, text, parentID, selfID, selfClass){
    const el = document.createElement(type);
    el.innerText = text;
    el.id = selfID
    el.className = selfClass
    const parent = document.getElementById(parentID);
    parent.appendChild(el)
}

function createInput(type, parentID, selfID, selfClass){
    const input = document.createElement("input");
    input.type=type;
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
    for (let item of items){
        createElement("p", item, "navbar", item,"navElements")
    }
};

const createTaskCard = (n, task, project, description) => {
    //type, text, parentID, selfID, selfClass
    const card = createElement("div", "", "content", "card" + n, "taskCard")
    
    const taskLine = createElement("div", "", "card" + n, "taskLine" + n, "cardLine")
    const taskLabem = createElement("p", "TASK: ", "taskLine" + n, "taskLabel" + n, "cardLabel")
    const taskText = createElement("p",task , "taskLine" + n, "taskName" + n, "cardText")

    const projectLine = createElement("div", "", "card" + n, "projectLine" + n, "cardLine")
    const projectLabel = createElement("p", "PROJECT: ", "projectLine" + n, "projectLabel" + n, "cardLabel")
    const projectName = createElement("p", project, "projectLine" + n, "projectName" + n, "cardText")

    const descriptionLine = createElement("div", "", "card" + n, "descriptionLine" + n, "cardLine");
    const descriptionLabel = createElement("p", "DESCRIPTION: ", "descriptionLine" + n, "descriptionLabel" + n, "cardLabel")
    const descriptionText = createElement("p", description, "descriptionLine"+ n, "descriptionText" + n, "cardText") 
}

const newTaskInputCard = () => {
    //type, text, parentID, selfID, selfClass
    const newTaskcard = createElement("div", "", "content", "newCardTask", "taskCard")

    const taskLine = createElement("div", "", "newCardTask", "newTaskLine", "cardLine")
    const taskLabel = createElement("p", "TASK: ", "newTaskLine", "newTaskLabel", "cardLabel");
    //(type, parentID, selfID, selfClass)
    const taskInput = createInput("text", "newTaskLine", "newTaskInput", "taskInput")

    const projectLine = createElement("div", "", "newCardTask", "newProjectLine", "cardLine")
    const projectLabel = createElement("p", "PROJECT: ", "newProjectLine", "newProjectLabel", "cardLabel");
    //(type, parentID, selfID, selfClass)
    const projectInput = createInput("text", "newProjectLine", "newProjectInput", "taskInput")

    const descriptionLine = createElement("div", "", "newCardTask", "newDescriptionLine", "cardLine")
    const descriptionLabel = createElement("p", "Description: ", "newDescriptionLine", "newDescriptionLabel", "cardLabel");
    
    const descriptionInput = createElement("textarea", "", "newDescriptionLine", "newDescriptionInput", "taskInput");

    //type, text, parentID, selfID, selfClass
    const inputButton = createElement("button", "Create Task", "newCardTask", "inputTaskBtn", "btn")
}

const newTaskButtonListenerDOM = () =>{
    const btn = document.getElementById("inputTaskBtn");
    const card = document.getElementById("newCardTask")
    btn.addEventListener("click", function(){card.remove()})
}
    



export {initialDraw, createTaskCard, newTaskInputCard, newTaskButtonListenerDOM}
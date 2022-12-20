/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class-func.js":
/*!***************************!*\
  !*** ./src/class-func.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "newTaskButtonListener": () => (/* binding */ newTaskButtonListener),
/* harmony export */   "showTasks": () => (/* binding */ showTasks),
/* harmony export */   "taskArray": () => (/* binding */ taskArray)
/* harmony export */ });
/* harmony import */ var _src_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/dom.js */ "./src/dom.js");




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
        (0,_src_dom_js__WEBPACK_IMPORTED_MODULE_0__.createTaskCard)(index, element.task, element.project, element.description
        )})
    } else { console.log("nothing in storage yet")}
        
}





/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskCard": () => (/* binding */ createTaskCard),
/* harmony export */   "initialDraw": () => (/* binding */ initialDraw),
/* harmony export */   "newTaskButtonListenerDOM": () => (/* binding */ newTaskButtonListenerDOM),
/* harmony export */   "newTaskInputCard": () => (/* binding */ newTaskInputCard)
/* harmony export */ });
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
    





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-func */ "./src/class-func.js");
/* harmony import */ var _src_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/dom.js */ "./src/dom.js");
//import { navListeners } from "./todoapp";


//import {} from "/src/todoapp.js";


(0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.initialDraw)()
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
        (0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInputCard)();
        (0,_class_func__WEBPACK_IMPORTED_MODULE_0__.newTaskButtonListener)()
        ;(0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.newTaskButtonListenerDOM)()
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
        (0,_class_func__WEBPACK_IMPORTED_MODULE_0__.showTasks)()
    } 
};

navListeners()



// createTask("ukol2", "projekt2", "popis2");
// createTask("ukol3", "projekt3", "popis3");
// createTask("ukol4", "projekt4", "popis4");
//showTasks()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRzs7OztBQUlwRzs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlEQUF5RDtBQUN0Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBYztBQUN0QixVQUFVO0FBQ1YsTUFBTSxPQUFPO0FBQ2I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDtBQUNBOzs7Ozs7Ozs7O1VDN0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsV0FBVyxlQUFlO0FBQzZEO0FBQ2E7QUFDcEcsWUFBWTs7O0FBR1osd0RBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCw0QkFBNEI7QUFDL0UsS0FBSztBQUNMO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQWdCO0FBQ3hCLFFBQVEsa0VBQXFCO0FBQzdCLFFBQVEsc0VBQXdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBUztBQUNqQjtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NsYXNzLWZ1bmMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbml0aWFsRHJhdywgY3JlYXRlVGFza0NhcmQsIG5ld1Rhc2tJbnB1dENhcmQsIG5ld1Rhc2tCdXR0b25MaXN0ZW5lckRPTX0gZnJvbSBcIi9zcmMvZG9tLmpzXCI7XG5cblxuXG5sZXQgdGFza0FycmF5ID0gW107XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaywgcHJvamVjdCwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCBvYmogPSB7dGFzaywgcHJvamVjdCwgZGVzY3JpcHRpb259XG4gICAgdGFza0FycmF5LnB1c2gob2JqKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0RhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGFza0FycmF5KSlcbn1cblxuXG5cbmNvbnN0IG5ld1Rhc2tCdXR0b25MaXN0ZW5lciA9KCk9PntcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0VGFza0J0blwiKTtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrSW5wdXRcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdElucHV0XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdEZXNjcmlwdGlvbklucHV0XCIpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2NyZWF0ZVRhc2sodGFzay52YWx1ZSwgcHJvamVjdC52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUpfSlcbn1cblxuY29uc3Qgc2hvd1Rhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzRGF0YUpTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tEYXRhXCIpO1xuICAgIGlmICh0YXNrc0RhdGFKU09OKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzRGF0YSAgPSBKU09OLnBhcnNlKHRhc2tzRGF0YUpTT04pO1xuICAgICAgICB0YXNrc0RhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpPT57XG4gICAgICAgIGNyZWF0ZVRhc2tDYXJkKGluZGV4LCBlbGVtZW50LnRhc2ssIGVsZW1lbnQucHJvamVjdCwgZWxlbWVudC5kZXNjcmlwdGlvblxuICAgICAgICApfSlcbiAgICB9IGVsc2UgeyBjb25zb2xlLmxvZyhcIm5vdGhpbmcgaW4gc3RvcmFnZSB5ZXRcIil9XG4gICAgICAgIFxufVxuXG5cblxuZXhwb3J0e2NyZWF0ZVRhc2ssIHRhc2tBcnJheSxzaG93VGFza3MsIG5ld1Rhc2tCdXR0b25MaXN0ZW5lcn0iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHRleHQsIHBhcmVudElELCBzZWxmSUQsIHNlbGZDbGFzcyl7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgZWwuaWQgPSBzZWxmSURcbiAgICBlbC5jbGFzc05hbWUgPSBzZWxmQ2xhc3NcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJRCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dCh0eXBlLCBwYXJlbnRJRCwgc2VsZklELCBzZWxmQ2xhc3Mpe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGU9dHlwZTtcbiAgICBpbnB1dC5pZD1zZWxmSUQ7XG4gICAgaW5wdXQuY2xhc3NOYW1lPXNlbGZDbGFzcztcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJRCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0KVxuXG59XG5cblxuZnVuY3Rpb24gaW5pdGlhbERyYXcoKXtcbiAgICBjcmVhdGVOYXYoKTtcbiAgICAvL25hdkxpc3RlbmVycygpO1xufVxuXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPVtcIm5ldyB0YXNrXCIsIFwic2hvdyBwcm9qZWN0c1wiLCBcImRvbmUgdGFza3NcIiwgXCJzaG93IGFsbCB0YXNrc1wiXTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKXtcbiAgICAgICAgY3JlYXRlRWxlbWVudChcInBcIiwgaXRlbSwgXCJuYXZiYXJcIiwgaXRlbSxcIm5hdkVsZW1lbnRzXCIpXG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlVGFza0NhcmQgPSAobiwgdGFzaywgcHJvamVjdCwgZGVzY3JpcHRpb24pID0+IHtcbiAgICAvL3R5cGUsIHRleHQsIHBhcmVudElELCBzZWxmSUQsIHNlbGZDbGFzc1xuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiY29udGVudFwiLCBcImNhcmRcIiArIG4sIFwidGFza0NhcmRcIilcbiAgICBcbiAgICBjb25zdCB0YXNrTGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJjYXJkXCIgKyBuLCBcInRhc2tMaW5lXCIgKyBuLCBcImNhcmRMaW5lXCIpXG4gICAgY29uc3QgdGFza0xhYmVtID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJUQVNLOiBcIiwgXCJ0YXNrTGluZVwiICsgbiwgXCJ0YXNrTGFiZWxcIiArIG4sIFwiY2FyZExhYmVsXCIpXG4gICAgY29uc3QgdGFza1RleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLHRhc2sgLCBcInRhc2tMaW5lXCIgKyBuLCBcInRhc2tOYW1lXCIgKyBuLCBcImNhcmRUZXh0XCIpXG5cbiAgICBjb25zdCBwcm9qZWN0TGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJjYXJkXCIgKyBuLCBcInByb2plY3RMaW5lXCIgKyBuLCBcImNhcmRMaW5lXCIpXG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJQUk9KRUNUOiBcIiwgXCJwcm9qZWN0TGluZVwiICsgbiwgXCJwcm9qZWN0TGFiZWxcIiArIG4sIFwiY2FyZExhYmVsXCIpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBwcm9qZWN0LCBcInByb2plY3RMaW5lXCIgKyBuLCBcInByb2plY3ROYW1lXCIgKyBuLCBcImNhcmRUZXh0XCIpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiY2FyZFwiICsgbiwgXCJkZXNjcmlwdGlvbkxpbmVcIiArIG4sIFwiY2FyZExpbmVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiREVTQ1JJUFRJT046IFwiLCBcImRlc2NyaXB0aW9uTGluZVwiICsgbiwgXCJkZXNjcmlwdGlvbkxhYmVsXCIgKyBuLCBcImNhcmRMYWJlbFwiKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIGRlc2NyaXB0aW9uLCBcImRlc2NyaXB0aW9uTGluZVwiKyBuLCBcImRlc2NyaXB0aW9uVGV4dFwiICsgbiwgXCJjYXJkVGV4dFwiKSBcbn1cblxuY29uc3QgbmV3VGFza0lucHV0Q2FyZCA9ICgpID0+IHtcbiAgICAvL3R5cGUsIHRleHQsIHBhcmVudElELCBzZWxmSUQsIHNlbGZDbGFzc1xuICAgIGNvbnN0IG5ld1Rhc2tjYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCBcImNvbnRlbnRcIiwgXCJuZXdDYXJkVGFza1wiLCBcInRhc2tDYXJkXCIpXG5cbiAgICBjb25zdCB0YXNrTGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJuZXdDYXJkVGFza1wiLCBcIm5ld1Rhc2tMaW5lXCIsIFwiY2FyZExpbmVcIilcbiAgICBjb25zdCB0YXNrTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcIlRBU0s6IFwiLCBcIm5ld1Rhc2tMaW5lXCIsIFwibmV3VGFza0xhYmVsXCIsIFwiY2FyZExhYmVsXCIpO1xuICAgIC8vKHR5cGUsIHBhcmVudElELCBzZWxmSUQsIHNlbGZDbGFzcylcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBjcmVhdGVJbnB1dChcInRleHRcIiwgXCJuZXdUYXNrTGluZVwiLCBcIm5ld1Rhc2tJbnB1dFwiLCBcInRhc2tJbnB1dFwiKVxuXG4gICAgY29uc3QgcHJvamVjdExpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwibmV3Q2FyZFRhc2tcIiwgXCJuZXdQcm9qZWN0TGluZVwiLCBcImNhcmRMaW5lXCIpXG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJQUk9KRUNUOiBcIiwgXCJuZXdQcm9qZWN0TGluZVwiLCBcIm5ld1Byb2plY3RMYWJlbFwiLCBcImNhcmRMYWJlbFwiKTtcbiAgICAvLyh0eXBlLCBwYXJlbnRJRCwgc2VsZklELCBzZWxmQ2xhc3MpXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gY3JlYXRlSW5wdXQoXCJ0ZXh0XCIsIFwibmV3UHJvamVjdExpbmVcIiwgXCJuZXdQcm9qZWN0SW5wdXRcIiwgXCJ0YXNrSW5wdXRcIilcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJuZXdDYXJkVGFza1wiLCBcIm5ld0Rlc2NyaXB0aW9uTGluZVwiLCBcImNhcmRMaW5lXCIpXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiRGVzY3JpcHRpb246IFwiLCBcIm5ld0Rlc2NyaXB0aW9uTGluZVwiLCBcIm5ld0Rlc2NyaXB0aW9uTGFiZWxcIiwgXCJjYXJkTGFiZWxcIik7XG4gICAgXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBcIlwiLCBcIm5ld0Rlc2NyaXB0aW9uTGluZVwiLCBcIm5ld0Rlc2NyaXB0aW9uSW5wdXRcIiwgXCJ0YXNrSW5wdXRcIik7XG5cbiAgICAvL3R5cGUsIHRleHQsIHBhcmVudElELCBzZWxmSUQsIHNlbGZDbGFzc1xuICAgIGNvbnN0IGlucHV0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIkNyZWF0ZSBUYXNrXCIsIFwibmV3Q2FyZFRhc2tcIiwgXCJpbnB1dFRhc2tCdG5cIiwgXCJidG5cIilcbn1cblxuY29uc3QgbmV3VGFza0J1dHRvbkxpc3RlbmVyRE9NID0gKCkgPT57XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFRhc2tCdG5cIik7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Q2FyZFRhc2tcIilcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Y2FyZC5yZW1vdmUoKX0pXG59XG4gICAgXG5cblxuXG5leHBvcnQge2luaXRpYWxEcmF3LCBjcmVhdGVUYXNrQ2FyZCwgbmV3VGFza0lucHV0Q2FyZCwgbmV3VGFza0J1dHRvbkxpc3RlbmVyRE9NfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgeyBuYXZMaXN0ZW5lcnMgfSBmcm9tIFwiLi90b2RvYXBwXCI7XG5pbXBvcnQgeyB0YXNrQXJyYXksIGNyZWF0ZVRhc2ssIG5ld1Rhc2tCdXR0b25MaXN0ZW5lciwgc2hvd1Rhc2tzIH0gZnJvbSBcIi4vY2xhc3MtZnVuY1wiO1xuaW1wb3J0IHtpbml0aWFsRHJhdywgY3JlYXRlVGFza0NhcmQsIG5ld1Rhc2tJbnB1dENhcmQsIG5ld1Rhc2tCdXR0b25MaXN0ZW5lckRPTX0gZnJvbSBcIi9zcmMvZG9tLmpzXCI7XG4vL2ltcG9ydCB7fSBmcm9tIFwiL3NyYy90b2RvYXBwLmpzXCI7XG5cblxuaW5pdGlhbERyYXcoKVxuLy9jbGlja09uRWxlbWVudE1lbnUoKVxuLy9uYXZMaXN0ZW5lcnMoKVxuXG5jb25zdCBuYXZMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkVsZW1lbnRzXCIpXG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7Y2xpY2tPbkVsZW1lbnRNZW51KGl0ZW0uaWQpfSlcbiAgICB9KVxuICAgIFxufTtcblxuLy8obiwgdGFzaywgcHJvamVjdCwgZGVzY3JpcHRpb24pXG5cblxuY29uc3QgY2xpY2tPbkVsZW1lbnRNZW51ID0gKGVsKT0+e1xuICAgIHN3aXRjaCAoZWwpe1xuICAgICAgICBjYXNlIFwibmV3IHRhc2tcIjpcbiAgICAgICAgbmV3VGFza0lucHV0Q2FyZCgpO1xuICAgICAgICBuZXdUYXNrQnV0dG9uTGlzdGVuZXIoKVxuICAgICAgICBuZXdUYXNrQnV0dG9uTGlzdGVuZXJET00oKVxuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNob3cgcHJvamVjdHNcIjpcbiAgICAgICAgLy8gZiBuZXcgcHJvalxuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dpbmcgcHJvamVjdFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkb25lXCI6XG4gICAgICAgIC8vIHNob3cgbWVtb3J5IC0gZG9uZSBwcm9qZWN0c1xuICAgICAgICBjb25zb2xlLmxvZyhcInNob3cgbWUgZG9uZSBwcm9qZWN0c1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzaG93IGFsbCB0YXNrc1wiOlxuICAgICAgICBzaG93VGFza3MoKVxuICAgIH0gXG59O1xuXG5uYXZMaXN0ZW5lcnMoKVxuXG5cblxuLy8gY3JlYXRlVGFzayhcInVrb2wyXCIsIFwicHJvamVrdDJcIiwgXCJwb3BpczJcIik7XG4vLyBjcmVhdGVUYXNrKFwidWtvbDNcIiwgXCJwcm9qZWt0M1wiLCBcInBvcGlzM1wiKTtcbi8vIGNyZWF0ZVRhc2soXCJ1a29sNFwiLCBcInByb2pla3Q0XCIsIFwicG9waXM0XCIpO1xuLy9zaG93VGFza3MoKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
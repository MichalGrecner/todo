/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n* {\n  margin: 0;\n  padding: 0;\n}\n:root {\n  box-sizing: border-box;\n}\n\nbody{\n    display:flex;\n    flex-direction: column;\n    margin-left: 40px;\n    margin-top: 40px;\n}\n\n#navbar{\n    \n}\nul{\n    \n    list-style: none;\n}\nli{\n    margin:20px 0;\n\n}\n\nmain{\n    display:flex;\n    \n}\n\n#content{\n    \n    width: 1000px;\n    display:flex;\n    gap:20px;\n}\n\n.taskCard{\n    border:2px solid green;\n    position:relative;\n}\n#exitNewTaskBtn{\n    position:absolute;\n    right:5px;\n    top:5px;\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,sBAAsB;AACxB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;AAEA;AACA;;IAEI,gBAAgB;AACpB;AACA;IACI,aAAa;;AAEjB;;AAEA;IACI,YAAY;;AAEhB;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,SAAS;IACT,OAAO;;AAEX","sourcesContent":["\n* {\n  margin: 0;\n  padding: 0;\n}\n:root {\n  box-sizing: border-box;\n}\n\nbody{\n    display:flex;\n    flex-direction: column;\n    margin-left: 40px;\n    margin-top: 40px;\n}\n\n#navbar{\n    \n}\nul{\n    \n    list-style: none;\n}\nli{\n    margin:20px 0;\n\n}\n\nmain{\n    display:flex;\n    \n}\n\n#content{\n    \n    width: 1000px;\n    display:flex;\n    gap:20px;\n}\n\n.taskCard{\n    border:2px solid green;\n    position:relative;\n}\n#exitNewTaskBtn{\n    position:absolute;\n    right:5px;\n    top:5px;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/class-func.js":
/*!***************************!*\
  !*** ./src/class-func.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStatusTask": () => (/* binding */ changeStatusTask),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "delTask": () => (/* binding */ delTask),
/* harmony export */   "newTaskButtonListener": () => (/* binding */ newTaskButtonListener),
/* harmony export */   "showTasks": () => (/* binding */ showTasks),
/* harmony export */   "taskArray": () => (/* binding */ taskArray)
/* harmony export */ });
/* harmony import */ var _src_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/dom.js */ "./src/dom.js");




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
        (0,_src_dom_js__WEBPACK_IMPORTED_MODULE_0__.createTaskCard)(index, element.task, element.project, element.date,element.description, element.status
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





/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkListeners": () => (/* binding */ checkListeners),
/* harmony export */   "createTaskCard": () => (/* binding */ createTaskCard),
/* harmony export */   "delBtnListeners": () => (/* binding */ delBtnListeners),
/* harmony export */   "initialDraw": () => (/* binding */ initialDraw),
/* harmony export */   "newTaskButtonListenerDOM": () => (/* binding */ newTaskButtonListenerDOM),
/* harmony export */   "newTaskExitButtonListenerDOM": () => (/* binding */ newTaskExitButtonListenerDOM),
/* harmony export */   "newTaskInputCard": () => (/* binding */ newTaskInputCard),
/* harmony export */   "removeAllTaskCards": () => (/* binding */ removeAllTaskCards),
/* harmony export */   "statusListeners": () => (/* binding */ statusListeners)
/* harmony export */ });
/* harmony import */ var _class_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-func */ "./src/class-func.js");


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
        ;(0,_class_func__WEBPACK_IMPORTED_MODULE_0__.showTasks)()
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
            ;(0,_class_func__WEBPACK_IMPORTED_MODULE_0__.delTask)(btn.id);
            removeAllTaskCards();
            (0,_class_func__WEBPACK_IMPORTED_MODULE_0__.showTasks)();
            delBtnListeners();
        })
    })
}

const checkListeners = () => {
    const checkbtn = document.querySelectorAll(".cardStatus");
    
    checkbtn.forEach(btn => {
        btn.addEventListener("click", function(){
            console.log("zmacnuto checkbox")
            ;(0,_class_func__WEBPACK_IMPORTED_MODULE_0__.changeStatusTask)(btn.id.replace(/\D/g,''));
        })
    })
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
//import { navListeners } from "./todoapp";



//import {} from "/src/todoapp.js";




(0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.initialDraw)()


const navListeners = () => {
    const items = document.querySelectorAll(".navElements");
    items.forEach(item => {
        item.addEventListener("click", function() {clickOnElementMenu(item.id)})
    })
    
};




const clickOnElementMenu = (el)=>{
    
    switch (el){
        case "new task":
            (0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.delBtnListeners)();
            (0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.checkListeners)()
            if(_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.statusListeners.newTask){
                _src_dom_js__WEBPACK_IMPORTED_MODULE_1__.statusListeners.newTask=false;
                (0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInputCard)(); //shows input value crd
                (0,_class_func__WEBPACK_IMPORTED_MODULE_0__.newTaskButtonListener)(); //create task button to save data
                (0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.newTaskButtonListenerDOM)(); //create task button to manipulate dom
                (0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.newTaskExitButtonListenerDOM)(); //exit button listener
                

                
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
        (0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.removeAllTaskCards)()
        ;(0,_class_func__WEBPACK_IMPORTED_MODULE_0__.showTasks)()
        ;(0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.checkListeners)()
        ;(0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.delBtnListeners)()
    } 
};


navListeners()
;(0,_class_func__WEBPACK_IMPORTED_MODULE_0__.showTasks)()
;(0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.checkListeners)()
;(0,_src_dom_js__WEBPACK_IMPORTED_MODULE_1__.delBtnListeners)()













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUEsV0FBVyxlQUFlO0FBQ3NFO0FBQ3dHO0FBQ25MO0FBQ3JCLFlBQVk7Ozs7O0FBS1osd0RBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCw0QkFBNEI7QUFDL0UsS0FBSztBQUNMO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFlO0FBQzNCLFlBQVksMkRBQWM7QUFDMUIsZUFBZSxnRUFBdUI7QUFDdEMsZ0JBQWdCLGdFQUF1QjtBQUN2QyxnQkFBZ0IsNkRBQWdCLElBQUk7QUFDcEMsZ0JBQWdCLGtFQUFxQixJQUFJO0FBQ3pDLGdCQUFnQixxRUFBd0IsSUFBSTtBQUM1QyxnQkFBZ0IseUVBQTRCLElBQUk7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBa0I7QUFDMUIsUUFBUSx1REFBUztBQUNqQixRQUFRLDREQUFjO0FBQ3RCLFFBQVEsNkRBQWU7QUFDdkI7QUFDQTs7O0FBR0E7QUFDQSx1REFBUztBQUNULDREQUFjO0FBQ2QsNkRBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2xhc3MtZnVuYy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4jbmF2YmFye1xcbiAgICBcXG59XFxudWx7XFxuICAgIFxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5saXtcXG4gICAgbWFyZ2luOjIwcHggMDtcXG5cXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIFxcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDoyMHB4O1xcbn1cXG5cXG4udGFza0NhcmR7XFxuICAgIGJvcmRlcjoycHggc29saWQgZ3JlZW47XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG4jZXhpdE5ld1Rhc2tCdG57XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICByaWdodDo1cHg7XFxuICAgIHRvcDo1cHg7XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOztBQUVBO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFlBQVk7O0FBRWhCOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osUUFBUTtBQUNaOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxPQUFPOztBQUVYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuI25hdmJhcntcXG4gICAgXFxufVxcbnVse1xcbiAgICBcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxubGl7XFxuICAgIG1hcmdpbjoyMHB4IDA7XFxuXFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgXFxufVxcblxcbiNjb250ZW50e1xcbiAgICBcXG4gICAgd2lkdGg6IDEwMDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6MjBweDtcXG59XFxuXFxuLnRhc2tDYXJke1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIGdyZWVuO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuI2V4aXROZXdUYXNrQnRue1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgcmlnaHQ6NXB4O1xcbiAgICB0b3A6NXB4O1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2luaXRpYWxEcmF3LCBjcmVhdGVUYXNrQ2FyZCwgbmV3VGFza0lucHV0Q2FyZCwgbmV3VGFza0J1dHRvbkxpc3RlbmVyRE9NfSBmcm9tIFwiL3NyYy9kb20uanNcIjtcblxuXG5cbmxldCB0YXNrQXJyYXkgPSBbXTtcblxuY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrLCBwcm9qZWN0LGRhdGUsIGRlc2NyaXB0aW9uLCBzdGF0dXMpID0+IHtcblxuICAgIGNvbnN0IG9iaiA9IHt0YXNrLCBwcm9qZWN0LGRhdGUsIGRlc2NyaXB0aW9uLCBzdGF0dXN9XG4gICAgY2hlY2tMY2xTdG9yYWdlKClcbiAgICB0YXNrQXJyYXkucHVzaChvYmopXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrRGF0YVwiLCBKU09OLnN0cmluZ2lmeSh0YXNrQXJyYXkpKVxuICAgIHRhc2tBcnJheSA9IFtdXG59XG5cbmNvbnN0IGNoZWNrTGNsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrRGF0YUpTT04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tEYXRhXCIpO1xuICAgIGlmKHRhc2tEYXRhSlNPTikgeyAgXG4gICAgICAgIGNvbnN0IHRhc2tzRnJvbU1lbW9yeSA9IEpTT04ucGFyc2UodGFza0RhdGFKU09OKTtcbiAgICAgICAgdGFza0FycmF5ID0gdGFza3NGcm9tTWVtb3J5XG4gICAgICAgIH1cbn1cblxuXG5cbmNvbnN0IG5ld1Rhc2tCdXR0b25MaXN0ZW5lciA9KCk9PntcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0VGFza0J0blwiKTtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrSW5wdXRcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdElucHV0XCIpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0RhdGVJbnB1dFwiKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdEZXNjcmlwdGlvbklucHV0XCIpXG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIilcbiAgICBcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Y3JlYXRlVGFzayh0YXNrLnZhbHVlLCBwcm9qZWN0LnZhbHVlLCBkYXRlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgc3RhdHVzLmNoZWNrZWQpfSlcblxufVxuXG5jb25zdCBzaG93VGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3NEYXRhSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza0RhdGFcIik7XG4gICAgaWYgKHRhc2tzRGF0YUpTT04pIHtcbiAgICAgICAgY29uc3QgdGFza3NEYXRhICA9IEpTT04ucGFyc2UodGFza3NEYXRhSlNPTik7XG4gICAgICAgIHRhc2tzRGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCk9PntcbiAgICAgICAgY3JlYXRlVGFza0NhcmQoaW5kZXgsIGVsZW1lbnQudGFzaywgZWxlbWVudC5wcm9qZWN0LCBlbGVtZW50LmRhdGUsZWxlbWVudC5kZXNjcmlwdGlvbiwgZWxlbWVudC5zdGF0dXNcbiAgICAgICAgKX0pXG4gICAgfSBlbHNlIHsgY29uc29sZS5sb2coXCJub3RoaW5nIGluIHN0b3JhZ2UgeWV0XCIpfVxuICAgICAgICBcbn1cblxuLy9sb2FkcyB0YXNrIGFycmF5IGZyb20gbG9jYWxTdG9yYWdlLCByZW1vdmUgdGFzayBhdCBnaXZlbiBpbmRleCBhbmQgc2F2ZSBpdCB0byBsb2NhbCBzdG9yYWdlXG5jb25zdCBkZWxUYXNrID0gKG4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIk4gamVcIiArIG4pXG4gICAgY29uc3QgdGFza3NEYXRhSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza0RhdGFcIik7XG4gICAgY29uc3QgdGFza3NEYXRhICA9IEpTT04ucGFyc2UodGFza3NEYXRhSlNPTik7XG4gICAgdGFza3NEYXRhLnNwbGljZShuLCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tEYXRhXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzRGF0YSkpXG59XG5cblxuY29uc3QgY2hhbmdlU3RhdHVzVGFzayA9IChuKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJOIGNoYW5nZSBzdGF0dXMgamVcIiArIG4pXG4gICAgY29uc3QgdGFza3NEYXRhSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza0RhdGFcIik7XG4gICAgY29uc3QgdGFza3NEYXRhICA9IEpTT04ucGFyc2UodGFza3NEYXRhSlNPTik7XG5cblxuICAgIGlmKHRhc2tzRGF0YVtuXS5zdGF0dXM9PWZhbHNlKXtcbiAgICAgICAgdGFza3NEYXRhW25dLnN0YXR1cz10cnVlXG4gICAgfVxuICAgIGVsc2UgaWYoIHRhc2tzRGF0YVtuXS5zdGF0dXM9PXRydWUpe1xuICAgICAgICB0YXNrc0RhdGFbbl0uc3RhdHVzPWZhbHNlXG4gICAgfVxuICAgIFxuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0RhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGFza3NEYXRhKSlcblxufVxuXG5cblxuZXhwb3J0e2NyZWF0ZVRhc2ssIHRhc2tBcnJheSxzaG93VGFza3MsIG5ld1Rhc2tCdXR0b25MaXN0ZW5lciwgZGVsVGFzaywgY2hhbmdlU3RhdHVzVGFza30iLCJpbXBvcnQge3Nob3dUYXNrcywgZGVsVGFzaywgY2hhbmdlU3RhdHVzVGFzayB9IGZyb20gXCIuL2NsYXNzLWZ1bmNcIjtcblxubGV0IHN0YXR1c0xpc3RlbmVycyA9IHtcbiAgICBuZXdUYXNrIDogdHJ1ZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHRleHQsIHBhcmVudElELCBzZWxmSUQsIHNlbGZDbGFzcyl7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgZWwuaWQgPSBzZWxmSURcbiAgICBlbC5jbGFzc05hbWUgPSBzZWxmQ2xhc3NcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJRCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dCh0eXBlLCBwYXJlbnRJRCwgc2VsZklELCBzZWxmQ2xhc3MsIGNoZWNrZWQpe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGU9dHlwZTtcbiAgICBpZih0eXBlPVwiY2hlY2tib3hcIil7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrZWQpXG4gICAgICAgIGNoZWNrZWQgPT0gdHJ1ZT8gaW5wdXQuY2hlY2tlZCA9IHRydWUgOmZhbHNlIFxuICAgIH0gXG4gICAgaW5wdXQuaWQ9c2VsZklEO1xuICAgIGlucHV0LmNsYXNzTmFtZT1zZWxmQ2xhc3M7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SUQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbnB1dClcbn1cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGluaXRpYWxEcmF3KCl7XG4gICAgY3JlYXRlTmF2KCk7XG4gICAgLy9uYXZMaXN0ZW5lcnMoKTtcbn1cblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID1bXCJuZXcgdGFza1wiLCBcInNob3cgcHJvamVjdHNcIiwgXCJkb25lIHRhc2tzXCIsIFwic2hvdyBhbGwgdGFza3NcIl07XG4gICAgY3JlYXRlRWxlbWVudChcInVsXCIsIFwiXCIsIFwibmF2YmFyXCIsIFwidWxOYXZcIiwgXCJ1bE5hdlwiKVxuICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpe1xuICAgICAgICBjcmVhdGVFbGVtZW50KFwibGlcIiwgaXRlbSwgXCJ1bE5hdlwiLCBpdGVtLCBcIm5hdkVsZW1lbnRzXCIpXG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlVGFza0NhcmQgPSAobiwgdGFzaywgcHJvamVjdCxkYXRlLCBkZXNjcmlwdGlvbiwgc3RhdHVzKSA9PiB7XG4gICAgLy90eXBlLCB0ZXh0LCBwYXJlbnRJRCwgc2VsZklELCBzZWxmQ2xhc3NcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCBcImNvbnRlbnRcIiwgXCJjYXJkXCIgKyBuLCBcInRhc2tDYXJkXCIpXG4gICAgXG4gICAgY29uc3QgdGFza0xpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiY2FyZFwiICsgbiwgXCJ0YXNrTGluZVwiICsgbiwgXCJjYXJkTGluZVwiKVxuICAgIGNvbnN0IHRhc2tMYWJlbSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiVEFTSzogXCIsIFwidGFza0xpbmVcIiArIG4sIFwidGFza0xhYmVsXCIgKyBuLCBcImNhcmRMYWJlbFwiKVxuICAgIGNvbnN0IHRhc2tUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIix0YXNrICwgXCJ0YXNrTGluZVwiICsgbiwgXCJ0YXNrTmFtZVwiICsgbiwgXCJjYXJkVGV4dFwiKVxuXG4gICAgY29uc3QgcHJvamVjdExpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiY2FyZFwiICsgbiwgXCJwcm9qZWN0TGluZVwiICsgbiwgXCJjYXJkTGluZVwiKVxuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiUFJPSkVDVDogXCIsIFwicHJvamVjdExpbmVcIiArIG4sIFwicHJvamVjdExhYmVsXCIgKyBuLCBcImNhcmRMYWJlbFwiKVxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gY3JlYXRlRWxlbWVudChcInBcIiwgcHJvamVjdCwgXCJwcm9qZWN0TGluZVwiICsgbiwgXCJwcm9qZWN0TmFtZVwiICsgbiwgXCJjYXJkVGV4dFwiKVxuXG4gICAgY29uc3QgZGF0ZUxpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiY2FyZFwiICsgbiwgXCJkYXRlTGluZVwiICsgbiwgXCJjYXJkTGluZVwiKVxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiRFVFIERBVEU6IFwiLCBcImRhdGVMaW5lXCIgKyBuLCBcImRhdGVMYWJlbFwiICsgbiwgXCJjYXJkTGFiZWxcIilcbiAgICBjb25zdCBkYXRlVmFsdWUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBkYXRlLCBcImRhdGVMaW5lXCIgKyBuLCBcImRhdGVWYWx1ZVwiICsgbiwgXCJjYXJkVGV4dFwiKVxuXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiY2FyZFwiICsgbiwgXCJkZXNjcmlwdGlvbkxpbmVcIiArIG4sIFwiY2FyZExpbmVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiREVTQ1JJUFRJT046IFwiLCBcImRlc2NyaXB0aW9uTGluZVwiICsgbiwgXCJkZXNjcmlwdGlvbkxhYmVsXCIgKyBuLCBcImNhcmRMYWJlbFwiKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIGRlc2NyaXB0aW9uLCBcImRlc2NyaXB0aW9uTGluZVwiKyBuLCBcImRlc2NyaXB0aW9uVGV4dFwiICsgbiwgXCJjYXJkVGV4dFwiKSBcblxuICAgIGNvbnN0IHN0YXR1c0xpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiY2FyZFwiICsgbiwgXCJzdGF0dXNMaW5lXCIgKyBuLCBcImNhcmRMaW5lXCIpO1xuICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJET05FOiBcIiwgXCJzdGF0dXNMaW5lXCIgKyBuLCBcInN0YXR1c0xhYmVsXCIgKyBuLCBcImNhcmRMYWJlbFwiKVxuICAgIC8vKHR5cGUsIHBhcmVudElELCBzZWxmSUQsIHNlbGZDbGFzcyl7XG4gICAgY29uc3Qgc3RhdHVzRG9uZSA9IGNyZWF0ZUlucHV0KFwiY2hlY2tib3hcIiwgXCJzdGF0dXNMaW5lXCIgKyBuLFwic3RhdHVzXCIgKyBuLCBcImNhcmRTdGF0dXNcIiwgc3RhdHVzKSBcblxuICAgIC8vdHlwZSwgdGV4dCwgcGFyZW50SUQsIHNlbGZJRCwgc2VsZkNsYXNzXG4gICAgY29uc3QgZGVsQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIkRlbGV0ZSBUYXNrXCIsIFwiY2FyZFwiICsgbiwgbiwgXCJkZWxCdG5cIilcblxufVxuXG5jb25zdCBuZXdUYXNrSW5wdXRDYXJkID0gKCkgPT4ge1xuXG4gICAgXG4gICAgLy90eXBlLCB0ZXh0LCBwYXJlbnRJRCwgc2VsZklELCBzZWxmQ2xhc3NcbiAgICBjb25zdCBuZXdUYXNrY2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJjb250ZW50XCIsIFwibmV3Q2FyZFRhc2tcIiwgXCJ0YXNrQ2FyZFwiKVxuXG4gICAgY29uc3QgZXhpdEJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJYXCIsIFwibmV3Q2FyZFRhc2tcIiwgXCJleGl0TmV3VGFza0J0blwiLCBcIkV4aXRCdG5cIilcblxuICAgIGNvbnN0IHRhc2tMaW5lID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCBcIm5ld0NhcmRUYXNrXCIsIFwibmV3VGFza0xpbmVcIiwgXCJjYXJkTGluZVwiKVxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiVEFTSzogXCIsIFwibmV3VGFza0xpbmVcIiwgXCJuZXdUYXNrTGFiZWxcIiwgXCJjYXJkTGFiZWxcIik7XG4gICAgLy8odHlwZSwgcGFyZW50SUQsIHNlbGZJRCwgc2VsZkNsYXNzKVxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGNyZWF0ZUlucHV0KFwidGV4dFwiLCBcIm5ld1Rhc2tMaW5lXCIsIFwibmV3VGFza0lucHV0XCIsIFwidGFza0lucHV0XCIpXG5cbiAgICBjb25zdCBwcm9qZWN0TGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJuZXdDYXJkVGFza1wiLCBcIm5ld1Byb2plY3RMaW5lXCIsIFwiY2FyZExpbmVcIilcbiAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcIlBST0pFQ1Q6IFwiLCBcIm5ld1Byb2plY3RMaW5lXCIsIFwibmV3UHJvamVjdExhYmVsXCIsIFwiY2FyZExhYmVsXCIpO1xuICAgIC8vKHR5cGUsIHBhcmVudElELCBzZWxmSUQsIHNlbGZDbGFzcylcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBjcmVhdGVJbnB1dChcInRleHRcIiwgXCJuZXdQcm9qZWN0TGluZVwiLCBcIm5ld1Byb2plY3RJbnB1dFwiLCBcInRhc2tJbnB1dFwiKVxuXG4gICAgY29uc3QgZGF0ZUxpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwibmV3Q2FyZFRhc2tcIiwgXCJuZXdEYXRlTGluZVwiLCBcImNhcmRMaW5lXCIpXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJERFVFIERBVEU6IFwiLCBcIm5ld0RhdGVMaW5lXCIsIFwibmV3RGF0ZUxhYmVsXCIsIFwiY2FyZExhYmVsXCIpO1xuICAgIC8vKHR5cGUsIHBhcmVudElELCBzZWxmSUQsIHNlbGZDbGFzcylcbiAgICBjb25zdCBpbnB1dERhdGUgPSBjcmVhdGVJbnB1dChcImRhdGVcIiwgXCJuZXdEYXRlTGluZVwiLCBcIm5ld0RhdGVJbnB1dFwiLCBcImRhdGVDYWxlbmRhclwiKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MaW5lID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCBcIm5ld0NhcmRUYXNrXCIsIFwibmV3RGVzY3JpcHRpb25MaW5lXCIsIFwiY2FyZExpbmVcIilcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJEZXNjcmlwdGlvbjogXCIsIFwibmV3RGVzY3JpcHRpb25MaW5lXCIsIFwibmV3RGVzY3JpcHRpb25MYWJlbFwiLCBcImNhcmRMYWJlbFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIFwiXCIsIFwibmV3RGVzY3JpcHRpb25MaW5lXCIsIFwibmV3RGVzY3JpcHRpb25JbnB1dFwiLCBcInRhc2tJbnB1dFwiKTtcblxuXG4gICAgY29uc3Qgc3RhdHVzTGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJuZXdDYXJkVGFza1wiLCBcInN0YXR1c0xpbmVcIiwgXCJjYXJkTGluZVwiKTtcbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiRE9ORTogXCIsIFwic3RhdHVzTGluZVwiLCBcInN0YXR1c0xhYmVsXCIsIFwiY2FyZExhYmVsXCIpXG4gICAgLy8odHlwZSwgcGFyZW50SUQsIHNlbGZJRCwgc2VsZkNsYXNzKXtcbiAgICBcbiAgICBjb25zdCBzdGF0dXNEb25lID0gY3JlYXRlSW5wdXQoXCJjaGVja2JveFwiLCBcInN0YXR1c0xpbmVcIixcInN0YXR1c1wiLCBcImNhcmRTdGF0dXNcIikgXG5cbiAgICAvL3R5cGUsIHRleHQsIHBhcmVudElELCBzZWxmSUQsIHNlbGZDbGFzc1xuICAgIGNvbnN0IGlucHV0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIkNyZWF0ZSBUYXNrXCIsIFwibmV3Q2FyZFRhc2tcIiwgXCJpbnB1dFRhc2tCdG5cIiwgXCJidG5cIilcbn1cblxuY29uc3QgbmV3VGFza0J1dHRvbkxpc3RlbmVyRE9NID0gKCkgPT57XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFRhc2tCdG5cIik7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Q2FyZFRhc2tcIilcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgIC8vZW5hYmxlcyBvcGVuaW5nIFwibmV3IHRhc2sgY2FyZFwiIGFnYWluXG4gICAgICAgIHN0YXR1c0xpc3RlbmVycy5uZXdUYXNrPXRydWU7XG4gICAgICAgIHJlbW92ZUFsbFRhc2tDYXJkcygpXG4gICAgICAgIHNob3dUYXNrcygpXG4gICAgICAgIGRlbEJ0bkxpc3RlbmVycygpXG5cbiAgICB9KVxuXG59XG5cbmNvbnN0IG5ld1Rhc2tFeGl0QnV0dG9uTGlzdGVuZXJET00gPSAoKSA9PntcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4aXROZXdUYXNrQnRuXCIpO1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0NhcmRUYXNrXCIpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgICAvL2VuYWJsZXMgb3BlbmluZyBcIm5ldyB0YXNrIGNhcmRcIiBhZ2FpblxuICAgICAgICBzdGF0dXNMaXN0ZW5lcnMubmV3VGFzaz10cnVlO1xuICAgIH0pXG59XG5cbmNvbnN0IHJlbW92ZUFsbFRhc2tDYXJkcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza0NhcmRcIik7XG4gICAgY29uc29sZS5sb2codGFza0NhcmQpXG4gICAgdGFza0NhcmQuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICB9KVxufVxuXG5jb25zdCBkZWxCdG5MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsQnRuXCIpO1xuICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInptYWNudXRvIGRlbGV0ZVwiKVxuICAgICAgICAgICAgZGVsVGFzayhidG4uaWQpO1xuICAgICAgICAgICAgcmVtb3ZlQWxsVGFza0NhcmRzKCk7XG4gICAgICAgICAgICBzaG93VGFza3MoKTtcbiAgICAgICAgICAgIGRlbEJ0bkxpc3RlbmVycygpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmNvbnN0IGNoZWNrTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkU3RhdHVzXCIpO1xuICAgIFxuICAgIGNoZWNrYnRuLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ6bWFjbnV0byBjaGVja2JveFwiKVxuICAgICAgICAgICAgY2hhbmdlU3RhdHVzVGFzayhidG4uaWQucmVwbGFjZSgvXFxEL2csJycpKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cblxuICAgIFxuXG5cblxuZXhwb3J0IHtpbml0aWFsRHJhdywgY3JlYXRlVGFza0NhcmQsIG5ld1Rhc2tJbnB1dENhcmQsIG5ld1Rhc2tCdXR0b25MaXN0ZW5lckRPTSwgbmV3VGFza0V4aXRCdXR0b25MaXN0ZW5lckRPTSxzdGF0dXNMaXN0ZW5lcnMsIHJlbW92ZUFsbFRhc2tDYXJkcywgZGVsQnRuTGlzdGVuZXJzLCBjaGVja0xpc3RlbmVyc30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL2ltcG9ydCB7IG5hdkxpc3RlbmVycyB9IGZyb20gXCIuL3RvZG9hcHBcIjtcbmltcG9ydCB7IHRhc2tBcnJheSwgY3JlYXRlVGFzaywgbmV3VGFza0J1dHRvbkxpc3RlbmVyLCBzaG93VGFza3MsIGRlbFRhc2sgfSBmcm9tIFwiLi9jbGFzcy1mdW5jXCI7XG5pbXBvcnQge2luaXRpYWxEcmF3LCBjcmVhdGVUYXNrQ2FyZCwgbmV3VGFza0lucHV0Q2FyZCwgbmV3VGFza0J1dHRvbkxpc3RlbmVyRE9NLCBzdGF0dXNMaXN0ZW5lcnMsIG5ld1Rhc2tFeGl0QnV0dG9uTGlzdGVuZXJET00sIHJlbW92ZUFsbFRhc2tDYXJkcywgZGVsQnRuTGlzdGVuZXJzLCBjaGVja0xpc3RlbmVyc30gZnJvbSBcIi9zcmMvZG9tLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vaW1wb3J0IHt9IGZyb20gXCIvc3JjL3RvZG9hcHAuanNcIjtcblxuXG5cblxuaW5pdGlhbERyYXcoKVxuXG5cbmNvbnN0IG5hdkxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2RWxlbWVudHNcIik7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7Y2xpY2tPbkVsZW1lbnRNZW51KGl0ZW0uaWQpfSlcbiAgICB9KVxuICAgIFxufTtcblxuXG5cblxuY29uc3QgY2xpY2tPbkVsZW1lbnRNZW51ID0gKGVsKT0+e1xuICAgIFxuICAgIHN3aXRjaCAoZWwpe1xuICAgICAgICBjYXNlIFwibmV3IHRhc2tcIjpcbiAgICAgICAgICAgIGRlbEJ0bkxpc3RlbmVycygpO1xuICAgICAgICAgICAgY2hlY2tMaXN0ZW5lcnMoKVxuICAgICAgICAgICAgaWYoc3RhdHVzTGlzdGVuZXJzLm5ld1Rhc2spe1xuICAgICAgICAgICAgICAgIHN0YXR1c0xpc3RlbmVycy5uZXdUYXNrPWZhbHNlO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tJbnB1dENhcmQoKTsgLy9zaG93cyBpbnB1dCB2YWx1ZSBjcmRcbiAgICAgICAgICAgICAgICBuZXdUYXNrQnV0dG9uTGlzdGVuZXIoKTsgLy9jcmVhdGUgdGFzayBidXR0b24gdG8gc2F2ZSBkYXRhXG4gICAgICAgICAgICAgICAgbmV3VGFza0J1dHRvbkxpc3RlbmVyRE9NKCk7IC8vY3JlYXRlIHRhc2sgYnV0dG9uIHRvIG1hbmlwdWxhdGUgZG9tXG4gICAgICAgICAgICAgICAgbmV3VGFza0V4aXRCdXR0b25MaXN0ZW5lckRPTSgpOyAvL2V4aXQgYnV0dG9uIGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzaG93IHByb2plY3RzXCI6XG4gICAgICAgIC8vIGYgbmV3IHByb2pcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93aW5nIHByb2plY3RcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZG9uZVwiOlxuICAgICAgICAvLyBzaG93IG1lbW9yeSAtIGRvbmUgcHJvamVjdHNcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93IG1lIGRvbmUgcHJvamVjdHNcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2hvdyBhbGwgdGFza3NcIjpcbiAgICAgICAgcmVtb3ZlQWxsVGFza0NhcmRzKClcbiAgICAgICAgc2hvd1Rhc2tzKClcbiAgICAgICAgY2hlY2tMaXN0ZW5lcnMoKVxuICAgICAgICBkZWxCdG5MaXN0ZW5lcnMoKVxuICAgIH0gXG59O1xuXG5cbm5hdkxpc3RlbmVycygpXG5zaG93VGFza3MoKVxuY2hlY2tMaXN0ZW5lcnMoKVxuZGVsQnRuTGlzdGVuZXJzKClcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
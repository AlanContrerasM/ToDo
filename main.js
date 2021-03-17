/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myModule.js */ \"./src/myModule.js\");\n\n//import _ from 'lodash';//optional, must run npm install --save lodash\n\n\n\n\n_myModule_js__WEBPACK_IMPORTED_MODULE_0__.LogicModule.startUpProcess();\n\n\n\n// DisplayController.saySomething(\"HelloWorld\");\n\n\n\n\n\n\n//# sourceURL=webpack://ToDo/./src/index.js?");

/***/ }),

/***/ "./src/myModule.js":
/*!*************************!*\
  !*** ./src/myModule.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayController\": () => (/* binding */ DisplayController),\n/* harmony export */   \"LogicModule\": () => (/* binding */ LogicModule)\n/* harmony export */ });\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ \"./src/toDo.js\");\n//myModule.js\n\n\n\n//A Module for editing DOM\nconst DisplayController  = (()=>{\n\n    const content = document.querySelector(\"#content\");\n\n    let aVariable = \"hello\"\n\n    //privates is better to declare starting with _\n    //set popup to visible\n    let _showPopUp = (something)=>{\n        console.log(something);\n    }\n\n    let saySomething = (something) =>{\n        _showPopUp(something);\n    }\n\n    const createEventListeners = () =>{\n        const btnShowProjectForm = document.querySelector(\"#btnShowProjectForm\");\n        const btnCreateProject = document.querySelector(\"#btnCreateProject\");\n\n        const projectFormDiv = document.querySelector(\"#projectFormDiv\");\n        const formProject = document.querySelector(\"#formProject\");\n\n        const taskFormDiv = document.querySelector(\"#taskFormDiv\");\n\n        // event listener for create project\n        btnShowProjectForm.addEventListener(\"click\", (e)=>{\n            console.log(\"pressed btnShowProjectForm\");\n            projectFormDiv.classList.remove(\"hidden\");\n        })\n\n        btnCreateProject.addEventListener(\"click\", (e)=>{\n            console.log(\"pressed create project\")\n            e.preventDefault();\n            let isCorrect = formProject.checkValidity();\n            formProject.reportValidity();\n            if(isCorrect){\n\n            }\n        })\n        \n\n    }\n\n    const showProjects = (projectsArr) =>{\n        // console.log(projectsArr);\n        content.innerHTML = \"\";\n        projectsArr.forEach((project)=>{\n            const projectDiv = document.createElement(\"div\");\n\n            projectDiv.classList.add(\"project\");\n            projectDiv.innerHTML = `<h2>${project.getTitle()}</h2>`\n\n            project.getList().forEach((task)=>{\n                const taskDiv = document.createElement(\"div\");\n\n                taskDiv.classList.add(\"task\");\n\n                taskDiv.innerHTML = `<h3>${task.getTitle()}</h3>`;\n                taskDiv.innerHTML += `<p>${task.getDesc()}</p>`\n                taskDiv.innerHTML += `<p>${task.getDueDate()}</p>`\n                taskDiv.innerHTML += `<p>Priority: ${task.getPriority()}</p>`\n                taskDiv.innerHTML += `<p>${task.getNotes()}</p>`\n                projectDiv.appendChild(taskDiv);\n            })\n            \n\n            content.appendChild(projectDiv);\n        })\n        \n\n\n    }\n\n    return {saySomething, showProjects, createEventListeners}\n})();\n\n\nconst LogicModule = (()=>{\n\n    let projects = [];\n\n    const startUpProcess = () =>{\n\n        //local Storage stuff\n        if(checkLocalStorage()){\n            _populateProjectsArr();\n\n        }else{\n            console.log(\"no MyProjects in localStorage, or empty\");\n            _createDefaultProj();\n        }\n\n\n        DisplayController.showProjects(projects);\n        DisplayController.createEventListeners();\n\n\n\n    }\n\n    const _populateProjectsArr = () =>{\n\n        projects=[]; //emptying projects array\n\n        let myProjectsStorage = localStorage.getItem(\"myProjects\").split(\"#:#:#\");\n\n        myProjectsStorage.pop();\n        // console.log(myProjectsStorage);\n\n        myProjectsStorage.forEach((project)=>{\n            //getting the project name, and eliminating from string\n            let projectTitle = \"\";\n            let taskArr = [];\n            let i = project.indexOf(\"#-#\")\n            projectTitle = project.slice(0,i);\n            project = project.substr(i + 3);\n            \n            //getting all the tasks from project and creating them\n            const tasks = [];\n            taskArr = project.split(\"#-#\");\n            // console.log(taskArr);\n            taskArr.pop();\n            taskArr.forEach((task)=>{\n                let details = task.split(\"-#-\");\n                // console.log(details);\n                tasks.push((0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo)(details[0], details[1], details[2], Number(details[3]),details[4]));\n            })\n\n            projects.push((0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDoProject)( projectTitle, tasks));\n            // console.log(projects);\n\n\n        })\n\n\n    }\n\n    const _addProject = (project) =>{\n        projects.push(project);\n\n        DisplayController.showProjects(projects);\n\n        _populateLocalStorage();\n\n    }\n\n    const _populateLocalStorage = () =>{\n        let newString = \"\";\n        // console.log(projects[0].getTitle());\n        projects.forEach((project)=>{\n            \n            newString += project.getTitle() + \"#-#\";\n            project.getList().forEach(task =>{\n                newString += task.getTitle() + \"-#-\"\n                +task.getDesc() + \"-#-\"\n                +task.getDueDate() + \"-#-\"\n                +task.getPriority() + \"-#-\"\n                +task.getNotes() + \"#-#\";\n            });\n            newString += \"#:#:#\"\n        })\n\n        // console.log(newString);\n\n        localStorage.setItem(\"myProjects\",newString)\n        //localStorage.removeItem(\"myProjects\");\n    }\n\n    const _createDefaultProj = () =>{\n        _addProject((0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDoProject)(\"My Project\", (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo)(\"My Task\"\n                                                    , \"Must be done immediately, priority 5!\"\n                                                    , \"A date\"\n                                                    , 5\n                                                    , \"The world is ending!\")));\n    }\n\n    const checkLocalStorage = () =>{\n        if(localStorage.getItem(\"myProjects\") == null){      \n            return false;\n        }else if(localStorage.getItem(\"myProjects\") == \"\"){\n            return false;\n        }else{\n            return true;\n        }\n    }\n\n    return{startUpProcess}\n})();\n\n\n\n\n//# sourceURL=webpack://ToDo/./src/myModule.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo),\n/* harmony export */   \"ToDoCheck\": () => (/* binding */ ToDoCheck),\n/* harmony export */   \"ToDoProject\": () => (/* binding */ ToDoProject)\n/* harmony export */ });\n//A factory function\n\nconst ToDo = (title, description, dueDate, priority, notes)=>{\n\n    const getTitle = () => title;\n    const getDesc = () => description;\n    const getDueDate = () => dueDate;\n    const getPriority = () => priority;\n    const getNotes = () => notes;\n\n\n    return{getTitle, getDesc, getDueDate, getPriority, getNotes};\n\n}\n\nconst ToDoCheck = (title, description, dueDate, priority = 5, notes, checklist)=>{\n\n    const {getTitle, getDesc, getDueDate, getPriority, getNotes} = \n        ToDo(title, description, dueDate, priority, notes);\n    \n        const getChecklist = () => checklist;\n\n    return{getTitle, getDesc, getDueDate, getPriority, getNotes, getChecklist};\n}\n\nconst ToDoProject = (title, toDoArr) =>{\n    let _list = [];\n    if(Array.isArray(toDoArr)){\n        _list = toDoArr;\n    }else{\n        _list.push(toDoArr);\n    }\n    const getTitle = () => title;\n    const setTitle = (newTitle) =>{ title = newTitle};\n    const getList = () => _list;\n    const setList = (list) => {_list = list};\n\n    return {getTitle, setTitle, getList, setList}\n\n\n}\n\n\n\n//# sourceURL=webpack://ToDo/./src/toDo.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
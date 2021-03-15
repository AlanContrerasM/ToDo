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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myModule.js */ \"./src/myModule.js\");\n\n//import _ from 'lodash';//optional, must run npm install --save lodash\n\n\n_myModule_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.saySomething(\"HelloWorld\");\nconst alan = (0,_myModule_js__WEBPACK_IMPORTED_MODULE_0__.Player)(\"Alan\");\nconsole.log(alan.getPlayer());\n\nfunction component() {\n    const element = document.createElement('div');\n  \n    // Lodash, imported\n    element.innerHTML = \"Hello World!\";\n  \n    return element;\n  }\n  \n  document.body.appendChild(component());\n\n//# sourceURL=webpack://ToDo/./src/index.js?");

/***/ }),

/***/ "./src/myModule.js":
/*!*************************!*\
  !*** ./src/myModule.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"DisplayController\": () => (/* binding */ DisplayController)\n/* harmony export */ });\n//myModule.js\n\n//A Module for editing\nconst DisplayController  = (()=>{\n    let aVariable = \"hello\"\n\n    //privates is better to declare starting with _\n    //set popup to visible\n    let _showPopUp = (something)=>{\n        console.log(something);\n    }\n\n    let saySomething = (something) =>{\n        _showPopUp(something);\n    }\n\n    return {saySomething}\n})();\n\n\n//A factory function\nconst Player = (human = \"Hi Player\") =>{\n    //human param is boolean, false for computers, stored in closure\n    let counter = 0;\n    //setting default choices\n    let choice = \"X\";\n    let player = human;\n    const setChoice = (newChoice) =>{ choice = newChoice};\n    const getChoice = () => {return choice};\n    const addCounter = () => {counter++};\n    const getCounter = () => {return counter};\n    const getPlayer = () => player;\n\n    return {setChoice, getChoice, addCounter, getCounter, getPlayer}\n}\n\n//const human = Player(\"Alan\");\n\n\n\n//# sourceURL=webpack://ToDo/./src/myModule.js?");

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
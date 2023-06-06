/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const mylist = [\r\n  {\r\n    description: 'house chores',\r\n    completed: false,\r\n    index: 1,\r\n  },\r\n  {\r\n    description: 'side project',\r\n    completed: false,\r\n    index: 2,\r\n  },\r\n  {\r\n    description: 'today projects',\r\n    completed: true,\r\n    index: 3,\r\n  },\r\n  {\r\n    description: '4hackerranck challenges',\r\n    completed: false,\r\n    index: 4,\r\n  },\r\n];\r\n\r\nconst getmylist = () => {\r\n  const listGroup = document.querySelector('.todo-group');\r\n  mylist.map((item) => {\r\n    const listElement = document.createElement('li');\r\n    listElement.classList = 'todo-list todo-item';\r\n    listElement.id = `${item.index}`;\r\n    listElement.innerHTML = `\r\n        <button type=\"button\" class=${\r\n  item.completed === true ? 'checked-button' : 'unchecked-button'\r\n}>\r\n        <i class=\"fa-solid fa-check\"></i></button>\r\n        <input type=\"text\" class=${\r\n  item.completed === true ? 'decoration' : 'undecoration'\r\n}  value=\"${item.description}\">\r\n        <span class=\"todo-item-more\"><i class=\"fa-solid fa-ellipsis-vertical\"></i></span>\r\n    `;\r\n    return listGroup.appendChild(listElement);\r\n  });\r\n};\r\nwindow.addEventListener('load', getmylist);\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
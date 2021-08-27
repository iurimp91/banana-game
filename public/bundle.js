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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("// const canvasWidth = 375;\n// const canvasHeight = window.innerHeight;\nvar canvas = document.querySelector(\"#canvas\");\ncanvas.width = 375;\ncanvas.height = 600;\ncanvas.style.backgroundColor = \"#181820\";\ncanvas.style.border = \"1px solid #464646\";\nvar context = canvas.getContext(\"2d\");\nvar image = new Image();\nimage.src = \"../sprites/banana.png\";\nimage.onload = function () {\n    context.beginPath();\n    context.drawImage(image, 375 / 2, 300);\n    context.fill();\n};\nfunction draw() {\n    context.strokeRect(375 / 2, 300, 100, 100);\n    context.drawImage(image, 375 / 2, 300, 100, 100);\n}\ndraw();\n\n\n//# sourceURL=webpack://projeto-bananagame/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
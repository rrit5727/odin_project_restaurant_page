/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayAbout.js"
/*!*****************************!*\
  !*** ./src/displayAbout.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst displayAbout = () => {\n\n  const content = document.getElementById(\"content\");\n  // content.textContent = \"\";\n\n  const contactHeading = document.createElement(\"H1\");\n  contactHeading.textContent = \"Contact us\"\n\n  const contactNumber = document.createElement(\"h2\");\n  contactNumber.textContent = \"Telephone: 041234567\"\n\n  const contactEmail = document.createElement(\"h2\");\n  contactEmail.textContent = \"Email: PinoDeVino@email.com\";\n\n  content.append(contactHeading, contactNumber, contactEmail,)\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAbout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGlzcGxheUFib3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGlzcGxheUFib3V0LmpzP2NmZGMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBkaXNwbGF5QWJvdXQgPSAoKSA9PiB7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgLy8gY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSDFcIik7XG4gIGNvbnRhY3RIZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCJcblxuICBjb25zdCBjb250YWN0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gXCJUZWxlcGhvbmU6IDA0MTIzNDU2N1wiXG5cbiAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOiBQaW5vRGVWaW5vQGVtYWlsLmNvbVwiO1xuXG4gIGNvbnRlbnQuYXBwZW5kKGNvbnRhY3RIZWFkaW5nLCBjb250YWN0TnVtYmVyLCBjb250YWN0RW1haWwsKVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5QWJvdXQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/displayAbout.js\n\n}");

/***/ },

/***/ "./src/displayHeading.js"
/*!*******************************!*\
  !*** ./src/displayHeading.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza.png */ \"./src/pizza.png\");\n\n\nconst displayHeading = () => {\n\n  const contentElement = document.getElementById('content');\n  // contentElement.textContent = '';\n\n  const heading = document.createElement('H1');\n  heading.textContent = \"Welcome to Pino De Vinos\";\n\n  const image = document.createElement('img');\n  image.src = _pizza_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  const text = document.createElement('p');\n  text.textContent = \"Come visit our restaurant!\";\n\n  contentElement.appendChild(heading);\n  contentElement.appendChild(image);\n  contentElement.appendChild(text);\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHeading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGlzcGxheUhlYWRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7O0FBRWhDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGNBQWMsdUNBQUs7O0FBRW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxpRUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGlzcGxheUhlYWRpbmcuanM/MDg3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGl6emEgZnJvbSAnLi9waXp6YS5wbmcnO1xuXG5jb25zdCBkaXNwbGF5SGVhZGluZyA9ICgpID0+IHtcblxuICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIC8vIGNvbnRlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0gxJyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gUGlubyBEZSBWaW5vc1wiO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLnNyYyA9IHBpenphO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIkNvbWUgdmlzaXQgb3VyIHJlc3RhdXJhbnQhXCI7XG5cbiAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhlYWRpbmc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/displayHeading.js\n\n}");

/***/ },

/***/ "./src/displayMenu.js"
/*!****************************!*\
  !*** ./src/displayMenu.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst displayMenu = () => {\n\n  const content = document.getElementById(\"content\");\n  // content.textContent = \"\";\n\n  const heading = document.createElement(\"H1\");\n  heading.textContent = \"Menu\";\n\n  const itemHeading1 = document.createElement(\"H2\");\n  itemHeading1.textContent = \"Eggs and Bacon\";\n\n  const itemDescription1 = document.createElement('p')\n  itemDescription1.textContent = \"Yummy eggs and bacon cooked your way.\";\n  \n  const itemHeading2 = document.createElement(\"H2\");\n  itemHeading2.textContent = \"Honey Porridge\";\n  \n  const itemDescription2 = document.createElement('p')\n  itemDescription2.textContent = \"Organic porridge served with Manuka Honey.\";\n\n  content.append(heading, itemHeading1, itemDescription1, itemHeading2, itemDescription2);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGlzcGxheU1lbnUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9kaXNwbGF5TWVudS5qcz9jM2MxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGlzcGxheU1lbnUgPSAoKSA9PiB7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgLy8gY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIGNvbnN0IGl0ZW1IZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIMlwiKTtcbiAgaXRlbUhlYWRpbmcxLnRleHRDb250ZW50ID0gXCJFZ2dzIGFuZCBCYWNvblwiO1xuXG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgaXRlbURlc2NyaXB0aW9uMS50ZXh0Q29udGVudCA9IFwiWXVtbXkgZWdncyBhbmQgYmFjb24gY29va2VkIHlvdXIgd2F5LlwiO1xuICBcbiAgY29uc3QgaXRlbUhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkgyXCIpO1xuICBpdGVtSGVhZGluZzIudGV4dENvbnRlbnQgPSBcIkhvbmV5IFBvcnJpZGdlXCI7XG4gIFxuICBjb25zdCBpdGVtRGVzY3JpcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGl0ZW1EZXNjcmlwdGlvbjIudGV4dENvbnRlbnQgPSBcIk9yZ2FuaWMgcG9ycmlkZ2Ugc2VydmVkIHdpdGggTWFudWthIEhvbmV5LlwiO1xuXG4gIGNvbnRlbnQuYXBwZW5kKGhlYWRpbmcsIGl0ZW1IZWFkaW5nMSwgaXRlbURlc2NyaXB0aW9uMSwgaXRlbUhlYWRpbmcyLCBpdGVtRGVzY3JpcHRpb24yKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lbnU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/displayMenu.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayHeading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHeading */ \"./src/displayHeading.js\");\n/* harmony import */ var _displayMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayMenu */ \"./src/displayMenu.js\");\n/* harmony import */ var _displayAbout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayAbout */ \"./src/displayAbout.js\");\n\n\n\nconsole.log(\"Hello\")\n\n\n\nconst content = document.getElementById(\"content\");\n\nconst homeButton = document.getElementById(\"homeButton\");\nconst menuButton = document.getElementById(\"menuButton\");\nconst aboutButton = document.getElementById(\"aboutButton\");\n\n(0,_displayHeading__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nhomeButton.addEventListener('click', () => {\n  content.textContent = \"\";\n  (0,_displayHeading__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nmenuButton.addEventListener('click', () => {\n  content.textContent = \"\";\n  (0,_displayMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\naboutButton.addEventListener('click', () => {\n  content.textContent = \"\";\n  (0,_displayAbout__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n\n\n// displayHeading();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4QztBQUNOO0FBQ0U7QUFDMUM7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQWM7O0FBRWQ7QUFDQTtBQUNBLEVBQUUsMkRBQWM7QUFDaEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSx3REFBVztBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUseURBQVk7QUFDZCxDQUFDOzs7OztBQUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGxheUhlYWRpbmcgZnJvbSBcIi4vZGlzcGxheUhlYWRpbmdcIjtcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tIFwiLi9kaXNwbGF5TWVudVwiO1xuaW1wb3J0IGRpc3BsYXlBYm91dCBmcm9tIFwiLi9kaXNwbGF5QWJvdXRcIjtcbmNvbnNvbGUubG9nKFwiSGVsbG9cIilcblxuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVCdXR0b25cIik7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51QnV0dG9uXCIpO1xuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0QnV0dG9uXCIpO1xuXG5kaXNwbGF5SGVhZGluZygpO1xuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgZGlzcGxheUhlYWRpbmcoKTtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgZGlzcGxheU1lbnUoKTtcbn0pO1xuXG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGRpc3BsYXlBYm91dCgpO1xufSk7XG5cblxuXG5cbi8vIGRpc3BsYXlIZWFkaW5nKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/pizza.png"
/*!***********************!*\
  !*** ./src/pizza.png ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca16875cbc17798401ae.png";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
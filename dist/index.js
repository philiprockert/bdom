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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar app = express();\nvar db = mysql.createConnection({\n    host: 'localhost:3306',\n    user: 'YES_BPO-BI',\n    password: '',\n    database: 'bdom'\n});\ndb.connect(function (err) {\n    if (err) {\n        console.error('Error al conectar a la base de datos:', err);\n    }\n    else {\n        console.log('Conexión a la base de datos MySQL establecida');\n    }\n});\nvar port = process.env.PORT || 3001;\napp.listen(port, function () {\n    console.log(\"Servidor Express escuchando en el puerto \".concat(port));\n});\nvar initialState = {\n    cart: [],\n    products: [\n        {\n            'id': '1',\n            'user': 'Felipe Rodriguez',\n            'password': '1234',\n            'telefono': 3167553547,\n            'email': 'philiprockert@gmail.com',\n        },\n        {\n            'id': '1',\n            'user': 'Felipe Rodriguez',\n            'password': 'Camiseta',\n            'telefono': 3167553547,\n            'email': 'philiprockert@gmail.com',\n        },\n        {\n            'id': '1',\n            'user': 'Felipe Rodriguez',\n            'password': 'Camiseta',\n            'telefono': 3167553547,\n            'email': 'philiprockert@gmail.com',\n        },\n        {\n            'id': '1',\n            'user': 'Felipe Rodriguez',\n            'password': 'Camiseta',\n            'telefono': 3167553547,\n            'email': 'philiprockert@gmail.com',\n        },\n        {\n            'id': '1',\n            'user': 'Felipe Rodriguez',\n            'password': 'Camiseta',\n            'telefono': 3167553547,\n            'email': 'philiprockert@gmail.com',\n        },\n        {\n            'id': '1',\n            'user': 'Felipe Rodriguez',\n            'password': 'Camiseta',\n            'telefono': 3167553547,\n            'email': 'philiprockert@gmail.com',\n        },\n    ],\n};\n\n\n//# sourceURL=webpack://pruebaexpress/./src/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
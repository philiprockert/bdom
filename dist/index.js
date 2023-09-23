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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar app = express();\nvar port = 3001;\napp.use(cors());\nvar db = mysql.createConnection({\n    host: 'localhost',\n    port: 3306,\n    user: 'root',\n    password: 'Dimebagphilip1971',\n    database: 'omnicom'\n});\n// Establecer conexión a la base de datos\ndb.connect(function (err) {\n    if (err) {\n        console.error('Error al conectar a la base de datos:', err);\n    }\n    else {\n        console.log('Conexión a la base de datos MySQL establecida');\n    }\n});\n// Definir la ruta y la lógica de consulta\napp.get('/', function (req, res) {\n    var query = 'SELECT * FROM usuario';\n    db.query(query, function (err, results) {\n        if (err) {\n            console.error('Error al obtener los datos:', err);\n            return res.status(500).json({ error: 'Error al obtener los datos' });\n        }\n        // Enviar los resultados como respuesta JSON\n        res.json(results);\n    });\n});\napp.listen(port, function () {\n    console.log(\"Servidor Express escuchando en el puerto \".concat(port));\n});\n\n\n//# sourceURL=webpack://pruebaexpress/./src/index.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

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
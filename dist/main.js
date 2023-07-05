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

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   getTodos: () => (/* binding */ getTodos),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser)\n/* harmony export */ });\nconst host = \"https://webdev-hw-api.vercel.app/api/v2/todos\";\r\n\r\nfunction getTodos ({token}) {\r\n    return fetch(host, {\r\n        method: \"GET\",\r\n        headers: {\r\n            Authorization: token,\r\n        },\r\n      })\r\n        .then((response) => {\r\n            if (response.status === 401) {\r\n               // password = prompt ('Введите верный пароль');\r\n               // fetchTodosAndRender();\r\n                throw new Error('Нет авторизации');\r\n            }\r\n          return response.json();\r\n        })\r\n}\r\n\r\nfunction deleteTodo({token, id}) {\r\n    return fetch(\"https://webdev-hw-api.vercel.app/api/todos/\" + id, {\r\n        method: \"DELETE\",\r\n        headers: {\r\n        Authorization: token,\r\n        },\r\n      })\r\n        .then((response) => {\r\n          return response.json();\r\n        })\r\n}\r\n\r\nfunction addTodo({token, text}) {\r\n    return fetch(host, {\r\n        method: \"POST\",\r\n        headers: {\r\n            Authorization: token,\r\n        },\r\n        body: JSON.stringify({\r\n        text,\r\n        }),\r\n    })\r\n        .then((response) => {\r\n        return response.json();\r\n        })\r\n}\r\n\r\nfunction loginUser({login, password}) {\r\n    return fetch(\"https://webdev-hw-api.vercel.app/api/user/login\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n        login,\r\n        password,\r\n        }),\r\n    })\r\n        .then((response) => {\r\n            if (response.status === 400) {\r\n                throw new Error ('Неверный логин или пароль');\r\n            }\r\n        return response.json();\r\n        })\r\n}\r\n\r\nfunction registerUser({login, name, password}) {\r\n    return fetch(\"https://webdev-hw-api.vercel.app/api/user\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n        login,\r\n        name,\r\n        password,\r\n        }),\r\n    })\r\n        .then((response) => {\r\n            if (response.status === 400) {\r\n                throw new Error ('Такой пользователь уже существует');\r\n            }\r\n        return response.json();\r\n        })\r\n}\n\n//# sourceURL=webpack://api-coding-live/./api.js?");

/***/ }),

/***/ "./components/login-component.js":
/*!***************************************!*\
  !*** ./components/login-component.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLoginComponent: () => (/* binding */ renderLoginComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./api.js\");\n\r\n\r\nfunction renderLoginComponent({appEl, setToken, fetchTodosAndRender}) {\r\n    let isLoginMode = true;\r\n\r\n    const renderForm = () => {\r\n\r\n        const appHtml = `\r\n        <h1>Список задач</h1>\r\n        <div class=\"form\">\r\n        <h3 class=\"form-title\">Форма ${isLoginMode ? 'входа' : 'регистрации'}</h3>\r\n        <div class=\"form-row\">\r\n        ${isLoginMode ? '' : `Имя:\r\n        <input type=\"text\" id=\"name-input\" class=\"input\"/>\r\n        <br>`}\r\n        \r\n        Логин:\r\n        <input type=\"text\" id=\"login-input\" class=\"input\"/>\r\n        <br>\r\n        Пароль:\r\n        <input type=\"password\" id=\"password-input\" class=\"input\"/>\r\n        </div>\r\n        <br>\r\n        <button class=\"button\" id=\"login-button\">${isLoginMode ? 'Войти' : 'Зарегистрироваться'}</button>\r\n        <br><br>\r\n        <button class=\"button\" id=\"toggle-button\">Перейти ${isLoginMode ? 'к регистрации' : 'ко входу'}</button>\r\n        </div>`;\r\n\r\n    \r\n        appEl.innerHTML = appHtml;\r\n\r\n        document.getElementById(\"login-button\").addEventListener('click', () => {\r\n\r\n            if (isLoginMode) {\r\n                const login = document.getElementById(\"login-input\").value;\r\n                const password = document.getElementById(\"password-input\").value;\r\n    \r\n                if (!login) {\r\n                    alert('Введите логин');\r\n                    return;\r\n                }\r\n    \r\n                if (!password) {\r\n                    alert('Введите пароль');\r\n                    return;\r\n                }\r\n                \r\n                setToken(\"Bearer dgc0boasc8as6g5g5k5o5s5w606g39o3cc3e83ek3ck3b43k38o\");\r\n                    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)({\r\n                        login: login, \r\n                        password: password,\r\n                    })\r\n                    .then((user) => {\r\n                        console.log(user);\r\n    \r\n                        setToken(`Bearer ${user.user.token}`);\r\n                        fetchTodosAndRender();\r\n                    })\r\n                    .catch(error => {\r\n                        // TODO: Выводить алерт красиво\r\n                        alert(error.message);\r\n                    });   \r\n            } else {\r\n\r\n                const login = document.getElementById(\"login-input\").value;\r\n                const name = document.getElementById(\"name-input\").value;\r\n                const password = document.getElementById(\"password-input\").value;\r\n    \r\n                if (!name) {\r\n                    alert('Введите имя');\r\n                    return;\r\n                }\r\n\r\n                if (!login) {\r\n                    alert('Введите логин');\r\n                    return;\r\n                }\r\n    \r\n                if (!password) {\r\n                    alert('Введите пароль');\r\n                    return;\r\n                }\r\n                \r\n                setToken(\"Bearer dgc0boasc8as6g5g5k5o5s5w606g39o3cc3e83ek3ck3b43k38o\");\r\n                (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)({\r\n                        login: login, \r\n                        name: name,\r\n                        password: password,\r\n                    })\r\n                    .then((user) => {\r\n                        console.log(user);\r\n    \r\n                        setToken(`Bearer ${user.user.token}`);\r\n                        fetchTodosAndRender();\r\n                    })\r\n                    .catch(error => {\r\n                        // TODO: Выводить алерт красиво\r\n                        alert(error.message);\r\n                    });   \r\n            };\r\n            \r\n\r\n        });\r\n\r\n        document.getElementById(\"toggle-button\").addEventListener('click', () => {\r\n            isLoginMode = !isLoginMode;\r\n            renderForm();\r\n        });\r\n    };\r\n\r\n    renderForm();\r\n\r\n}\n\n//# sourceURL=webpack://api-coding-live/./components/login-component.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _components_login_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login-component.js */ \"./components/login-component.js\");\n/* harmony import */ var _lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/formatDate/formatDate.js */ \"./lib/formatDate/formatDate.js\");\n\r\n\r\n\r\n\r\n\r\n    \r\n    let tasks = [];\r\n    // let password = prompt ('Введите пароль');//\"123456\"\r\n    let token = \"Bearer dgc0boasc8as6g5g5k5o5s5w606g39o3cc3e83ek3ck3b43k38o\";\r\n\r\n   token= null;\r\n\r\n    const fetchTodosAndRender = () => {\r\n      return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getTodos)({token}).then((responseData) => {\r\n          tasks = responseData.todos;\r\n          renderApp();\r\n        });\r\n    };\r\n\r\n    const renderApp = () => {\r\n        const appEl = document.getElementById(\"app\");\r\n        if (!token) {\r\n            \r\n            (0,_components_login_component_js__WEBPACK_IMPORTED_MODULE_1__.renderLoginComponent)({\r\n                appEl, \r\n                setToken: (newToken) => {\r\n                    token = newToken;\r\n                },\r\n                fetchTodosAndRender,\r\n            });\r\n            return;\r\n        }\r\n\r\n        // const formatDate = (date) => {\r\n        //     return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`};\r\n        const country = \"ru\";\r\n        const tasksHtml = tasks\r\n                .map((task) => {\r\n                return `\r\n                <li class=\"task\">\r\n                    <p class=\"task-text\">\r\n                    ${task.text} (Создал: ${task.user?.name ?? 'Неизвестно'})\r\n                    <button data-id=\"${task.id}\" class=\"button delete-button\">Удалить</button>\r\n                    </p>\r\n                    <p><i>Задача создана: ${country === \"ru\" ? (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__.formatDateToRu)(new Date(task.created_at)) : (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__.formatDateToUs)(new Date(task.created_at))}</i></p>\r\n                </li>`;\r\n        })\r\n        .join(\"\");\r\n\r\n        const appHtml = `\r\n                <h1>Список задач</h1>\r\n\r\n            <ul class=\"tasks\" id=\"list\">\r\n            <! --Список рендерится из JS —>\r\n            ${tasksHtml}\r\n            </ul>\r\n            <br />\r\n            <div class=\"form\">\r\n            <h3 class=\"form-title\">Форма добавления</h3>\r\n            <div class=\"form-row\">\r\n                Что нужно сделать:\r\n                <input\r\n                type=\"text\"\r\n                id=\"text-input\"\r\n                class=\"input\"\r\n                placeholder=\"Выпить кофе\"\r\n                />\r\n            </div>\r\n            <br />\r\n            <button class=\"button\" id=\"add-button\">Добавить</button>\r\n            </div>`;\r\n            \r\n\r\n      appEl.innerHTML = appHtml;\r\n\r\n        const buttonElement = document.getElementById(\"add-button\");\r\n        const listElement = document.getElementById(\"list\");\r\n        const textInputElement = document.getElementById(\"text-input\");\r\n        const deleteButtons = document.querySelectorAll(\".delete-button\");\r\n\r\n        for (const deleteButton of deleteButtons) {\r\n        deleteButton.addEventListener(\"click\", (event) => {\r\n          event.stopPropagation();\r\n\r\n          const id = deleteButton.dataset.id;\r\n\r\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)({id, token}).then((responseData) => {\r\n              tasks = responseData.todos;\r\n              renderApp();\r\n            });\r\n\r\n          renderApp();\r\n        });\r\n      }\r\n\r\n\r\n        buttonElement.addEventListener(\"click\", () => {\r\n            if (textInputElement.value === \"\") {\r\n                return;\r\n            }\r\n\r\n            buttonElement.disabled = true;\r\n            buttonElement.textContent = \"Задача добавляется...\";\r\n\r\n\r\n                (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)({\r\n                    text:textInputElement.value,\r\n                    token,\r\n                })\r\n                .then(() => {\r\n                // TODO: кинуть исключение\r\n                textInputElement.value = \"\";\r\n                })\r\n                .then(() => {\r\n                return fetchTodosAndRender();\r\n                })\r\n                .then(() => {\r\n                buttonElement.disabled = false;\r\n                buttonElement.textContent = \"Добавить\";\r\n                })\r\n                .catch((error) => {\r\n                console.error(error);\r\n                alert(\"Кажется, у вас проблемы с интернетом, попробуйте позже\");\r\n                buttonElement.disabled = false;\r\n                buttonElement.textContent = \"Добавить\";\r\n                });\r\n\r\n            renderApp();\r\n        });  \r\n\r\n      \r\n    };\r\n\r\n    // fetchTodosAndRender();\r\n    renderApp();\r\n   \r\n\n\n//# sourceURL=webpack://api-coding-live/./index.js?");

/***/ }),

/***/ "./lib/formatDate/formatDate.js":
/*!**************************************!*\
  !*** ./lib/formatDate/formatDate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDateToRu: () => (/* binding */ formatDateToRu),\n/* harmony export */   formatDateToUs: () => (/* binding */ formatDateToUs)\n/* harmony export */ });\n// Файл lib/formatDate/formatDate.js\r\n\r\n// Приводим дату к формату ДД/ММ/ГГГГ ЧЧ:ММ\r\n\r\nconst formatDateToRu = (date) => {\r\n    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;\r\n  };\r\n\r\n// Приводим дату к формату ММ-ДД-ГГГГ ЧЧ:ММ\r\n\r\nconst formatDateToUs = (date) => {\r\n    return `${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;\r\n  };\n\n//# sourceURL=webpack://api-coding-live/./lib/formatDate/formatDate.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
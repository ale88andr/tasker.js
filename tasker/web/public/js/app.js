/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class TaskController {\r\n    constructor(model, view) {\r\n        this.model = model;\r\n        this.view = view;\r\n\r\n        this.load();\r\n\r\n        view.on('add', this.create.bind(this));\r\n        view.on('toggle', this.toggleStatus.bind(this));\r\n        view.on('edit', this.update.bind(this));\r\n        view.on('delete', this.remove.bind(this));\r\n    }\r\n\r\n    load() {\r\n        const tasks = this.model.getAllTasks((result) => {\r\n            result.forEach(task => {\r\n                this.view.addTaskItem(task)\r\n            })\r\n        });\r\n    }\r\n\r\n    create(name) {\r\n        const item = this.model.createTask(\r\n            { name }, \r\n            this.view.addTaskItem.bind(this.view)\r\n        );\r\n    }\r\n\r\n    toggleStatus({ id, state }) {\r\n        const todo = this.model.updateTask(\r\n            id, \r\n            { state }, \r\n            this.view.toggleTaskItemStatus.bind(this.view)\r\n        );\r\n    }\r\n\r\n    update({ id, title }) {\r\n        const todo = this.model.updateTask(\r\n            id, \r\n            { name: title }, \r\n            this.view.updateTaskItem.bind(this.view)\r\n        );\r\n    }\r\n\r\n    remove(id) {\r\n        this.model.removeTask(\r\n            id, \r\n            this.view.removeTaskItem.bind(this.view)\r\n        );\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (TaskController);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzPzQ3NjYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGFza0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkKCk7XHJcblxyXG4gICAgICAgIHZpZXcub24oJ2FkZCcsIHRoaXMuY3JlYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHZpZXcub24oJ3RvZ2dsZScsIHRoaXMudG9nZ2xlU3RhdHVzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHZpZXcub24oJ2VkaXQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB2aWV3Lm9uKCdkZWxldGUnLCB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy5tb2RlbC5nZXRBbGxUYXNrcygocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmFkZFRhc2tJdGVtKHRhc2spXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKG5hbWUpIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5tb2RlbC5jcmVhdGVUYXNrKFxyXG4gICAgICAgICAgICB7IG5hbWUgfSwgXHJcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRUYXNrSXRlbS5iaW5kKHRoaXMudmlldylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN0YXR1cyh7IGlkLCBzdGF0ZSB9KSB7XHJcbiAgICAgICAgY29uc3QgdG9kbyA9IHRoaXMubW9kZWwudXBkYXRlVGFzayhcclxuICAgICAgICAgICAgaWQsIFxyXG4gICAgICAgICAgICB7IHN0YXRlIH0sIFxyXG4gICAgICAgICAgICB0aGlzLnZpZXcudG9nZ2xlVGFza0l0ZW1TdGF0dXMuYmluZCh0aGlzLnZpZXcpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoeyBpZCwgdGl0bGUgfSkge1xyXG4gICAgICAgIGNvbnN0IHRvZG8gPSB0aGlzLm1vZGVsLnVwZGF0ZVRhc2soXHJcbiAgICAgICAgICAgIGlkLCBcclxuICAgICAgICAgICAgeyBuYW1lOiB0aXRsZSB9LCBcclxuICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZVRhc2tJdGVtLmJpbmQodGhpcy52aWV3KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGlkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5yZW1vdmVUYXNrKFxyXG4gICAgICAgICAgICBpZCwgXHJcbiAgICAgICAgICAgIHRoaXMudmlldy5yZW1vdmVUYXNrSXRlbS5iaW5kKHRoaXMudmlldylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrQ29udHJvbGxlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Task {\r\n    constructor(state = []) {\r\n        this._state = state;\r\n\r\n        this._tasksAPIUrlPath = '/api/v1/tasks/';\r\n    }\r\n\r\n    getAllTasks(callback) {\r\n        let xhr = new XMLHttpRequest();\r\n        xhr.open('GET', this._tasksAPIUrlPath, true);\r\n\r\n        xhr.onload = function () {\r\n            if (xhr.readyState === xhr.DONE) {\r\n                if (xhr.status === 200) {\r\n                    callback(JSON.parse(this.responseText));\r\n                } else {\r\n                    alert( `Error: ${xhr.status}: ${xhr.statusText}` );\r\n                }\r\n            }\r\n        };\r\n\r\n        xhr.send();\r\n    }\r\n\r\n    findTask(id) {\r\n        return this._state.find(item => item.id == id);\r\n    }\r\n\r\n    createTask(task, callback) {\r\n        fetch(this._tasksAPIUrlPath, {\r\n            headers: {\r\n                'Accept': 'application/json, text/plain, */*',\r\n                'Content-Type': 'application/json'\r\n            },\r\n            method: 'POST',\r\n            body: JSON.stringify(task),\r\n        })\r\n            .then(response => { response.text().then(\r\n                    text => callback(JSON.parse(text))\r\n                )\r\n            })\r\n            .catch(error => alert(error));\r\n    }\r\n\r\n    updateTask(id, data, callback) {\r\n        fetch(`${this._tasksAPIUrlPath}${id}/state/`, {\r\n            headers: {\r\n                'Accept': 'application/json, text/plain, */*',\r\n                'Content-Type': 'application/json'\r\n            },\r\n            method: 'PUT',\r\n            body: JSON.stringify(data),\r\n        })\r\n            .then(response => { response.text().then(\r\n                    text => callback(JSON.parse(text))\r\n                )\r\n            })\r\n            .catch(error => alert(error));\r\n    }\r\n\r\n    removeTask(id, callback) {\r\n        fetch(`${this._tasksAPIUrlPath}${id}/`, { method: 'DELETE' })\r\n            .then(response => { response.text().then(\r\n                    text => callback(id)\r\n                )\r\n            })\r\n            .catch(error => alert(error));\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (Task);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcz85NGVjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdGUgPSBbXSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuX3Rhc2tzQVBJVXJsUGF0aCA9ICcvYXBpL3YxL3Rhc2tzLyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsVGFza3MoY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHRoaXMuX3Rhc2tzQVBJVXJsUGF0aCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0geGhyLkRPTkUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCBgRXJyb3I6ICR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kVGFzayhpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PSBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGFzayh0YXNrLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGZldGNoKHRoaXMuX3Rhc2tzQVBJVXJsUGF0aCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YXNrKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IHJlc3BvbnNlLnRleHQoKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgPT4gY2FsbGJhY2soSlNPTi5wYXJzZSh0ZXh0KSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFzayhpZCwgZGF0YSwgY2FsbGJhY2spIHtcclxuICAgICAgICBmZXRjaChgJHt0aGlzLl90YXNrc0FQSVVybFBhdGh9JHtpZH0vc3RhdGUvYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgcmVzcG9uc2UudGV4dCgpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9PiBjYWxsYmFjayhKU09OLnBhcnNlKHRleHQpKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gYWxlcnQoZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYXNrKGlkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGZldGNoKGAke3RoaXMuX3Rhc2tzQVBJVXJsUGF0aH0ke2lkfS9gLCB7IG1ldGhvZDogJ0RFTEVURScgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyByZXNwb25zZS50ZXh0KCkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0+IGNhbGxiYWNrKGlkKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gYWxlcnQoZXJyb3IpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzaztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(3);\n\r\n\r\nclass TaskView extends __WEBPACK_IMPORTED_MODULE_0__helpers_js__[\"a\" /* EventEmitter */] {\r\n    constructor() {\r\n        super();\r\n\r\n        this.form = document.getElementById('create-task-form');\r\n        this.input = document.getElementById('create-task-form-title');\r\n        this.list = document.getElementById('task-list');\r\n\r\n        this.form.addEventListener('submit', this.submitTaskForm.bind(this));\r\n    }\r\n\r\n    createElement(todo) {\r\n        const checkbox = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__[\"b\" /* createElement */])('input', { type: 'checkbox', className: 'checkbox', checked: todo.state == 2 ? 'checked' : ''});\r\n        const label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__[\"b\" /* createElement */])('label', { className: 'title' }, todo.name);\r\n        const editInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__[\"b\" /* createElement */])('input', { type: 'text', className: 'textfield' });\r\n        const editButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__[\"b\" /* createElement */])('button', { className: 'edit' }, 'Изменить');\r\n        const deleteButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__[\"b\" /* createElement */])('button', { className: 'delete' }, 'Удалить');\r\n        const item = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__[\"b\" /* createElement */])(\r\n            'li', \r\n            { className: `task-item${todo.state == 2 ? ' completed' : ''}`, 'data-id': todo.id },\r\n            checkbox, label, editInput, editButton, deleteButton\r\n        );\r\n\r\n        return this.addEventListeners(item);\r\n    }\r\n\r\n    addEventListeners(item) {\r\n        const checkbox = item.querySelector('.checkbox');\r\n        const editButton = item.querySelector('.edit');\r\n        const deleteButton = item.querySelector('.delete');\r\n\r\n        checkbox.addEventListener('change', this.toggleTaskCheckboxStatus.bind(this));\r\n        editButton.addEventListener('click', this.submitTaskUpdateForm.bind(this));\r\n        deleteButton.addEventListener('click', this.clickRemoveTaskButton.bind(this));\r\n\r\n        return item;\r\n    }\r\n\r\n    submitTaskForm(event) {\r\n        event.preventDefault();\r\n\r\n        const inputValue = this.input.value.trim();\r\n\r\n        if (!inputValue) {\r\n            return alert('Необходимо ввести название задачи');\r\n        }\r\n\r\n        this.emit('add', inputValue);\r\n    }\r\n\r\n    toggleTaskCheckboxStatus({ target }) {\r\n        const taskItem = target.parentNode;\r\n        const id = taskItem.getAttribute('data-id');\r\n        const state = target.checked ? 2 : 1;\r\n        \r\n        this.emit('toggle', { id, state });\r\n    }\r\n\r\n    submitTaskUpdateForm({ target }) {\r\n        const taskItem = target.parentNode;\r\n        const id = taskItem.getAttribute('data-id');\r\n        const label = taskItem.querySelector('.title');\r\n        const input = taskItem.querySelector('.textfield');\r\n        const editButton = taskItem.querySelector('button.edit');\r\n        const title = input.value;\r\n        const isEditing = taskItem.classList.contains('editing');\r\n\r\n        if (isEditing) {\r\n            this.emit('edit', { id, title });\r\n        } else {\r\n            input.value = label.textContent;\r\n            editButton.textContent = 'Сохранить';\r\n            taskItem.classList.add('editing');\r\n        }\r\n    }\r\n\r\n    clickRemoveTaskButton({ target }) {\r\n        const taskItem = target.parentNode;\r\n        const id = taskItem.getAttribute('data-id');\r\n\r\n        this.emit('delete', id)\r\n    }\r\n\r\n    findTaskItem(id) {\r\n        return this.list.querySelector(`[data-id=\"${id}\"]`);\r\n    }\r\n\r\n    addTaskItem(task) {\r\n        const taskItem = this.createElement(task);\r\n\r\n        this.input.value = '';\r\n        this.list.appendChild(taskItem);\r\n    }\r\n\r\n    toggleTaskItemStatus(todo) {\r\n        const taskItem = this.findTaskItem(todo.id);\r\n        const checkbox = taskItem.querySelector('.checkbox');\r\n\r\n        checkbox.checked = todo.state == 2 ? true : '';\r\n\r\n        if (todo.state == 2) {\r\n            taskItem.classList.add('completed');\r\n        } else {\r\n            taskItem.classList.remove('completed');\r\n        }\r\n    }\r\n\r\n    updateTaskItem(todo) {\r\n        const taskItem = this.findTaskItem(todo.id);\r\n        const label = taskItem.querySelector('.title');\r\n        const input = taskItem.querySelector('textfield');\r\n        const editButton = taskItem.querySelector('button.edit');\r\n\r\n        label.textContent = todo.name;\r\n        editButton.textContent = 'Изменить';\r\n        taskItem.classList.remove('editing');\r\n    }\r\n\r\n    removeTaskItem(id) {\r\n        const taskItem = this.findTaskItem(id);\r\n        this.list.removeChild(taskItem);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (TaskView);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3LmpzPzMyMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcclxuXHJcbmNsYXNzIFRhc2tWaWV3IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtdGFzay1mb3JtJyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtdGFzay1mb3JtLXRpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xyXG5cclxuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRUYXNrRm9ybS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbGVtZW50KHRvZG8pIHtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB0eXBlOiAnY2hlY2tib3gnLCBjbGFzc05hbWU6ICdjaGVja2JveCcsIGNoZWNrZWQ6IHRvZG8uc3RhdGUgPT0gMiA/ICdjaGVja2VkJyA6ICcnfSk7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgY2xhc3NOYW1lOiAndGl0bGUnIH0sIHRvZG8ubmFtZSk7XHJcbiAgICAgICAgY29uc3QgZWRpdElucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICd0ZXh0JywgY2xhc3NOYW1lOiAndGV4dGZpZWxkJyB9KTtcclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzc05hbWU6ICdlZGl0JyB9LCAn0JjQt9C80LXQvdC40YLRjCcpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3NOYW1lOiAnZGVsZXRlJyB9LCAn0KPQtNCw0LvQuNGC0YwnKTtcclxuICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ2xpJywgXHJcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBgdGFzay1pdGVtJHt0b2RvLnN0YXRlID09IDIgPyAnIGNvbXBsZXRlZCcgOiAnJ31gLCAnZGF0YS1pZCc6IHRvZG8uaWQgfSxcclxuICAgICAgICAgICAgY2hlY2tib3gsIGxhYmVsLCBlZGl0SW5wdXQsIGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XHJcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcclxuXHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGVUYXNrQ2hlY2tib3hTdGF0dXMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3VibWl0VGFza1VwZGF0ZUZvcm0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja1JlbW92ZVRhc2tCdXR0b24uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdFRhc2tGb3JtKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUudHJpbSgpO1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfQndC10L7QsdGF0L7QtNC40LzQviDQstCy0LXRgdGC0Lgg0L3QsNC30LLQsNC90LjQtSDQt9Cw0LTQsNGH0LgnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgnYWRkJywgaW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGFza0NoZWNrYm94U3RhdHVzKHsgdGFyZ2V0IH0pIHtcclxuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGFza0l0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0YXJnZXQuY2hlY2tlZCA/IDIgOiAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZW1pdCgndG9nZ2xlJywgeyBpZCwgc3RhdGUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0VGFza1VwZGF0ZUZvcm0oeyB0YXJnZXQgfSkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0YXNrSXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignLnRleHRmaWVsZCcpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCdidXR0b24uZWRpdCcpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNFZGl0aW5nID0gdGFza0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0aW5nJyk7XHJcblxyXG4gICAgICAgIGlmIChpc0VkaXRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdlZGl0JywgeyBpZCwgdGl0bGUgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBsYWJlbC50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfQodC+0YXRgNCw0L3QuNGC0YwnO1xyXG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdlZGl0aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrUmVtb3ZlVGFza0J1dHRvbih7IHRhcmdldCB9KSB7XHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBpZCA9IHRhc2tJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ2RlbGV0ZScsIGlkKVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRUYXNrSXRlbShpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2tJdGVtKHRhc2spIHtcclxuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IHRoaXMuY3JlYXRlRWxlbWVudCh0YXNrKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGFza0l0ZW1TdGF0dXModG9kbykge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gdGhpcy5maW5kVGFza0l0ZW0odG9kby5pZCk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcclxuXHJcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRvZG8uc3RhdGUgPT0gMiA/IHRydWUgOiAnJztcclxuXHJcbiAgICAgICAgaWYgKHRvZG8uc3RhdGUgPT0gMikge1xyXG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFza0l0ZW0odG9kbykge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gdGhpcy5maW5kVGFza0l0ZW0odG9kby5pZCk7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRmaWVsZCcpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCdidXR0b24uZWRpdCcpO1xyXG5cclxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRvZG8ubmFtZTtcclxuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ9CY0LfQvNC10L3QuNGC0YwnO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYXNrSXRlbShpZCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gdGhpcy5maW5kVGFza0l0ZW0oaWQpO1xyXG4gICAgICAgIHRoaXMubGlzdC5yZW1vdmVDaGlsZCh0YXNrSXRlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tWaWV3O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return EventEmitter; });\nfunction createElement(tag, props, ...children) {\r\n    const element = document.createElement(tag);\r\n\r\n    Object.keys(props).forEach(key => element[key] = props[key]);\r\n\r\n    Object.keys(props).forEach(key => {\r\n        if (key.startsWith('data-')) {\r\n            element.setAttribute(key, props[key]);\r\n        } else {\r\n            element[key] = props[key];\r\n        }\r\n    });\r\n\r\n    children.forEach(child => {\r\n        if (typeof child === 'string' || typeof child === 'number') {\r\n            child = document.createTextNode(child);\r\n        }\r\n        element.appendChild(child);\r\n    });\r\n\r\n    return element;\r\n}\r\n\r\nclass EventEmitter {\r\n    constructor() {\r\n        this.events = {};\r\n    }\r\n\r\n    on(type, callback) {\r\n        this.events[type] = this.events[type] || [];\r\n        this.events[type].push(callback);\r\n    }\r\n\r\n    emit(type, arg) {\r\n        if (this.events[type]) {\r\n            this.events[type].forEach(callback => callback(arg));\r\n        }\r\n    }\r\n}\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLmpzPzcxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChrZXkgPT4gZWxlbWVudFtrZXldID0gcHJvcHNba2V5XSk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSBwcm9wc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uKHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHNbdHlwZV0gPSB0aGlzLmV2ZW50c1t0eXBlXSB8fCBbXTtcclxuICAgICAgICB0aGlzLmV2ZW50c1t0eXBlXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBlbWl0KHR5cGUsIGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1t0eXBlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1t0eXBlXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKGFyZykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgRXZlbnRFbWl0dGVyIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVscGVycy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(0);\n\r\n\r\n\r\n\r\nconst model = new __WEBPACK_IMPORTED_MODULE_0__model__[\"a\" /* default */]();\r\nconst view = new __WEBPACK_IMPORTED_MODULE_1__view__[\"a\" /* default */]();\r\nconst controller = new __WEBPACK_IMPORTED_MODULE_2__controller__[\"a\" /* default */](model, view);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgVGFza1ZpZXcgZnJvbSAnLi92aWV3JztcclxuaW1wb3J0IFRhc2tDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5jb25zdCBtb2RlbCA9IG5ldyBUYXNrKCk7XHJcbmNvbnN0IHZpZXcgPSBuZXcgVGFza1ZpZXcoKTtcclxuY29uc3QgY29udHJvbGxlciA9IG5ldyBUYXNrQ29udHJvbGxlcihtb2RlbCwgdmlldyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);
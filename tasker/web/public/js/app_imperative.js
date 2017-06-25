"use strict";

const module = (document => {
    function createElement(tagName, props, ...childrens) {
        const element = document.createElement(tagName);

        Object.keys(props).forEach(key => element[key] = props[key]);

        if (childrens.length > 0) {
            childrens.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
                element.appendChild(child);
            });
        }

        return element;
    }

    function createTask(data) {
        const listItem = createElement(
            'li', 
            { className: 'task-item'},
            // ...childrens
            createElement('input', { type: 'checkbox', className: 'checkbox' }), 
            createElement('label', { className: 'title' }, data.title), 
            createElement('input', { type: 'text', className: 'textfield' }), 
            createElement('button', { className: 'delete' }, 'Удалить'), 
            createElement('button', { className: 'edit' }, 'Изменить')
        );

        bindEvents(listItem);

        return listItem;
    }

    function bindEvents(todoItem) {
        todoItem.querySelector('.checkbox').addEventListener('change', toggleTaskItemStatus);
        todoItem.querySelector('button.edit').addEventListener('click', changeTaskTitle);
        todoItem.querySelector('button.delete').addEventListener('click', removeTask);
    }

    function submitTaskForm(event){
        event.preventDefault();
        const taskTitle = taskFormTitleInput.value.trim();

        if (taskTitle == '') {
            return alert('Необходимо ввести задачу!');
        }

        const task = createTask({ title: taskTitle });
        taskList.appendChild(task);
        taskFormTitleInput.value = '';
    }

    function toggleTaskItemStatus(event) {
        // console.log(event.target);
        // console.log(this);
        this.parentNode.classList.toggle('completed');
    }

    function changeTaskTitle() {
        const currentTask = this.parentNode;
        const currentTaskTitle = currentTask.querySelector('.title');
        const currentTaskTitleInput = currentTask.querySelector('.textfield');

        if (currentTask.classList.contains('completed')) {
            return alert('Невозможно изменить текст уже выполненной задачи!');
        }

        if (currentTask.classList.contains('editing')) {
            currentTaskTitle.innerText = currentTaskTitleInput.value;
            this.innerText = 'Изменить';
        } else {
            currentTaskTitleInput.value = currentTaskTitle.innerText;
            this.innerText = 'Сохранить';
        }

        currentTask.classList.toggle('editing');
    }

    function removeTask() {
        taskList.removeChild(this.parentNode);
    }

    const taskForm = document.getElementById('create-task-form');
    const taskFormTitleInput = document.getElementById('create-task-form-title');
    const taskList = document.getElementById('task-list');
    const taskItems = document.querySelectorAll('.task-item');

    function main() {
        taskForm.addEventListener('submit', submitTaskForm);
        taskItems.forEach(function(item) {
            bindEvents(item);
        });
    }

    return main;

})(document);

module();
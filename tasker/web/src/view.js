import { createElement, EventEmitter } from './helpers.js';

class TaskView extends EventEmitter {
    constructor() {
        super();

        this.form = document.getElementById('create-task-form');
        this.input = document.getElementById('create-task-form-title');
        this.list = document.getElementById('task-list');

        this.form.addEventListener('submit', this.submitTaskForm.bind(this));
    }

    createElement(todo) {
        const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox', checked: todo.state == 2 ? 'checked' : ''});
        const label = createElement('label', { className: 'title' }, todo.name);
        const editInput = createElement('input', { type: 'text', className: 'textfield' });
        const editButton = createElement('button', { className: 'edit' }, 'Изменить');
        const deleteButton = createElement('button', { className: 'delete' }, 'Удалить');
        const item = createElement(
            'li', 
            { className: `task-item${todo.state == 2 ? ' completed' : ''}`, 'data-id': todo.id },
            checkbox, label, editInput, editButton, deleteButton
        );

        return this.addEventListeners(item);
    }

    addEventListeners(item) {
        const checkbox = item.querySelector('.checkbox');
        const editButton = item.querySelector('.edit');
        const deleteButton = item.querySelector('.delete');

        checkbox.addEventListener('change', this.toggleTaskCheckboxStatus.bind(this));
        editButton.addEventListener('click', this.submitTaskUpdateForm.bind(this));
        deleteButton.addEventListener('click', this.clickRemoveTaskButton.bind(this));

        return item;
    }

    submitTaskForm(event) {
        event.preventDefault();

        const inputValue = this.input.value.trim();

        if (!inputValue) {
            return alert('Необходимо ввести название задачи');
        }

        this.emit('add', inputValue);
    }

    toggleTaskCheckboxStatus({ target }) {
        const taskItem = target.parentNode;
        const id = taskItem.getAttribute('data-id');
        const state = target.checked ? 2 : 1;
        
        this.emit('toggle', { id, state });
    }

    submitTaskUpdateForm({ target }) {
        const taskItem = target.parentNode;
        const id = taskItem.getAttribute('data-id');
        const label = taskItem.querySelector('.title');
        const input = taskItem.querySelector('.textfield');
        const editButton = taskItem.querySelector('button.edit');
        const title = input.value;
        const isEditing = taskItem.classList.contains('editing');

        if (isEditing) {
            this.emit('edit', { id, title });
        } else {
            input.value = label.textContent;
            editButton.textContent = 'Сохранить';
            taskItem.classList.add('editing');
        }
    }

    clickRemoveTaskButton({ target }) {
        const taskItem = target.parentNode;
        const id = taskItem.getAttribute('data-id');

        this.emit('delete', id)
    }

    findTaskItem(id) {
        return this.list.querySelector(`[data-id="${id}"]`);
    }

    addTaskItem(task) {
        const taskItem = this.createElement(task);

        this.input.value = '';
        this.list.appendChild(taskItem);
    }

    toggleTaskItemStatus(todo) {
        const taskItem = this.findTaskItem(todo.id);
        const checkbox = taskItem.querySelector('.checkbox');

        checkbox.checked = todo.state == 2 ? true : '';

        if (todo.state == 2) {
            taskItem.classList.add('completed');
        } else {
            taskItem.classList.remove('completed');
        }
    }

    updateTaskItem(todo) {
        const taskItem = this.findTaskItem(todo.id);
        const label = taskItem.querySelector('.title');
        const input = taskItem.querySelector('textfield');
        const editButton = taskItem.querySelector('button.edit');

        label.textContent = todo.name;
        editButton.textContent = 'Изменить';
        taskItem.classList.remove('editing');
    }

    removeTaskItem(id) {
        const taskItem = this.findTaskItem(id);
        this.list.removeChild(taskItem);
    }
}

export default TaskView;
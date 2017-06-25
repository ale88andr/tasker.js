class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.load();

        view.on('add', this.create.bind(this));
        view.on('toggle', this.toggleStatus.bind(this));
        view.on('edit', this.update.bind(this));
        view.on('delete', this.remove.bind(this));
    }

    load() {
        const tasks = this.model.getAllTasks((result) => {
            result.forEach(task => {
                this.view.addTaskItem(task)
            })
        });
    }

    create(name) {
        const item = this.model.createTask(
            { name }, 
            this.view.addTaskItem.bind(this.view)
        );
    }

    toggleStatus({ id, state }) {
        const todo = this.model.updateTask(
            id, 
            { state }, 
            this.view.toggleTaskItemStatus.bind(this.view)
        );
    }

    update({ id, title }) {
        const todo = this.model.updateTask(
            id, 
            { name: title }, 
            this.view.updateTaskItem.bind(this.view)
        );
    }

    remove(id) {
        this.model.removeTask(
            id, 
            this.view.removeTaskItem.bind(this.view)
        );
    }
}

export default TaskController;
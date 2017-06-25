class Task {
    constructor(state = []) {
        this._state = state;

        this._tasksAPIUrlPath = '/api/v1/tasks/';
    }

    getAllTasks(callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this._tasksAPIUrlPath, true);

        xhr.onload = function () {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    callback(JSON.parse(this.responseText));
                } else {
                    alert( `Error: ${xhr.status}: ${xhr.statusText}` );
                }
            }
        };

        xhr.send();
    }

    findTask(id) {
        return this._state.find(item => item.id == id);
    }

    createTask(task, callback) {
        fetch(this._tasksAPIUrlPath, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(task),
        })
            .then(response => { response.text().then(
                    text => callback(JSON.parse(text))
                )
            })
            .catch(error => alert(error));
    }

    updateTask(id, data, callback) {
        fetch(`${this._tasksAPIUrlPath}${id}/state/`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data),
        })
            .then(response => { response.text().then(
                    text => callback(JSON.parse(text))
                )
            })
            .catch(error => alert(error));
    }

    removeTask(id, callback) {
        fetch(`${this._tasksAPIUrlPath}${id}/`, { method: 'DELETE' })
            .then(response => { response.text().then(
                    text => callback(id)
                )
            })
            .catch(error => alert(error));
    }
}

export default Task;
import Task from './model';
import TaskView from './view';
import TaskController from './controller';

const model = new Task();
const view = new TaskView();
const controller = new TaskController(model, view);
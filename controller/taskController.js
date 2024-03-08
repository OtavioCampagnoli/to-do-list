const taskModel = require("../models/taskModel");
class TaskController {
  find() {
    return taskModel.list();
  }
  add(newTask) {
    return taskModel.add(newTask);
  }
  update(id, newTask) {
    return taskModel.update(id, newTask);
  }
  delete(id) {
    return taskModel.delete(id);
  }
}

module.exports = new TaskController();
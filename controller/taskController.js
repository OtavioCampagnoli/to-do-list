class TaskController {
  find() {
    return "Finding the tasks...";
  }
  add() {
    return "Adding new task...";
  }
  update(id) {
    return `Updating task: ${id}...`;
  }
  delete(id) {
    return `Deleting task: ${id}...`;
  }
}

module.exports = new TaskController();
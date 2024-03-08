const { Router } = require("express");
const router = Router();
const taskController = require("../controller/taskController");

router.get("/tasks", (req, res) => {
  const taskList = taskController.find();
  taskList
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

router.post("/task", (req, res) => {
  const newTask = req.body;
  console.log('olá', newTask);
  const responseNewTask = taskController.add(newTask);
  responseNewTask
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

router.put("/task/:id", (req, res) => {
  const { id } = req.params;
  const newTask = req.body;
  const responseNewTask = taskController.update(id, newTask);
  responseNewTask
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/task/:id", (req, res) => {
  const { id } = req.params;
  const response = taskController.delete(id);
  response
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = router; // export router

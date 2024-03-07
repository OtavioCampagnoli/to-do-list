const { Router } = require("express");
const router = Router();
const taskController = require("../controller/taskController");

router.get("/task", (req, res) => {
  const response = taskController.find();
  res.send(response);
});

router.post("/task", (req, res) => {
  const response = taskController.add();
  res.send(response);
});

router.put("/task/:id", (req, res) => {
  const { id } = req.params;
  const response = taskController.update(id);
  res.send(response);
});

router.delete("/task/:id", (req, res) => {
  const { id } = req.params;
  const response = taskController.delete(id);
  res.send(response);
});

module.exports = router; // export router
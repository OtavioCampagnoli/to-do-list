const { Router } = require("express");
const router = Router();

router.get("/task", (req, res) => {
  res.send("You tasks will be listed...");
});

router.post("/task", (req, res) => {
  res.send("Your task will be created...");
});

router.put("/task/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Your task: ${id} will be updated...`);
});

router.delete("/task/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Your task: ${id} will be deleted...`);
});

module.exports = router; // export router
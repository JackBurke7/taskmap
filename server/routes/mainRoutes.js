const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.getAllTasks);
router.post("/add-task", mainController.addTask);
router.put("/edit-task/:id", mainController.editTask);
router.delete("/delete-task/:id", mainController.deleteTask);

module.exports = router;

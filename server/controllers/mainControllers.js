const Task = require('../models/Task');

const mainController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.find({ userId: req.user._id });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  addTask: async (req, res) => {
    try {
      const { title, description, category, dueDate } = req.body;
      const newTask = new Task({
        title,
        description,
        category,
        dueDate,
        userId: req.user._id,
      });
      const savedTask = await newTask.save();
      res.status(201).json(savedTask);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  editTask: async (req, res) => {
    try {
      const { title, description, category, dueDate } = req.body;
      const taskId = req.params.id;
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { title, description, category, dueDate },
        { new: true }
      );
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteTask: async (req, res) => {
    try {
      const taskId = req.params.id;
      await Task.findByIdAndDelete(taskId);
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = mainController;

import React, { useContext, useState, useEffect } from "react";
import TaskForm from './TaskForm';

const TaskForm = () => {
  const { addTask, editItem, editTask, user } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "dueDate":
        setDueDate(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      category,
      dueDate,
      userId: user._id, 
    };
    if (editItem !== null) {
      editTask(newTask, editItem._id);
    } else {
      addTask(newTask);
      setTitle("");
      setDescription("");
      setCategory("");
      setDueDate("");
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
      setDescription(editItem.description || "");
      setCategory(editItem.category || "");
      setDueDate(editItem.dueDate || "");
    } else {
      setTitle("");
      setDescription("");
      setCategory("");
      setDueDate("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        name="title"
        className="task-input"
        placeholder="Add Task..."
        required
      />
    </form>
  );
};

export default TaskForm;

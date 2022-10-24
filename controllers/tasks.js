const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Single task
const getSingleTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    console.log(taskID);
    const task = await Task.findOne({ _id: taskID });
    console.log(task);
    if (!task) {
      return res.status(404).json({ msg: `No task with ID: ${taskID}` });
    }
    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
const updateTask = (req, res) => {
  res.send("UPDATE TASK");
};
const deleteTask = (req, res) => {
  res.send("DELETE TASK");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};

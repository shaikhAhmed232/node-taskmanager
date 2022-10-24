const express = require("express");
const controllers = require("../controllers/tasks");
const router = express.Router();

router
  .route("/tasks")
  .get(controllers.getAllTasks)
  .post(controllers.createTask);

router
  .route("/tasks/:id")
  .get(controllers.getSingleTask)
  .patch(controllers.updateTask)
  .delete(controllers.deleteTask);

module.exports = router;

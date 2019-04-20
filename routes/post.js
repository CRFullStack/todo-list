var express = require("express");
var router = express.Router();
var TaskModel = require("../db/models/taskList");
var mongodb = require("mongodb");

router.post("/create-task", (req, res) => {
  let _newTask = req.body.newTask;
  if (_newTask !== null && _newTask.length > 0) {
    taskmodel = new TaskModel({
      task: _newTask
    });
    // set the bears name (comes from the request)
    taskmodel.save().then(() => {
      TaskModel.find().then(data => res.json(data));
    });
  } else {
    res.json({ message: "The task cannot be blank!" });
  }
});

router.post("/update-task", (req, res) => {
  let _updateTask = req.body.updateTask;
  let _taskId = req.body.taskId;

  TaskModel.findOne({ _id: _taskId })
    .then(() => {
      TaskModel.update(
        { _id: _taskId },
        {
          $set: { task: _updateTask }
        }
      )
        .then(() => TaskModel.find().then(data => res.json(data)))
        .catch(err => res.json(err));
    })
    .catch(err => res.json({ error: err, message: "Couldn't find ID!" }));
});
module.exports = router;

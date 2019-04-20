var express = require("express");
var router = express.Router();
var TaskModel = require("../db/models/taskList");
var mongodb = require("mongodb");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Connected!");
});

// desc: returns all the task
router.get("/all-task", (req, res) => {
  TaskModel.find().then(data => res.json(data));
});

router.get("/completed-task", (req, res) => {
  let _taskId = req.body.taskId;

  TaskModel.findOne({ _id: _taskId })
    .then(() => {
      TaskModel.update(
        { _id: _taskId },
        {
          $set: { completed: true }
        }
      )
        .then(() => TaskModel.find().then(data => res.json(data)))
        .catch(err => res.json(err));
    })
    .catch(err => res.json({ error: err, message: "Couldn't find ID!" }));
});

module.exports = router;

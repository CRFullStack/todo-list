var express = require("express");
var router = express.Router();
var TaskModel = require("../db/models/taskList");
var mongodb = require("mongodb");

router.delete("/delete-task", (req, res) => {
  let _taskId = req.body.taskId;
  //res.send(`found: ${new mongodb.ObjectID(req.body.taskId)}`);

  TaskModel.findOne({ _id: _taskId })
    .then(() => {
      //res.send("Made it in!");
      TaskModel.remove({ _id: new mongodb.ObjectID(req.body.taskId) })
        .then(() => TaskModel.find().then(data => res.json(data)))
        .catch(err => res.json(err));
    })
    .catch(err => res.json({ error: err, message: "Couldn't find ID!" }));
});

module.exports = router;

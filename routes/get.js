var express = require("express");
var router = express.Router();
var TaskModel = require("../db/models/taskList");
var mongodb = require("mongodb");
const cors = require("cors");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({ message: "Connected!" });
});

// desc: returns all the task
router.get("/all-task", cors(), (req, res) => {
  TaskModel.find().then(data => res.json(data));
});

module.exports = router;

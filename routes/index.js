var express = require("express");
var router = express.Router();
var TaskModel = require("../db/models/taskList");
var mongodb = require("mongodb");
const cors = require("cors");

/* GET home page. */
router.get("/*", cors(), (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

module.exports = router;

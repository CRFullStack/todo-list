var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "A task is required!"]
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Task", TaskSchema);

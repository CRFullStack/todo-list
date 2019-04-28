import React, { Component } from "react";
import { addTask } from "../redux/actions/addTaskActions";
import { submitTask } from "../redux/actions/addTaskActions";
import { testAction } from "../redux/actions/addTaskActions";
import { connect } from "react-redux"; //bridge for react-redux

export default props => (
  <form action="#" id="create-course-form">
    Add Task:{" "}
    <input
      type="text"
      name="fname"
      value={props.taskInputField.taskInput}
      onChange={e => props.addTaskCall(e)}
    />
    <input
      type="submit"
      value="Submit"
      onClick={e => props.submitTaskCall(e)}
    />
  </form>
);

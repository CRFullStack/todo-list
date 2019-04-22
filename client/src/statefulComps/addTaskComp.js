import React, { Component } from "react";
import { addTask } from "../redux/actions/addTaskActions";
import { submitTask } from "../redux/actions/addTaskActions";
import { testAction } from "../redux/actions/addTaskActions";
import { connect } from "react-redux"; //bridge for react-redux

class AddTask extends Component {
  submitTaskCall(e) {
    e.preventDefault();
    let dataFromStore = this.props.task;
    this.props.submitTask(dataFromStore);
  }

  render() {
    return (
      <form action="#">
        Add Task:{" "}
        <input
          type="text"
          name="fname"
          value={this.props.task.addTask}
          onChange={evt => this.props.addTask(evt)}
        />
        <input
          type="submit"
          value="Submit"
          onClick={e => this.submitTaskCall(e)}
        />
      </form>
    );
  }
}

// Map state to props gets the props from the store
// now state can be accessed and passed down to props like so:
// <User username={this.props.user.name}/>
// this *.*.user.name came from our reducer below
const mapStateToProps = state => {
  return {
    task: state.addTaskReducer
  };
};

// This maps the actions from the reducer
// it can be accessed like so:
// <Main setName={(name) => this.props.setName(name)}/>
const mapDispatchToProps = dispatch => {
  return {
    addTask: task => {
      dispatch(addTask(task));
    },
    submitTask: store => {
      dispatch(submitTask(store));
    },
    testAction: e => {
      dispatch(testAction(e));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);

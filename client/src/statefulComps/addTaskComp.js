import React, { Component } from "react";
import { addTask } from "../redux/actions/addTaskActions";
import { connect } from "react-redux"; //bridge for react-redux

class AddTask extends Component {
  render() {
    return (
      <form action="/action_page.php">
        Add Task:{" "}
        <input type="text" name="fname" value={this.props.task.addTask} />
        <input type="submit" value="Submit" />
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
    task: state.reducer
  };
};

// This maps the actions from the reducer
// it can be accessed like so:
// <Main setName={(name) => this.props.setName(name)}/>
const mapDispatchToProps = dispatch => {
  return {
    addTask: task => {
      dispatch(addTask(task));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);

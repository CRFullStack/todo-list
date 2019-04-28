import React, { Component } from "react";
import "../masterCss/App.css";
import "../masterCss/ToDo.css";
import "../masterCss/Completed.css";
import "../masterCss/Circle.css";
import HeaderTitleComp from "../statelessComps/headerTitleComp";
import SectionHeaderComp from "../statelessComps/sectionHeader";
import CompletedTask from "../statelessComps/completedTask";
import AddTaskComp from "../statelessComps/addTaskComp";
import TodoTask from "../statelessComps/todoTask";

import { addTaskAction } from "../redux/actions/addTaskActions";
import { submitTaskAction } from "../redux/actions/addTaskActions";
import { getTaskAction } from "../redux/actions/addTaskActions";
import { taskCompletedAction } from "../redux/actions/addTaskActions";
import { deleteTaskAction } from "../redux/actions/addTaskActions";
import { updateTaskAction } from "../redux/actions/addTaskActions";
import { connect } from "react-redux"; //bridge for react-redux

class App extends Component {
  componentDidMount() {
    // dispatch action to make make api request here
    this.props.getTask();
  }

  addTaskCall = e => {
    e.preventDefault();
    this.props.addTask(e);
  };

  submitTaskCall = e => {
    e.preventDefault();
    let dataFromStore = this.props.taskStore;
    this.props.submitTask(dataFromStore);
  };

  taskCompletedCall = id => {
    let _id = id;
    console.log(`The obj is function: ${_id}`);
    console.log(`The id is function: ${_id.taskId}`);
    this.props.taskCompleted(_id);
  };

  deleteTaskCall = id => {
    let _id = id;
    this.props.deleteTask(_id);
  };

  updateTaskCall = id => {
    let _task = prompt(`Update the task: `);
    id.updateTask = _task;
    this.props.updateTask(id);
  };

  render() {
    return (
      <div className="master-container">
        <section>
          <HeaderTitleComp title={"Task Bubblesss"} />
        </section>

        <section className=" container-fluid">
          <header className="todo-task-header">
            <SectionHeaderComp title={"To-Do"} />
          </header>
          <div className="row">
            <div className="col-md-3" />
            <div className="add-task col-sm-6 text-md-center">
              <AddTaskComp
                submitTaskCall={this.submitTaskCall}
                addTaskCall={this.addTaskCall}
                taskInputField={this.props.taskStore.taskInput}
              />
            </div>
            <div className="col-md-3" />
          </div>
          <div className="row ">
            <div>
              <TodoTask
                allTask={this.props.taskStore.task}
                addTaskObj={{ taskId: "" }}
                taskCompleted={this.taskCompletedCall}
                deleteTask={this.deleteTaskCall}
                updateTask={this.updateTaskCall}
              />
            </div>
          </div>
          <br />
        </section>

        <section className="completed-task completed-task-container container-fluid">
          <header className="completed-task-header">
            <SectionHeaderComp title={"Completed"} />
          </header>
          <div className="row">
            <div>
              <CompletedTask
                allTask={this.props.taskStore.task}
                addTaskObj={{ taskId: "" }}
                deleteTask={this.deleteTaskCall}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// Map state to props gets the props from the store
// now state can be accessed and passed down to props like so:
// <User username={this.props.user.name}/>
// this *.*.user.name came from our reducer below
const mapStateToProps = state => {
  return {
    taskStore: state.addTaskReducer
  };
};

// This maps the actions from the reducer
// it can be accessed like so:
// <Main setName={(name) => this.props.setName(name)}/>
const mapDispatchToProps = dispatch => {
  return {
    addTask: task => {
      dispatch(addTaskAction(task));
    },
    getTask: () => {
      dispatch(getTaskAction());
    },
    taskCompleted: id => {
      dispatch(taskCompletedAction(id));
    },
    deleteTask: id => {
      dispatch(deleteTaskAction(id));
    },
    updateTask: (_id, _task) => {
      dispatch(updateTaskAction(_id, _task));
    },
    submitTask: store => {
      dispatch(submitTaskAction(store));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React, { Component } from "react";
import "../masterCss/App.css";
import "../masterCss/ToDo.css";
import "../masterCss/Completed.css";
import "../masterCss/Circle.css";
import HeaderTitleComp from "../statelessComps/headerTitleComp";
import SectionHeaderComp from "../statelessComps/sectionHeader";
import TaskListComp from "../statelessComps/taskListComp";
import AddTaskComp from "../statelessComps/addTaskComp";

class App extends Component {
  render() {
    return (
      <div className="master-container">
        <header className="App">
          <HeaderTitleComp title={"Task Bubble"} />
        </header>
        <section className="todo-task-container container-fluid">
          <header className="todo-task-header">
            <SectionHeaderComp title={"To-Do"} />
          </header>
          <div className="row ">
            <div className="todo-task col-xs-10 col-sm-10 ">
              <TaskListComp />
            </div>
            <div className="col-md-1" />
            <div className="col-md-1" />
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="add-task col-sm-6 text-md-center">
              <AddTaskComp />
            </div>
            <div className="col-md-3" />
          </div>
        </section>

        <section className="completed-task-container">
          <header className="completed-task-header">
            <SectionHeaderComp title={"Completed"} />
          </header>
          <div className="row">
            <div className="col-md-1" />
            <div className="completed-task col-sm-10">
              <TaskListComp />
            </div>
            <div className="col-md-1" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;

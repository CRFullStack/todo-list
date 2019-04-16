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

class App extends Component {
  render() {
    return (
      <div className="master-container">
        <section>
          <HeaderTitleComp title={"Task Bubble"} />
        </section>

        <section className=" container-fluid">
          <div className="todo-task-container parallax" />
          <header className="todo-task-header">
            <SectionHeaderComp title={"To-Do"} />
          </header>
          <div className="row">
            <div className="col-md-3" />
            <div className="add-task col-sm-6 text-md-center">
              <AddTaskComp />
            </div>
            <div className="col-md-3" />
          </div>
          <div className="row ">
            <div>
              <TodoTask />
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
              <CompletedTask />
            </div>
          </div>
          <div className="todo-task-container parallax" />
        </section>
      </div>
    );
  }
}

export default App;

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
import { setName } from "../redux/actions/userActions"; //pulls actions to dispatch
import { connect } from "react-redux"; //bridge for react-redux

class App extends Component {
  render() {
    return (
      <div className="master-container">
        <section>
          <HeaderTitleComp title={"Task Bubble"} />
        </section>

        <section className=" container-fluid">
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

        <div className="todo-task-container parallax" />

        <section className="completed-task completed-task-container container-fluid">
          <header className="completed-task-header">
            <SectionHeaderComp title={"Completed"} />
          </header>
          <div className="row">
            <div>
              <CompletedTask />
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
    user: state.userReducer,
    math: state.mathReducer
  };
};

// This maps the actions from the reducer
// it can be accessed like so:
// <Main setName={(name) => this.props.setName(name)}/>
const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React from "react";

export default props => (
  <header>
    <div className="App" />
    <div className="bg-text">
      <h1>{props.title}</h1>
      <p>Instructions: </p>
      <ul>
        <li>Add a task.</li>
        <li>The incomplete task show up as red bubbles.</li>
        <li>Hover over the bubbles to bring up actions.</li>
        <li>
          The <i className="far fa-edit" /> will let you edit a task.
        </li>
        <li>
          The <i className="fas fa-check" /> will let you move task to the
          completed section.
        </li>
        <li>Completed task show up as green bubbles</li>
        <li>
          The <i className="fas fa-times" /> removes task completely
        </li>
      </ul>
      <p>Happy Popping!</p>
    </div>
  </header>
);

import React from "react";

export default props => (
  <header>
    <div className="App" />
    <div className="bg-text">
      <h1>{props.title}</h1>
      <h4>Popping off task one bubble at a time</h4>
      <p>Instructions: </p>
      <p>
        Add a task. The red bubbles are incomplete task, while the green bubbles
        mean complete.
      </p>
      <p>Hover over the task to mark it complete, edit it, or delete it!</p>
    </div>
  </header>
);

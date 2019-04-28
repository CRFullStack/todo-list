import React from "react";

export default props => (
  <ul className="ch-grid">
    {console.log(props.todoArr)}
    {props.allTask.map(arr => {
      if (arr.completed === false) {
        return (
          <li key={arr._id}>
            <div className="ch-item ch-img-1" id={arr._id}>
              <h4>{arr.task}</h4>
              <div className="ch-info">
                <p>
                  <i
                    className="fas fa-check"
                    onClick={() => {
                      props.addTaskObj.taskId = arr._id;
                      // console.log(
                      //   `todoTask.js obj: ${props.addTaskObj.taskId}`
                      // );
                      props.taskCompleted(props.addTaskObj);
                    }}
                  />
                  <i
                    className="fas fa-times"
                    onClick={() => {
                      props.addTaskObj.taskId = arr._id;
                      props.deleteTask(props.addTaskObj);
                    }}
                  />
                  <i
                    className="far fa-edit"
                    onClick={() => {
                      props.addTaskObj.taskId = arr._id;
                      props.updateTask(props.addTaskObj);
                    }}
                  />
                </p>
              </div>
            </div>
          </li>
        );
      }
    })}
  </ul>
);
